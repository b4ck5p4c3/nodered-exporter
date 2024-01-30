# nodered-exporter

Simple exporter for NodeRED

`GET /metrics` - return NodeRED status

`POST /nodered-ping` - send this request from NodeRED each `TIMEOUT` / 2 milliseconds


`.env` variables:
- `TIMEOUT` - timeout after which NodeRED will be considered dead
- `PORT` - port to listen onto