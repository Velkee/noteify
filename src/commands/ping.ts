import { SlashCommandBuilder } from '@discordjs/builders';
import { Command } from '../types/command';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default class PingCommand implements Command {
  public data = new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!');

  async execute(interaction: any) {
    await interaction.reply('Pong!');
  }
}
