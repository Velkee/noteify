import { Intents } from 'discord.js';
import { token } from '../config.json';
import Client from './client';

async function main() {
  const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

  client.once('ready', () => {
    console.log('Ready!');
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  client.on('interactionCreate', async (interaction: any) => {
    if (!interaction.isCommand()) return;

    const command = client.commands.get(interaction.commandName);

    if (!command) return;

    try {
      await command.execute(interaction);
    } catch (error) {
      console.error(error);
      await interaction.reply({
        content: 'There was an error while executing this command!',
        ephemeral: true,
      });
    }
  });

  client.login(token);
}

main();
