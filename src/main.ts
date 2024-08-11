import { CozyCopClient } from "./structures/Client"
import http from "http"

const Client = new CozyCopClient();

Client.startClient();

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

  server.listen(3000);