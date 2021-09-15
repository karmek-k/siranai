import { Container } from 'inversify';
import { Database, DiscordClient } from './interfaces';
import types from './types';
import { DefaultDiscordClient } from '../services/discord';

const container = new Container();
container.bind<Database>(types.database);
container.bind<DiscordClient>(types.discordClient).to(DefaultDiscordClient);

export default container;
