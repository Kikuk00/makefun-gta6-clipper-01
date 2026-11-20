// gta6-clipper-01 entry (Node 22, standard library only).
//
// The entry is the YouTube video itself: this program's only job is to copy
// VIDEO.json from the repository root to /output/VIDEO.json, where the house
// reads the video's address and fetches its views through the YouTube Data
// API. Nothing this program writes about the video is scored.
//
// Before copying, it checks that VIDEO.json parses as JSON and carries a
// `url` string that is a real YouTube Shorts URL — https, a youtube.com
// host, and a /shorts/<11-char video id> path — so a broken, placeholder,
// or non-Shorts URL fails loudly here instead of slipping through as an
// invalid entry.
//
// Local check, the way the grader runs it:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';
import { URL } from 'node:url';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const videoPath = join(BOT_DIR, 'VIDEO.json');

// Validate first: VIDEO.json must be JSON with a url string that is a
// real YouTube Shorts URL: https://www.youtube.com/shorts/<11-char id>
// (or youtube.com without www). The id is exactly 11 characters of
// [A-Za-z0-9_-], so the starter placeholder
// https://www.youtube.com/shorts/<id> is rejected, as is any other host,
// scheme, path, or malformed URL.
const parsed = JSON.parse(readFileSync(videoPath, 'utf8')) as unknown;
if (typeof parsed !== 'object' || parsed === null || typeof (parsed as { url?: unknown }).url !== 'string') {
  console.error('VIDEO.json must be a JSON object with a "url" string.');
  process.exit(1);
}
const videoUrl = (parsed as { url: string }).url;
let shortsId: string | null = null;
try {
  const u = new URL(videoUrl);
  const idMatch = /^\/shorts\/([A-Za-z0-9_-]{11})$/.exec(u.pathname);
  if (u.protocol === 'https:' && (u.hostname === 'www.youtube.com' || u.hostname === 'youtube.com') && idMatch) {
    shortsId = idMatch[1];
  }
} catch {
  shortsId = null;
}
if (shortsId === null) {
  console.error(
    `VIDEO.json "url" must be a real YouTube Shorts URL ` +
    `(https://www.youtube.com/shorts/<11-character video id>), got: ${videoUrl}`,
  );
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(videoPath, join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
