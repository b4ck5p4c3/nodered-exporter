import express from "express"
import dotenv from "dotenv";

dotenv.config();

const timeout = parseInt(process.env.TIMEOUT ?? "30000");

const app = express();

let status = false;
let lastCallback: NodeJS.Timeout | undefined = undefined;

app.get('/nodered-ping', (req, res) => {
    status = true;
    if (lastCallback) {
        clearTimeout(lastCallback);
        lastCallback = undefined;
    }
    setTimeout(() => {
        status = false;
    }, timeout);
    res.end('ok');
});

app.get('/metrics', (req, res) => {
    res.end(`status ${status ? 1 : 0}\n`);
});

app.listen(9001);