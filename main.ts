import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Copy the shipped 1000x1000 PNG into /output; no network is available at grade time.
const here = process.env.MAKEFUN_INPUT_DIR ?? ".";
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
