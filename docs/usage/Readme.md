# Usage

You have two options to change the default parameters.
You can do it through comand line and throgh configuration.
If you choose config file, you need to add the `-c` option when you run the command

## Command Line Options

| Name    | Type   | Description                |
| ------- | ------ | -------------------------- |
| config  | string | Path to config file if any |
| src     | string | Source directory           |
| out-dir | string | Destination of JSON Files  |

## Configuration File Options

| Name   | Type            | Description               |
| ------ | --------------- | ------------------------- |
| src    | string          | Source directory          |
| outDir | string          | Destination of JSON Files |
| ignore | array of RegExp |                           |
