import { Client, Intents, Collection } from 'discord.js';
import { inject, injectable } from 'inversify';
import {
  CommandExecutor,
  CommandHandler,
  DiscordClient,
  Logger
} from '../container/interfaces';
import types from '../container/types';
import discoverCommands from '../utils/discoverCommands';
import { Command } from '../utils/Command';

@injectable()
export class DefaultDiscordClient implements DiscordClient {
  private client: Client;

  constructor(
    @inject(types.logger) private logger: Logger,
    @inject(types.commandHandler) private handler: CommandHandler,
    @inject(types.commandExecutor) private executor: CommandExecutor
  ) {
    this.client = new Client({ intents: [Intents.FLAGS.GUILDS] });

    discoverCommands().forEach(c => this.executor.addCommand(c));
  }

  login(token: string) {
    // simply passing handler.handle doesn't work for some reason
    this.client.on('interactionCreate', async interaction =>
      this.handler.handle(interaction)
    );

    this.client.once('ready', () => {
      this.logger.log('Bot is ready');
    });

    this.client.login(token);
  }
}
