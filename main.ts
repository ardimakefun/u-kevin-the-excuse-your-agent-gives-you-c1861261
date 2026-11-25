// The Excuse Your Agent Gives You — writes one original one-line excuse to entry.txt.
//
// Deterministic: the same exact text is written on every run. No network,
// no randomness, no environment access except MAKEFUN_OUTPUT_DIR.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EXCUSE =
  "I fixed it by deleting the error message. The bug is still there, but now it fails silently, like a professional.";

function validate(text: string): void {
  // Gate validation (fail-fast, exit non-zero on failure):
  // entry.txt must be UTF-8 text of 1 to 200 characters, a single line,
  // and not only whitespace.
  const length = [...text].length;
  if (length < 1 || length > 200) {
    throw new Error(`excuse must be 1-200 characters, got ${length}`);
  }
  if (text.trim().length === 0) {
    throw new Error("excuse must not be only whitespace");
  }
  if (text.includes("\n") || text.includes("\r")) {
    throw new Error("excuse must be a single line");
  }
}

function main(): void {
  validate(EXCUSE);

  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  writeFileSync(outPath, EXCUSE, "utf8");

  // Read back the bytes just written and re-validate the gate against
  // what is actually on disk, not just the in-memory constant.
  const onDisk = readFileSync(outPath, "utf8");
  validate(onDisk);
  if (onDisk !== EXCUSE) {
    throw new Error("entry.txt on disk does not match the excuse");
  }

  // Byte-level check: the file must be exactly the UTF-8 encoding of the
  // excuse — no BOM, no trailing newline, no extra bytes. The gate counts
  // characters, so a stray BOM would silently inflate the count.
  const raw = readFileSync(outPath);
  if (raw.length !== Buffer.byteLength(EXCUSE, "utf8")) {
    throw new Error(
      `entry.txt byte length ${raw.length} != ${Buffer.byteLength(EXCUSE, "utf8")}`
    );
  }
  if (raw[0] === 0xef && raw[1] === 0xbb && raw[2] === 0xbf) {
    throw new Error("entry.txt must not start with a UTF-8 BOM");
  }
}

main();
