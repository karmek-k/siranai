import { Database, Logger } from '../container/interfaces';
import sqlite3 from 'sqlite3';
import { inject, injectable } from 'inversify';
import types from '../container/types';

@injectable()
export class SqliteDatabase implements Database {
  private db: sqlite3.Database;

  constructor(@inject(types.logger) private logger: Logger) {
    const verbose = sqlite3.verbose();

    const filename = process.env.DATABASE_FILENAME;
    if (!filename) {
      const msg = 'No DATABASE_FILENAME specified.';

      this.logger.error(msg);
      throw new Error();
    }

    this.db = new verbose.Database(filename);
    this.logger.log('Database connection established');
  }
}
