import { writeFileSync } from "node:fs";

const word = "Tutorial";

writeFileSync("/output/entry.txt", word, "utf8");
console.log(`Wrote ${word.length} characters to /output/entry.txt`);
