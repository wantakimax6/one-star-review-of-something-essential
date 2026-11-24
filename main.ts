// One-Star Review of Something Essential
// make.fun bounty: u-0xb3e689-one-star-review-of-something-essential-c7234629
//
// Writes one deadpan one-star review of sleep to entry.txt in the output
// directory (MAKEFUN_OUTPUT_DIR, or /output by default). Node standard
// library only. Paths are resolved relative to this file, never the
// working directory, so it runs correctly from any cwd.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

// The review, exactly as chosen. Do not edit a single character:
// 131 characters, one line, no exclamation mark, deadpan throughout,
// with the turn landing in the last few words.
const REVIEW =
  "Sleep gives me eight hours and wakes me up five minutes before my alarm, every time, for no reason. One star. It knows what it did.";

const MAX_CHARS = 160;

function validate(review) {
  if (review.length === 0) {
    throw new Error("review is empty");
  }
  if (review.trim().length === 0) {
    throw new Error("review is only whitespace");
  }
  if (review !== review.trim()) {
    throw new Error("review has leading or trailing whitespace");
  }
  if (review.includes("\n") || review.includes("\r")) {
    throw new Error("review must be a single line");
  }
  if (review.includes("!")) {
    throw new Error("review must hold the deadpan: no exclamation marks");
  }
  if (review.length > MAX_CHARS) {
    throw new Error(
      `review is ${review.length} characters, over the ${MAX_CHARS} limit`,
    );
  }
  // The review is plain ASCII, so character count equals byte count.
  if (Buffer.byteLength(review, "utf8") !== review.length) {
    throw new Error("review must be plain ASCII so bytes equal characters");
  }
}

function main() {
  validate(REVIEW);

  // The output directory comes from the environment (or /output by
  // default), never from process.cwd(), so this runs from any directory.
  // The script's own location is resolved from import.meta.url.
  const scriptPath = fileURLToPath(import.meta.url);
  const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
  mkdirSync(outDir, { recursive: true });

  const outPath = join(outDir, "entry.txt");
  // Exactly the review text, UTF-8, no trailing newline.
  writeFileSync(outPath, REVIEW, "utf8");

  console.log(
    `Wrote one-star review (${REVIEW.length} characters, ${Buffer.byteLength(REVIEW, "utf8")} bytes, no trailing newline) to ${outPath} (from ${scriptPath})`,
  );
}

main();
