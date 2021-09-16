import fs from 'fs';
import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import { Logger } from '../container/interfaces';
import container from '../container/inversify.config';
import types from '../container/types';
import path from 'path';

const clientId = process.env.CLIENT_ID!;
const guildId = process.env.GUILD_ID!;
const token = process.env.BOT_TOKEN!;

const commandFilesPath = path.join(__dirname, '..', 'commands');
const commandFiles = fs
  .readdirSync(commandFilesPath)
  .filter(file => file.endsWith('.js'));

const commands = commandFiles.map(file => {
  const commandPath = path.join(commandFilesPath, file);
  const command = require(commandPath).default;

  return command.data.toJSON();
});

const rest = new REST({ version: '9' }).setToken(token);

export default async () => {
  const logger = container.get<Logger>(types.logger);

  try {
    await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
      body: commands
    });

    logger.log('Successfully registered application commands.');
  } catch (error) {
    logger.log(error, 'error');
  }
};
