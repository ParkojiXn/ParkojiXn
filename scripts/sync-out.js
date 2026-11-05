const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, '..', 'out');
const destDir = path.join(__dirname, '..');

if (!fs.existsSync(srcDir)) {
  console.error('out/ directory does not exist. Run "next build" first.');
  process.exit(1);
}

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(path.join(src, childItemName), path.join(dest, childItemName));
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

// Copy index.html, index.txt, 404.html, 404/, _next/
const itemsToSync = ['index.html', 'index.txt', '404.html', '404', '_next'];

itemsToSync.forEach((item) => {
  const sourcePath = path.join(srcDir, item);
  const targetPath = path.join(destDir, item);
  if (fs.existsSync(sourcePath)) {
    copyRecursiveSync(sourcePath, targetPath);
    console.log(`Synced ${item} -> root`);
  }
});

console.log('Successfully synced out/ build artifacts to root!');
