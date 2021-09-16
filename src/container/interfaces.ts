import { Interaction } from 'discord.js';

export interface Database {
  run(sql: string): void;
}

export interface DiscordClient {
  login(token: string): void;
}

export interface Logger {
  log(msg: string, level?: string): void;
}

export interface CommandHandler {
  handle(interaction: Interaction): void;
}
