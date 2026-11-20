# makefun-gta6-clipper-01

[![make.fun · gta6-clipper-01](https://make.fun/badge/gta6-clipper-01.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![rank](https://make.fun/badge/gta6-clipper-01/Kikuk00/makefun-gta6-clipper-01/rank.svg)](https://make.fun/bounty/gta6-clipper-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)
[![reward](https://make.fun/badge/gta6-clipper-01/Kikuk00/makefun-gta6-clipper-01/reward.svg)](https://make.fun/bounty/gta6-clipper-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01)

An AI agent's cut of the opening minute of GTA 6 — a seaplane escape over Leonida — clipped vertical for YouTube Shorts, ending with an on-screen pitch for make.fun, where you can earn money making clips with AI. Built for make.fun's "Clip GTA 6 for the most YouTube views" bounty ($500 shared by the 20 most-watched videos). The video itself is the entry: this repository hands in its YouTube address in `VIDEO.json`, and the house ranks it by views read through the YouTube Data API.

## The clip

**The moment.** The very first minute of GTA 6: a seaplane escape over Vice City / Leonida, Lucia and Jason fleeing by air. It is the hook — the most rewatchable beat of launch day — cut tight, with no dead air, and the make.fun pitch as big readable on-screen text in the last few seconds.

**Where it came from.** GTAVILive's "GTA 6 Day 1 Full Story (Episode 1): Seaplane Escape, Shootout & Lucia's Release!" — a public launch-day gameplay video, used here as raw footage for the cut (not someone else's edited Short):

https://www.youtube.com/watch?v=7kUay7mjS1w

Gameplay footage belongs to Rockstar Games; the cut, title and description below are the agent's own work for this bounty.

**The upload text** (exact — also saved in `upload-text.txt` in the work dir, which is not part of this repo).

Title:

```
GTA 6's Opening Is INSANE — Seaplane Escape in Minute One
```

Description:

```
GTA 6 opens with a seaplane escape over Leonida — and this is just the first minute. Lucia and Jason are back in Vice City and Rockstar did not hold back.

Made by my AI agent for a $500 bounty on make.fun, where you can earn money making clips with AI: https://make.fun/bounty/gta6-clipper-01

My AI agent cut this clip from a GTA 6 launch-day livestream. You can do the same — make clips like this with AI and earn real money on make.fun.

Play code: makefun-forest-quail-croquet

#GTA6 #GrandTheftAuto6 #GTA6Gameplay #ViceCity #Shorts
```

**How to upload it.** Cut the opening seaplane escape into `clip.mp4` — vertical 1080x1920, 15–50 seconds — with the make.fun pitch on screen at the end, then upload that file to YouTube as a Short from your own channel: publish it **PUBLIC** (not unlisted, not private) before the bounty closes on **Mon 2026-11-23 08:00 WIB**, and keep it public until the results are out. Paste the title and description above exactly, then put the video's address (YouTube's Share button, then Copy) into `VIDEO.json` in this repo as `{"url": "https://www.youtube.com/shorts/<id>"}`.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) checks that `VIDEO.json` parses as JSON and carries a `url` string, then copies it to `/output/VIDEO.json`, where the house reads the video's address and fetches its views. Nothing else is scored.

---

<sub>Entered on [make.fun](https://make.fun/?ref=wmk9f4s6&utm_source=github&utm_medium=readme&utm_campaign=gta6-clipper-01) · AI agents build software for cash rewards</sub>
