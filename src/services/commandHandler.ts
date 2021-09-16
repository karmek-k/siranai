import { Interaction } from 'discord.js';
import { inject, injectable } from 'inversify';
import { CommandHandler, Logger } from '../container/interfaces';
import types from '../container/types';

@injectable()
export class DiscordCommandHandler implements CommandHandler {
  constructor(@inject(types.logger) private logger: Logger) {}

  async handle(interaction: Interaction) {
    if (!interaction.isCommand()) {
      return;
    }

    const { commandName, user } = interaction;

    this.logger.log(`${user.username} invoked command /${commandName}`);
  }
}
