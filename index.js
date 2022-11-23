const { Store } = require("fs-json-store");

module.exports = class TransCache {

    constructor(language) {
        this.language = language;
        let filename = __dirname + "/.transcache." + language + ".json";
        console.log("Initializing translation cache with", filename);
        this.store = new Store({ file: filename }); // each instance is initialized with own language... singleton would require to have a language as param on each call
        this.cache = {}; // will be updated on first unsuccessful fetch
    }

    async fetch(text) {

        // early exit when the value is cached in memory
        if (typeof(this.cache[text]) !== "undefined") {
            return this.cache[text];
        }

        // otherwise re-fetch the store to see if there's been something new stored asynchronously
        const store = await this.store.read();
        if (store) {
            this.cache = store; // store may return null (empty) so it would stay initialized as {}, otherwise it should contain key-value for english-translated pair
        } else {
            console.log("Not updating memcache, there is nothing to read...");
        }

        if (typeof(this.cache[text]) !== "undefined") {
            return this.cache[text]; // return value for respective key... TODO: may warn on non-existing key after the store update
        } else {
            console.log("Translation failed for:", text);
            return null;
        }
    }

    async save(key, value) {
        this.cache[key] = value; // save to memory first (may get bulk, but we want this)
        await this.store.write(this.cache); // whole cache is stored on change... optimization should be handled by the `fs-json-store` dependency
    }
};