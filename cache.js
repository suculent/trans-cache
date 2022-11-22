const { Store } = require("fs-json-store");

module.exports = class TransCache {

    constructor(language) {

        this.language = language;

        let filename = __dirname + "/.transcache."+language+".json";
        
        this.store = new Store({ file: filename });
    }

    fetch(text) {
        this.store.read(text)
        .then((arg) => {
            console.log("fetch:", arg);
            return arg;
        })
        .catch((reason) => {
            console.log("Exception", reason);
        });
    }

    save(key, value) {
        this.store.write(key, value);
    }
}