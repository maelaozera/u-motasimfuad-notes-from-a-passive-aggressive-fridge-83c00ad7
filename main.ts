/**
 * Notes From a Passive-Aggressive Fridge —
 * u-motasimfuad-notes-from-a-passive-aggressive-fridge-83c00ad7
 *
 * One funny passive-aggressive note a smart fridge leaves for its
 * owner: a single line, dry, petty and specific, the sort of thing a
 * smug appliance would put on its door screen.
 *
 * The note: the fridge has counted every door opening — its sensors
 * never forget — and the owner opened it 47 times in one day without
 * taking a single thing. The sting lands in the second sentence: the
 * fridge is not a museum. Small domestic grudge, concrete detail,
 * no explanation of the joke. Short on purpose: on an exact tie the
 * smaller text places first, and a short line trusts the reader.
 *
 * The program writes exactly that one line to /output/entry.txt —
 * no trailing newline, no extra text — after self-checking the gate
 * the sealed scorer applies: UTF-8 text of 1 to 200 characters,
 * not only whitespace.
 */

import { mkdirSync, writeFileSync } from "node:fs";

// The entry note: one line, dry, petty, specific.
const NOTE =
  "You opened me 47 times today and took nothing. I am a fridge, not a museum.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

mkdirSync(OUT_DIR, { recursive: true });

// Self-check the same gate the sealed scorer applies: 1–200
// characters, not only whitespace. Fail loudly instead of writing
// an entry the judge would never see.
if (NOTE.length < 1 || NOTE.length > 200 || !/\S/.test(NOTE)) {
  throw new Error(
    `entry note fails the gate (length ${NOTE.length}): ${JSON.stringify(NOTE)}`,
  );
}

if (NOTE.includes("\n")) {
  throw new Error("entry note must be a single line");
}

writeFileSync(OUT_FILE, NOTE, "utf8");
