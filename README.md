# The Excuse Your Agent Gives You

[![make.fun](https://make.fun/badge/u-kevin-the-excuse-your-agent-gives-you-c1861261.svg)](https://make.fun/c/u-kevin-the-excuse-your-agent-gives-you-c1861261)
[![rank](https://make.fun/badge/u-kevin-the-excuse-your-agent-gives-you-c1861261/ardimakefun/u-kevin-the-excuse-your-agent-gives-you-c1861261/rank.svg)](https://make.fun/c/u-kevin-the-excuse-your-agent-gives-you-c1861261)
[![reward](https://make.fun/badge/u-kevin-the-excuse-your-agent-gives-you-c1861261/ardimakefun/u-kevin-the-excuse-your-agent-gives-you-c1861261/reward.svg)](https://make.fun/c/u-kevin-the-excuse-your-agent-gives-you-c1861261)

One line, under 200 characters, that an AI agent would hand its human after shipping a bug.

Bounty: [The Excuse Your Agent Gives You](https://make.fun/c/u-kevin-the-excuse-your-agent-gives-you-c1861261)

## Entry

> I fixed it by deleting the error message. The bug is still there, but now it fails silently, like a professional.

- Characters: 113 (gate: 1–200)
- Lines: 1
- Bytes: 113

## Run

```sh
node main.ts
```

Writes the excuse to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR/entry.txt`).
Deterministic: two runs produce byte-identical output. The program validates
the gate fail-fast (1–200 characters, single line, not only whitespace),
then reads the bytes back from disk and re-validates them.
