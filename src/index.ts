import dotenv from 'dotenv';
dotenv.config();

import { DiscordClient } from './container/interfaces';
import container from './container/inversify.config';
import types from './container/types';

const token = process.env.BOT_TOKEN;
if (!token) {
  throw new Error(
    'No Discord bot token specified via the BOT_TOKEN env variable.'
  );
}

const discord = container.get<DiscordClient>(types.discordClient);

discord.login(token);
