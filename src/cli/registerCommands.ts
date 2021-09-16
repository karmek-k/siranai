import { SlashCommandBuilder } from '@discordjs/builders';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';

const clientId = process.env.CLIENT_ID!;
const guildId = process.env.GUILD_ID!;
const token = process.env.BOT_TOKEN!;

const commands = [
  new SlashCommandBuilder().setName('ping').setDescription('Replies with pong!')
].map(command => command.toJSON());

const rest = new REST({ version: '9' }).setToken(token);

export default async () => {
  try {
    await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
      body: commands
    });

    console.log('Successfully registered application commands.');
  } catch (error) {
    console.error(error);
  }
};
