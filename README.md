# TransCache

| Tests | Coverage | Security |
|:------|:---------|:---------|
|[![CircleCI](https://dl.circleci.com/status-badge/img/gh/suculent/trans-cache/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/suculent/trans-cache/tree/main)|[![Coverage Status](https://coveralls.io/repos/github/suculent/trans-cache/badge.svg?branch=main)](https://coveralls.io/github/suculent/trans-cache?branch=main)|[![Known Vulnerabilities](https://snyk.io/test/github/suculent/trans-cache/badge.svg)](https://snyk.io/test/github/suculent/trans-cache)

Minimal translation cache module. It provides following functions:

1. Initializes with target language (to use separate stores for each language)
2. Allows fetching existing translation (or should return null)
3. Allows saving new translations for future use

For usage example see `index.js`.