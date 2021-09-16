import dotenv from 'dotenv';
dotenv.config();
import 'reflect-metadata';

import program from './cli/cli';

program.parse(process.argv);
