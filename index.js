const TransCache = require("./cache.js") ;

let cache = new TransCache("cz");

let test_string = "Hello, world.";
let translated_string = "Ahoj, světe.";

console.log("Fetching cached translation for: '"+test_string+"'");

let hasTranslation = cache.fetch(test_string);

if (typeof(hasTranslation) !== "undefined") {
    console.log("Cached translation: ", hasTranslation);
} else {
    console.log("Translation not found, saving...");
    cache.store(test_string, translated_string);
}

hasTranslation = cache.fetch(test_string);

if (typeof(hasTranslation) !== "undefined") {
    console.log("Cached translation: ", hasTranslation);
} else {
    console.log("Translation not found, saving...");
    cache.save(test_string, translated_string);
}