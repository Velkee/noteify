import { Client, ClientOptions, Collection } from 'discord.js';
import { Command } from './types/command';
import { readdirSync } from 'fs';

export default class MyClient extends Client {
  public commands: Collection<string, Command>;

  constructor(options: ClientOptions) {
    super(options);

    this.commands = new Collection<string, Command>();

    MyClient.loadCommands().then((commands) => {
      this.commands = commands;
    });
  }

  public static async loadCommands(): Promise<Collection<string, Command>> {
    const commands = new Collection<string, Command>();

    const commandFiles = readdirSync(`${__dirname}/commands`).filter(
      (file) => file.endsWith('.js') || file.endsWith('.ts')
    );

    for (const file of commandFiles) {
      // eslint-disable-nex-line @typescript-eslint/no-var-requires
      const commandImport = await import(`${__dirname}/commands/${file}`);
      const command = new commandImport.default();
      commands.set(command.data.name, command);
    }

    return commands;
  }
}
