import { SlashCommandBuilder } from '@discordjs/builders';
import { CommandInteraction } from 'discord.js';
import { Command } from '../types/command';

export default class PingCommand implements Command {
  public data = new SlashCommandBuilder()
    .setName('ping')
    .setDescription('Replies with Pong!');

  async execute(interaction: CommandInteraction) {
    await interaction.reply('Pong!');
  }
}
