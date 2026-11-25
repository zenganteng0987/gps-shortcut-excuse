import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The GPS's own one-line excuse: it blames the map and doubles down.
const entry =
  "The map promised me a shortcut and I believed it, so technically this lake is your destination now.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
process.stdout.write(entry + "\n");
