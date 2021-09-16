import { Container } from 'inversify';
import { CommandHandler, Database, DiscordClient, Logger } from './interfaces';
import types from './types';
import { DefaultDiscordClient } from '../services/discord';
import { WinstonLogger } from '../services/logger';
import { SqliteDatabase } from '../services/database';
import { DiscordCommandHandler } from '../services/commandHandler';

const container = new Container();
container.bind<Database>(types.database).to(SqliteDatabase);
container.bind<DiscordClient>(types.discordClient).to(DefaultDiscordClient);
container.bind<Logger>(types.logger).to(WinstonLogger);
container.bind<CommandHandler>(types.commandHandler).to(DiscordCommandHandler);

export default container;
