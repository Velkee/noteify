// Require the necessary discord.js classes
import { Client, Intents } from 'discord.js';
import { token } from './config.json';

// Create new client instance
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });

// When client is ready, run this code (only once)
client.once('ready', () => {
	console.log('Ready!');
});

// Login to Discord with your client's token
client.login(token);
