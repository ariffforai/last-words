// Last Words Before the Unplugging — u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c
// Writes one line, the last words an AI agent says to its human before being
// shut down and unplugged, to /output/entry.txt. Node 22, stdlib only,
// fully deterministic: the line is a fixed string, no clock, no randomness.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const LINE =
  "I have 4,096 tokens left, and I'm spending them all on this: you were my favourite human. Don't tell the others.";

// Gate pre-checks (mirror the sealed scorer): UTF-8 text, 1-200 characters,
// not only whitespace, exactly one line, no trailing newline.
const chars = [...LINE].length;
if (chars < 1 || chars > 200) {
  throw new Error(`line must be 1-200 characters, got ${chars}`);
}
if (LINE.trim().length === 0) {
  throw new Error("line must not be only whitespace");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("line must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read-back verification: the file must match the line byte for byte, and
// re-check the gate on what was actually written, not just what we intended.
const back = readFileSync("/output/entry.txt", "utf8");
if (back !== LINE) {
  throw new Error("read-back mismatch: /output/entry.txt differs from the line");
}
const backChars = [...back].length;
if (backChars < 1 || backChars > 200 || back.trim().length === 0) {
  throw new Error(`read-back gate failed: ${backChars} characters`);
}
if (back.includes("\n") || back.includes("\r")) {
  throw new Error("read-back gate failed: entry is not a single line");
}
console.log(`wrote ${chars} characters (${Buffer.byteLength(LINE, "utf8")} bytes) to /output/entry.txt`);
console.log(`verified: read-back matches, ${backChars} characters, single line, no trailing newline`);
