import { Client, IntentsBitField, Partials } from "discord.js";
import http from "http";

const dotenv = require("dotenv").config();

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html');
    res.end(`
      <html>
        <head>
          <title>Your Web View</title>
        </head>
        <body style="margin: 0; padding: 0;">
          <iframe width="100%" height="100%" src="https://axocoder.vercel.app/" frameborder="0" allowfullscreen></iframe>
        </body>
      </html>`);
  });

export class CozyCopClient extends Client {
    constructor() {
        super({
            intents: [
                IntentsBitField.Flags.DirectMessageReactions,
                IntentsBitField.Flags.DirectMessageTyping,
                IntentsBitField.Flags.DirectMessageTyping,
                IntentsBitField.Flags.DirectMessages,
                IntentsBitField.Flags.GuildIntegrations,
                IntentsBitField.Flags.GuildMembers,
                IntentsBitField.Flags.GuildMessageReactions,
                IntentsBitField.Flags.GuildMessageTyping,
                IntentsBitField.Flags.GuildMessages,
                IntentsBitField.Flags.GuildModeration,
                IntentsBitField.Flags.GuildWebhooks,
                IntentsBitField.Flags.Guilds
            ],
            partials: [
                Partials.Channel,
                Partials.GuildMember,
                Partials.Message,
                Partials.Reaction,
                Partials.ThreadMember,
                Partials.User
            ],
            rest: {
                retries: 5,
                timeout: 30_000
            },
        })
    }

    public async startClient() {
        super.login(process.env.TOKEN);

        server.listen(3000, () => {
            console.log('Server Online because of Axo Coder ✅!!');
          });
    }
}