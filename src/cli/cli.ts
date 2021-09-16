import { Command } from 'commander';
import registerCommands from './registerCommands';

const program = new Command();

program
  .command('register')
  .description('registers all commands')
  .action(registerCommands);

export default program;
