import winston from 'winston';
import { Logger } from '../container/interfaces';
import { injectable } from 'inversify';

@injectable()
export class WinstonLogger implements Logger {
  private logger: winston.Logger;

  constructor() {
    this.logger = winston.createLogger({
      transports: [
        new winston.transports.Console({ format: winston.format.simple() })
      ]
    });
  }

  log(msg: string) {
    this.logger.log({ level: 'info', message: msg });
  }

  error(msg: string) {
    this.logger.log({ level: 'error', message: msg });
  }
}
