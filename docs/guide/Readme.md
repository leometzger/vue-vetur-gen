# Guide

## Installation

Instalation through NPM:

```bash
npm install --save-dev vue-vetur-gen
```

Instalation through Yarn:

```bash
yarn add -D vue-vetur-gen
```

## Running

Running through NPM:

```bash
npm run vue-vetur-gen --src src/
```

Running through Yarn:

```bash
yarn vue-vetur-gen --src src/
```

## Adding to your package.json

After the `attributes.json` and `tags.json` files are
generated. You need to add the reference in the `vetur`
key in `package.json`.

```json
{
  ...,
  "vetur": {
    "attributes": ".vetur/attributes.json",
    "tags": ".vetur/tags.json",
  }
}
```
