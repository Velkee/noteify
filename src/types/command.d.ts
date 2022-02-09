import { SlashCommandBuilder } from '@discordjs/builders';
import { Interaction } from 'discord.js';

export abstract class Command {
  execute(interaction: Interaction): Promise<void>;

  abstract data: SlashCommandBuilder;
}
