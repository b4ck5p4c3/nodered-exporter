# nodered-exporter

Simple exporter for NodeRED

`/metrics` - return NodeRED status
`/nodered-ping` - send this request from NodeRED each `TIMEOUT` / 2 milliseconds

`.env` variables:
    - `TIMEOUT` - timeout after which NodeRED will be considered dead