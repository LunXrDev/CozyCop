import { CozyCopClient } from "./structures/Client"

const Client = new CozyCopClient();

Client.startClient();

console.log(process.env.TOKEN);