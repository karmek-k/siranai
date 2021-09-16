import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import { Logger } from '../container/interfaces';
import container from '../container/inversify.config';
import types from '../container/types';
import discoverCommands from '../utils/discoverCommands';

const clientId = process.env.CLIENT_ID!;
const guildId = process.env.GUILD_ID!;
const token = process.env.BOT_TOKEN!;

const rest = new REST({ version: '9' }).setToken(token);

export default async () => {
  const logger = container.get<Logger>(types.logger);

  try {
    await rest.put(Routes.applicationGuildCommands(clientId, guildId), {
      body: discoverCommands().map(c => c.data.toJSON())
    });

    logger.log('Successfully registered application commands.');
  } catch (error) {
    logger.log(error, 'error');
  }
};
