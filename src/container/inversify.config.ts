import { Container } from 'inversify';
import { Database, DiscordClient } from './interfaces';
import types from './types';

const container = new Container();
container.bind<Database>(types.database);
container.bind<DiscordClient>(types.discordClient);

export default container;
