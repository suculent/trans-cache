let test_string = "Hello, world.";
let translated_string = "Ahoj, světe.";
let target_language = "cz";

const TransCache = require("./cache.js");

// Step 0: Initialize TransCache instance with target language
let cache = new TransCache(target_language);

// Step 1: Fetch translation (if available)
console.log("Fetching cached translation for: '" + test_string + "'");
cache.fetch(test_string)
    .then((translation) => {

        // Return the cached translated string immediately, if available...
        if (typeof (translation) !== "undefined") {
            console.log("Cached translation: ", translation);
        } else {

            // Step 2: Store new translation (if not cached yet)
            console.log("Translation not found, saving...");
            cache.save(test_string, translated_string)
                .then(() => {
                    cache.fetch(test_string)
                        .then((savedTranslation) => {
                            if (typeof (savedTranslation) !== "undefined") {
                                console.log("Cached translation: ", savedTranslation);
                            } else {
                                console.log("Translation not saved!");
                            }
                        }).catch(e => { console.log(e); });
                }).catch(e => { console.log(e); });
        }
    }).catch(e => { console.log(e); });