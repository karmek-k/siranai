import { Interaction } from 'discord.js';
import { Command } from '../utils/Command';

export interface Database {
  run(sql: string): void;
}

export interface DiscordClient {
  login(token: string): void;
}

export interface Logger {
  log(msg: any, level?: string): void;
}

export interface CommandHandler {
  handle(interaction: Interaction): void;
}

export interface CommandExecutor {
  addCommand(cmd: Command): void;
  execute(cmdName: string, interaction: Interaction): Promise<void>;
}
