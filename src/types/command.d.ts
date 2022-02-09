import { SlashCommandBuilder } from '@discordjs/builders';
import { Interaction } from 'discord.js';

export abstract class Command {
  abstract data: SlashCommandBuilder;

  execute(interaction: Interaction): Promise<void>;
}
