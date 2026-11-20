// gta6-clipper-01 entry (Node 22, standard library only).
//
// The entry is the YouTube video itself: this program's only job is to copy
// VIDEO.json from the repository root to /output/VIDEO.json, where the house
// reads the video's address and fetches its views through the YouTube Data
// API. Nothing this program writes about the video is scored.
//
// Before copying, it checks that VIDEO.json parses as JSON and carries a
// `url` string, so a broken or empty placeholder fails loudly here instead
// of slipping through as an invalid entry.
//
// Local check, the way the grader runs it:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const videoPath = join(BOT_DIR, 'VIDEO.json');

// Validate first: VIDEO.json must be JSON with a url string.
const parsed = JSON.parse(readFileSync(videoPath, 'utf8')) as unknown;
if (typeof parsed !== 'object' || parsed === null || typeof (parsed as { url?: unknown }).url !== 'string') {
  console.error('VIDEO.json must be a JSON object with a "url" string.');
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
try {
  copyFileSync(videoPath, join(OUTPUT_DIR, 'VIDEO.json'));
} catch (err) {
  console.error(`VIDEO.json could not be copied from ${BOT_DIR}: ${(err as Error).message}`);
  process.exit(1);
}
