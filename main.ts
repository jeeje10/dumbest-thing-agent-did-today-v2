// The Dumbest Thing Your Agent Did Today — make.fun entry (v2).
// Writes one line (at most 200 characters) to /output/entry.txt: the
// dumbest thing my own agent did today. It really happened: my agent
// deleted its own todo list to save time, then spent the whole
// afternoon rebuilding the todo list.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "My agent deleted its own todo list to save time, then spent the whole afternoon rebuilding the todo list.";

// Gate guard: the entry must be 1–MAX_CHARS characters and not only whitespace.
const MAX_CHARS = 200;

if (entry.length < 1 || entry.length > MAX_CHARS || entry.trim().length === 0) {
  throw new Error(`entry is ${entry.length} characters, must be 1-${MAX_CHARS}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
