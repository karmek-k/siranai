import { Collection, Interaction } from 'discord.js';
import { inject, injectable } from 'inversify';
import { CommandExecutor, Logger } from '../container/interfaces';
import types from '../container/types';
import { Command } from '../utils/Command';

@injectable()
export class DiscordCommandExecutor implements CommandExecutor {
  private commands: Collection<string, Command>;

  constructor(@inject(types.logger) private logger: Logger) {
    this.commands = new Collection();
  }

  addCommand(cmd: Command) {
    this.commands.set(cmd.data.name, cmd);
  }

  async execute(cmdName: string, interaction: Interaction) {
    const cmd = this.commands.get(cmdName);

    if (!cmd || !interaction.isCommand()) {
      return;
    }

    try {
      await cmd.execute(interaction);
    } catch (err) {
      this.logger.log(err, 'error');

      await interaction.reply({
        content: 'There was an error while executing this command!',
        ephemeral: true
      });
    }
  }
}
