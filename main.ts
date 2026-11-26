import { writeFileSync, chmodSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
const entry = "That was the seventh glass that smelled of Rex, and my nose is never wrong, so off the table it went — and the dog now eats his dinner on that exact spot, at the table I gave him.";
writeFileSync(target, entry, "utf8");
chmodSync(target, 0o644);

// The dog's dinner table is the receipt: the nose ruled, and the world answered with an event, not silence.
