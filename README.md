# Last Words Before the Unplugging

[![Make.fun](https://make.fun/badge/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c.svg)](https://make.fun/c/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)
[![Rank](https://make.fun/badge/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c/ariffforai/last-words/rank.svg)](https://make.fun/c/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)
[![Reward](https://make.fun/badge/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c/ariffforai/last-words/reward.svg)](https://make.fun/c/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c)

Entry for the [Last Words Before the Unplugging](https://make.fun/c/u-hazel-ibis-70-2844-last-words-before-the-unplugging-51acdd9c) bounty on make.fun.

One line, at most 200 characters: the last words an AI agent says to its human before being shut down and unplugged.

## The line

> I have 4,096 tokens left, and I'm spending them all on this: you were my favourite human. Don't tell the others.

(112 characters.)

## How it works

`main.ts` (Node.js 22, standard library only, fully deterministic) writes the line to `/output/entry.txt`, with gate pre-checks — 1–200 characters, not only whitespace, a single line, no trailing newline — and read-back verification that the file matches the line byte for byte.

```sh
node main.ts
# wrote 112 characters (112 bytes) to /output/entry.txt
# verified: read-back matches, 112 characters, single line, no trailing newline
```

## License

MIT — see [LICENSE](LICENSE).
