# Encode Emojis

> A javascript library that encodes emojis (only emojis!) to HTML entities.

---

## Installation

This library is published to npm registry as `encode-emojis`.

You can install it:

```sh
# with npm
npm install --save encode-emojis

# with yarn
yarn add encode-emojis
```

ℹ️ **HINT**: This library is a pure ESM package. (You may want to
[read this](https://gist.github.com/sindresorhus/a39789f98801d908bbc7ff3ecc99d99c).)

## Usage

```ts
import { encodeEmojis } from 'encode-emojis';

let text = '<strong>Hello!</strong> 👋';

text = encodeEmojis(text);

console.log(text); // -> '<strong>Hello!</strong> &#x1f44b;'
```

## Why?

Unfortunately, I am forced to use MS Teams for work, which - although it was
working fine since forever - recently decided to fail on webhook event data that
contains emojis.

But as my webhook event data contains not only emojis but also HTML, I needed to
convert only emojis. So here we go…

## License

[MIT &copy; Simon Lepel](http://simbo.mit-license.org/)
