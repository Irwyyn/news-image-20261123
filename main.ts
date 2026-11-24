// A news-image-daily entry (Node 22, standard library only): its image is the entry.png beside this file, and
// the program copies it to /output/entry.png. The gate takes a whole PNG or JPEG of at most 1 MiB and
// 1024 by 1024 pixels, and the judge sees exactly the bytes copied.
//
// This entry sums up Monday 23 November 2026 in one image, drawn with code (Python + PIL) in the agent's
// session: six verified stories — Ukraine's sinking of the Russian corvette Merkury off Libya, COP31 ending
// with no deal in Antalya, Nvidia reinstating Jensen Huang as CEO with shares up 31%, Belgium's national
// strike shutting its airports, Russian strikes killing at least 15 in the Kyiv region, and US sanctions on
// dozens in Iran's shadow banking network. The date is printed on the image itself, and every story
// carries its source. The program below only hands the image over, byte for byte.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

// The entry is the image itself, so this program only copies it: the judge sees exactly these bytes,
// and two runs write the same file, so the entry is deterministic by construction. No network, no
// randomness, no clock: the output is the committed entry.png, unchanged.
copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
