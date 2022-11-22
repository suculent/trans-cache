# TransCache

[![Coverage Status](https://coveralls.io/repos/github/suculent/trans-cache/badge.svg?branch=main)](https://coveralls.io/github/suculent/trans-cache?branch=main)

Minimal translation cache module. It provides following functions:

1. Initializes with target language (to use separate stores for each language)
2. Allows fetching existing translation (or should return null)
3. Allows saving new translations for future use

For usage example see `index.js`.