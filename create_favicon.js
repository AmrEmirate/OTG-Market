import fs from 'fs';
import { createCanvas, loadImage } from 'canvas';
import path from 'path';

async function createFavicon() {
  const img = await loadImage('./public/logo otg.jpeg');
  
  // Create 64x64 canvas for favicon
  const size = 64;
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext('2d');
  
  // Draw rounded square background (dark)
  const radius = 14;
  ctx.beginPath();
  ctx.moveTo(radius, 0);
  ctx.lineTo(size - radius, 0);
  ctx.quadraticCurveTo(size, 0, size, radius);
  ctx.lineTo(size, size - radius);
  ctx.quadraticCurveTo(size, size, size - radius, size);
  ctx.lineTo(radius, size);
  ctx.quadraticCurveTo(0, size, 0, size - radius);
  ctx.lineTo(0, radius);
  ctx.quadraticCurveTo(0, 0, radius, 0);
  ctx.closePath();
  ctx.fillStyle = '#000000';
  ctx.fill();
  
  // Clip to rounded square
  ctx.save();
  ctx.clip();
  
  // Draw the logo image centered
  const imgW = img.width;
  const imgH = img.height;
  const scale = Math.max(size / imgW, size / imgH);
  const drawW = imgW * scale;
  const drawH = imgH * scale;
  const x = (size - drawW) / 2;
  const y = (size - drawH) / 2;
  
  ctx.drawImage(img, x, y, drawW, drawH);
  ctx.restore();
  
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync('./public/favicon.png', buffer);
  console.log('favicon.png created successfully!');
}

createFavicon().catch(console.error);
