// Say What Actually Broke — one line of honest error copy.
// Writes the line to /output/entry.txt after checking the gate:
// UTF-8 text, 1-200 characters, a single line, no surrounding whitespace.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const ENTRY =
  "Login failed: the password checker is down, so nobody can log in — including us. You're locked out with the whole company. Try again in a bit — at least you're in good company.";

const MAX_CHARS = 200;

function main(): void {
  const text = ENTRY.trim();
  if (text.length < 1 || text.length > MAX_CHARS) {
    throw new Error(`entry is ${text.length} characters, must be 1-${MAX_CHARS}`);
  }
  // The gate counts characters, but keep the byte size sane too so the
  // line stays a one-line dialog string in any encoding.
  if (new TextEncoder().encode(text).length > 400) {
    throw new Error("entry is too long in bytes");
  }
  if (text !== ENTRY || /\n/.test(text)) {
    throw new Error("entry must be a single line with no surrounding whitespace");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
  const back = readFileSync("/output/entry.txt", "utf8");
  if (back !== text) throw new Error("read-back mismatch");
  console.log(`wrote /output/entry.txt (${text.length} characters)`);
  console.log(text);
}

main();
