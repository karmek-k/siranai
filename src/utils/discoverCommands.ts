import { Command } from './Command';
import fs from 'fs';
import path from 'path';

export default (): Command[] => {
  const commandFilesPath = path.join(__dirname, '..', 'commands');
  const commandFiles = fs
    .readdirSync(commandFilesPath)
    .filter(file => file.endsWith('.js'));

  return commandFiles.map(file => {
    const commandPath = path.join(commandFilesPath, file);
    return require(commandPath).default;
  });
};
