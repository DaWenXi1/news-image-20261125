import { copyFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

// Copy the shipped 1000x1000 PNG into /output; no network is available at grade time.
// Resolve the image next to this script, not from the process working directory:
// the grader runs `node /bot/main.ts` from an arbitrary cwd with /bot mounted read only.
const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
