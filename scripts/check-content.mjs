#!/usr/bin/env node
/**
 * Lists content that is still a placeholder so nothing half-finished ships by accident.
 *
 *   npm run content:check            report only, always exits 0
 *   npm run content:check -- --strict   exits 1 if any placeholder remains (use before a release)
 *
 * It reads src/data/*.js as text. Comment lines are ignored, so the instructions at the
 * top of each data file do not count as placeholders.
 */
import { readdirSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { join } from 'node:path';

const dataDir = fileURLToPath(new URL('../src/data/', import.meta.url));
const strict = process.argv.includes('--strict');
const isComment = (line) => /^\s*(\/\/|\/\*|\*)/.test(line);

const todos = [];
const counts = { depthNull: 0, metricNull: 0 };

for (const file of readdirSync(dataDir).filter((name) => name.endsWith('.js'))) {
  const lines = readFileSync(join(dataDir, file), 'utf8').split('\n');
  lines.forEach((line, index) => {
    if (isComment(line)) return;
    if (/TODO\(/.test(line)) todos.push(`src/data/${file}:${index + 1}  ${line.trim()}`);
    if (file === 'skills.js' && /depth:\s*null/.test(line)) counts.depthNull += 1;
    if (file === 'projects.js' && /metric:\s*null/.test(line)) counts.metricNull += 1;
  });
}

console.log('Content check\n');
if (todos.length) {
  console.log(`Placeholders (${todos.length}):`);
  todos.forEach((entry) => console.log(`  ${entry}`));
} else {
  console.log('No TODO placeholders in src/data.');
}
console.log(`\nUnrated skills (depth: null): ${counts.depthNull}`);
console.log(`Projects without a metric:    ${counts.metricNull}  (fine for small projects; featured ones read better with one)`);

if (strict && todos.length) {
  console.error('\nStrict mode: fill or remove the placeholders above before releasing.');
  process.exit(1);
}
