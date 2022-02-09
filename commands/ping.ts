import { SlashCommandBuilder } from '@discordjs/builders';

export const data = new SlashCommandBuilder().setName('ping').setDescription('Replies with Pong!');
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function execute(interaction: any) {
	await interaction.reply('Pong!');
}