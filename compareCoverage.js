const fs = require('fs');

// const currentPath = './utreports/coverage-summary.json';
// const previousPath = './previous-coverage.json'; // stored from last run

const path = require('path');

const currentPath = path.resolve(__dirname, './utreports/coverage-summary.json');
const previousPath = path.resolve(__dirname, './previous-coverage.json');

if (!fs.existsSync(currentPath)) {
  console.error('❌ Current coverage file not found.');
  process.exit(1);
}

const current = JSON.parse(fs.readFileSync(currentPath));
const currentPct = current.total.lines.pct;

if (!fs.existsSync(previousPath)) {
  console.log('ℹ️ No previous coverage file found. Skipping comparison.');
  fs.copyFileSync(currentPath, previousPath);
  process.exit(0);
}

const previous = JSON.parse(fs.readFileSync(previousPath));
const prevPct = previous.total.lines.pct;

if (currentPct < prevPct) {
  const drop = (prevPct - currentPct).toFixed(2);
  console.error(`⚠️ Coverage dropped by ${drop}% (from ${prevPct}% → ${currentPct}%)`);
  process.exit(1);
} else {
  console.log(`✅ Coverage stable or improved (${prevPct}% → ${currentPct}%)`);
}

fs.copyFileSync(currentPath, previousPath);
