import { SlashCommandBuilder } from '@discordjs/builders';
import { Interaction } from 'discord.js';

export default {
  data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with pong'),

  async execute(interaction: Interaction) {
    if (!interaction.isCommand()) return; // TODO: remove this line somehow
    await interaction.reply('pong');
  }
};
