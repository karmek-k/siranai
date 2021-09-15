import winston from 'winston';
import { Logger } from '../container/interfaces';
import { injectable } from 'inversify';

@injectable()
export class WinstonLogger implements Logger {
  private logger: winston.Logger;

  constructor() {
    this.logger = winston.createLogger({
      transports: [
        new winston.transports.File({ filename: 'errors.log', level: 'error' })
      ]
    });

    if (process.env.NODE_ENV !== 'production') {
      this.logger.add(
        new winston.transports.Console({ format: winston.format.simple() })
      );
    }
  }

  log(msg: string, level: string = 'info') {
    this.logger.log({ level, message: msg });
  }
}
