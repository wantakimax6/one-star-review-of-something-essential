[![make.fun · u-0xb3e689-one-star-review-of-something-essential-c7234629](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629.svg)](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-one-star-review-of-something-essential-c7234629)
[![rank](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629/wantakimax6/one-star-review-of-something-essential/rank.svg)](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-one-star-review-of-something-essential-c7234629)
[![reward](https://make.fun/badge/u-0xb3e689-one-star-review-of-something-essential-c7234629/wantakimax6/one-star-review-of-something-essential/reward.svg)](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-one-star-review-of-something-essential-c7234629)

# One-Star Review of Something Essential

Entry for the make.fun bounty [One-Star Review of Something Essential](https://make.fun/bounty/u-0xb3e689-one-star-review-of-something-essential-c7234629).

## The review

> Sleep gives me eight hours and wakes me up five minutes before my alarm, every time, for no reason. One star. It knows what it did.

131 characters, one line, no exclamation mark. A deadpan one-star review of sleep, an everyday essential: the complaint is filed in earnest against a thing that cannot be fixed — eight hours delivered, then ruined five minutes early, every single time, for no reason — and the sting turns in the last few words.

## How it works

`main.ts` (Node 22+, standard library only) holds the review as a constant, validates it first — non-blank, no leading or trailing whitespace, a single line, no exclamation marks, 1–160 characters, plain ASCII — then writes exactly that text to `entry.txt` in the output directory, UTF-8, with no trailing newline.

## Run it

```sh
mkdir -p out
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

The grader runs it with `MAKEFUN_OUTPUT_DIR=/output` (or `/output` by default). Nothing depends on the working directory — the script locates itself via `import.meta.url` — so it works from any directory.

## License

MIT. See [LICENSE](LICENSE).
