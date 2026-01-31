#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// Simple recursive copy function to avoid dependency on fs-extra if not installed
function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();

  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach(function (childItemName) {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName),
      );
    });
  } else {
    fs.copyFileSync(src, dest);
  }
}

const sourceDir = path.join(__dirname, "..", "assets", ".agent");
const targetDir = path.join(process.cwd(), ".agent");

console.log("🚀 Installing Antigravity iOS Kit...");

if (!fs.existsSync(sourceDir)) {
  console.error("❌ Error: Source assets not found at " + sourceDir);
  process.exit(1);
}

try {
  console.log(`📦 Copying skills and workflows to ${targetDir}...`);
  copyRecursiveSync(sourceDir, targetDir);
  console.log(
    "✅ Installation complete! You can now use Antigravity skills and workflows.",
  );
  console.log("   Try running: @antigravity-ios-kit/workflows/audit");
} catch (err) {
  console.error("❌ Installation failed:", err);
  process.exit(1);
}
