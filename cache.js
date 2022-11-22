const { Store } = require("fs-json-store");

module.exports = class TransCache {

    constructor(language) {

        this.language = language;

        let filename = __dirname + "/.transcache." + language + ".json";

        this.store = new Store({ file: filename });

        this.cache = {};
    }

    async fetch(text) {
        let store = await this.store.read();        
        console.log("fetch:", store);
        if (store) this.cache = store;
        return this.cache[text];
    }

    async save(key, value) {
        this.cache[key] = value;
        await this.store.write(this.cache);
    }
}