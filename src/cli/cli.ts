import { Command } from 'commander';
import registerCommands from './registerCommands';
import runBot from './runBot';

const program = new Command();

program
  .command('register')
  .description('registers all commands')
  .action(registerCommands);

program
  .command('run', { isDefault: true })
  .description('starts up the bot')
  .action(runBot);

export default program;
