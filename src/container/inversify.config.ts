import { Container } from 'inversify';
import { Database } from './database';
import types from './types';

const container = new Container();
container.bind<Database>(types.database);

export default container;
