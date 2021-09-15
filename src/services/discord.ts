import { Client, Intents } from 'discord.js';
import { inject, injectable } from 'inversify';
import { DiscordClient, Logger } from '../container/interfaces';
import types from '../container/types';

@injectable()
export class DefaultDiscordClient implements DiscordClient {
  private client: Client;

  constructor(@inject(types.logger) private logger: Logger) {
    this.client = new Client({ intents: [Intents.FLAGS.GUILDS] });
    this.client.once('ready', () => {
      this.logger.log('Bot is ready');
    });
  }

  login(token: string) {
    this.client.login(token);
  }
}
