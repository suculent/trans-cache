# TransCache

| Tests | Coverage | Security |
|:------|:---------|:---------|
|[![CircleCI](https://dl.circleci.com/status-badge/img/gh/suculent/trans-cache/tree/main.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/suculent/trans-cache/tree/main)|[![Coverage Status](https://coveralls.io/repos/github/suculent/trans-cache/badge.svg?branch=main)](https://coveralls.io/github/suculent/trans-cache?branch=main)|[![Known Vulnerabilities](https://snyk.io/test/github/suculent/trans-cache/badge.svg)](https://snyk.io/test/github/suculent/trans-cache)

## Purpose

Minimal translation cache module. It provides following functions:

1. Initializes with target language (to use separate stores for each language)
2. Allows fetching existing translation (or should return null)
3. Allows saving new translations for future use

## Usage

For usage example see `test.js`.

## Internal details

The class is not optimized much.

To prevent re-reads, the class stores all translations in memory (per initialized instance, each with different language). This can result in a huge memory load, when pre-stored translations. Pre-stored translations can be pushed (on a new branch and PR, please) and will be therefore reviewed on each pull-request.

## Expected use

#### Making a new translation:

1. Fetch translation (returns null)
2. Translate using DeepL or anything else (if no translation available)
3. Store and return fetched translation

#### Fething existing translation:

1. Fetch translation (reloads store and returns value for key from memory)

## TODOs

* Optimize: check translation in memory first; if not available: reload store and retry... return null on failure
