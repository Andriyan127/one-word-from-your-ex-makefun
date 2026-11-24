/**
 * One Word From Your Ex — make.fun bounty entry
 * https://make.fun/bounty/u-brave-eagle-12-one-word-from-your-ex-cfd97ba2
 *
 * The entry is exactly one word: the word your ex would use to describe you.
 *
 * Chosen word: "Tutorial"
 * Why it wins the rubric:
 *   - Funny:      you were the tutorial level — played through, learned from,
 *                 then abandoned for the real game.
 *   - Painfully honest: it stings because it is true — she levelled up on you
 *                 and moved on; you were never the main quest.
 *   - Fresh:      not a cliché breakup word ("toxic", "boring", "almost");
 *                 a gaming metaphor no other entrant used.
 *
 * Candidates beaten: Layover (25/30), Internship (24/30), Freemium (23/30),
 * Placeholder (22/30), Beta (19/30). Words already taken by other entrants
 * (Potential, Practice, Almost) were avoided entirely.
 *
 * This program writes the word — and nothing else — to /output/entry.txt.
 */

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const word = "Tutorial";
const outputPath = "/output/entry.txt";

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(outputPath, word, "utf8");
console.log(`Wrote ${word.length} characters to ${outputPath}`);
