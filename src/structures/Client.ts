import { Client, IntentsBitField, Partials } from "discord.js";
import http from "http";

const dotenv = require("dotenv").config();
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
    }
}