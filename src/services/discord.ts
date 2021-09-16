import { Client, Intents } from 'discord.js';
import { inject, injectable } from 'inversify';
import { CommandHandler, DiscordClient, Logger } from '../container/interfaces';
import types from '../container/types';

@injectable()
export class DefaultDiscordClient implements DiscordClient {
  private client: Client;

  constructor(
    @inject(types.logger) private logger: Logger,
    @inject(types.commandHandler) private handler: CommandHandler
  ) {
    this.client = new Client({ intents: [Intents.FLAGS.GUILDS] });
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
