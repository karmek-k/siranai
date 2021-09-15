import { Client, Intents } from 'discord.js';
import { injectable } from 'inversify';
import { DiscordClient } from '../container/interfaces';

@injectable()
export class DefaultDiscordClient implements DiscordClient {
  private client: Client;

  constructor() {
    this.client = new Client({ intents: [Intents.FLAGS.GUILDS] });
    this.client.once('ready', () => {
      console.log('Bot is ready');
    });
  }

  login(token: string) {
    this.client.login(token);
  }
}
