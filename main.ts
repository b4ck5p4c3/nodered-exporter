import express from "express"
import dotenv from "dotenv";

dotenv.config();

const timeout = parseInt(process.env.TIMEOUT ?? "30000");
const port = parseInt(process.env.PORT ?? "9001");

const app = express();

let status = false;
let lastCallback: NodeJS.Timeout | undefined = undefined;

app.post('/nodered-ping', (req, res) => {
    status = true;
    if (lastCallback) {
        clearTimeout(lastCallback);
        lastCallback = undefined;
    }
    lastCallback = setTimeout(() => {
        status = false;
    }, timeout);
    res.end('ok');
});

app.get('/metrics', (req, res) => {
    res.header("content-type", "text/plain; version=0.0.4; charset=utf-8")
       .end(`# HELP nodered_status NodeRED status (1 - ok, 0 - failed)\n# TYPE nodered_status gauge\nnodered_status ${status ? 1 : 0}\n`);
});

app.listen(port);