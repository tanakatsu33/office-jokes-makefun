import * as fs from "node:fs";
import * as path from "node:path";

const ENTRY =
  "Our standup was meant to last fifteen minutes, so I brought a chair. Three years on, the chair has a title, a team of four, and better job security than I do.";

function checkEntry(line: string): void {
  if (/[\r\n]/.test(line)) {
    throw new Error("entry must be a single line");
  }
  const length = [...line].length;
  if (length < 1 || length > 199) {
    throw new Error(`entry length ${length} is outside 1..199`);
  }
}

checkEntry(ENTRY);

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(path.join(outputDir, "entry.txt"), ENTRY + "\n", "utf8");
