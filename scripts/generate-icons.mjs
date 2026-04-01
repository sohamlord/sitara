import fs from "fs";

const svg192 = `<svg xmlns="http://www.w3.org/2000/svg" width="192" height="192" viewBox="0 0 192 192">
  <rect width="192" height="192" rx="40" fill="#F38338"/>
  <text x="96" y="115" font-size="90" text-anchor="middle" font-family="Arial" font-weight="bold" fill="#020202">S</text>
</svg>`;

const svg512 = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="100" fill="#F38338"/>
  <text x="256" y="310" font-size="260" text-anchor="middle" font-family="Arial" font-weight="bold" fill="#020202">S</text>
</svg>`;

if (!fs.existsSync("public")) {
  fs.mkdirSync("public");
}

fs.writeFileSync("public/icon-192.svg", svg192);
fs.writeFileSync("public/icon-512.svg", svg512);
console.log("SVG icons created in /public");
