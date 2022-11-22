let test_string = "Hello, world.";
let translated_string = "Ahoj, světe.";
let random = Buffer.from(Math.random().toString()).toString("base64").substring(10,15);
let target_language = random; // should be random in test

const TransCache = require("./cache.js");

test('Fetch translation', async () => {

    // Step 0: Initialize TransCache instance with target language
    let cache = new TransCache(target_language);

    // Step 1: Fetch translation (if available)
    console.log("Fetching cached translation for: '" + test_string + "'");
    let translation = await cache.fetch(test_string)


    // Return the cached translated string immediately, if available...
    if (typeof (translation) !== "undefined") {
        console.log("Cached translation: ", translation);
    } else {

        // Step 2: Store new translation (if not cached yet)
        console.log("Translation not found, saving...");
        await cache.save(test_string, translated_string)

        let savedTranslation = await cache.fetch(test_string)
        if (typeof (savedTranslation) !== "undefined") {
            console.log("Cached translation: ", savedTranslation);
            expect(savedTranslation).toBe(translated_string);
        } else {
            console.log("Translation not saved!");
        }
    }
});