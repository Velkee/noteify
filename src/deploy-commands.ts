import { REST } from '@discordjs/rest';
import { Routes } from 'discord-api-types/v9';
import { clientId, guildId, token } from '../config.json';
import MyClient from './client';

export default async function deployCommands() {
  const commands = await MyClient.loadCommands();

  const rest = new REST({ version: '9' }).setToken(token);

  rest
    .put(Routes.applicationGuildCommands(clientId, guildId), {
      body: commands.map((command) => command.data.toJSON()),
    })
    .then(() => console.log('Successfully registered application commands.'))
    .catch(console.error);
}

deployCommands();
