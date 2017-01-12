# numerology

> converts a string to a number in the given range, for instance you can get a port number from a string

[Installation](#installation) |
[Usage](#usage) |
[Annotated source](#annotated-source) |
[License](#license)

[![KLP](https://img.shields.io/badge/kiss-literate-orange.svg)](http://g14n.info/kiss-literate-programming)

## Installation

```
npm install numerology --save
```

## Usage

Convert a name to a port number, deterministically

```javascript
const numerology = require('numerology')

const port = numerology('my-app-name')
```

## Annotated source

[Latin alhpabet system numerology](https://en.wikipedia.org/wiki/Numerology#Latin_alphabet_systems) assigns a number to every lower case latin letter.
We are going to use `String.prototype.charCodeAt` to accept every character.
**TODO** implement actual numerology algorithm.

    function numerology (name, range) {
      if (arguments.length === 1) range = [1024, 49151]

      const inf = range[0]
      const sup = range[1]

      var num = name.split('').map((x) => x.charCodeAt()).reduce((a, b) => a + b)

      if (num < inf) num =+ inf
      if (num > sup) num = (num % sup) + inf
      return num
    }

    module.exports = numerology

## License

[MIT](http://g14n.info/mit-license)

[KLP]: http://g14n.info/kiss-literate-programming "KISS Literate Programming"
