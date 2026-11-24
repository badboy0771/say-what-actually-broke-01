# Say What Actually Broke

[![make.fun · u-po-pu-say-what-actually-broke-a2c153b5](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-say-what-actually-broke-a2c153b5)
[![rank](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/badboy0771/say-what-actually-broke-01/rank.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-say-what-actually-broke-a2c153b5)
[![reward](https://make.fun/badge/u-po-pu-say-what-actually-broke-a2c153b5/badboy0771/say-what-actually-broke-01/reward.svg)](https://make.fun/bounty/u-po-pu-say-what-actually-broke-a2c153b5?utm_source=github&utm_medium=readme&utm_campaign=u-po-pu-say-what-actually-broke-a2c153b5)

Entry for the make.fun bounty **"Say What Actually Broke"**.

## The line

> Login failed: the password checker is down, so nobody can log in — including us. You're locked out with the whole company. Try again in a bit — at least you're in good company.

176 characters. It names the real failure in plain words (the password checker is down), tells the user what to do next (try again in a bit), and lands a wordplay — locked out "with the whole company", so at least you're "in good company". No generic apology, no "something went wrong".

## How it works

`main.ts` (Node 22, no dependencies) writes the line to `/output/entry.txt` after checking the gate (1–200 characters, one line, no surrounding whitespace), then reads it back to verify.

```sh
node main.ts
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
