const sharp = require('sharp');
const fs = require('fs');

async function processImage() {
  await sharp('src/app/icon.jpg')
    .clahe({ width: 200, height: 200, maxSlope: 100 }) // CLAHE for massive contrast enhancement
    .linear(1.5, -50) // Increase contrast (multiplier), darken (offset)
    .toFile('src/app/icon-temp.jpg');
    
  fs.renameSync('src/app/icon-temp.jpg', 'src/app/icon.jpg');
  console.log('Processed icon');
}

processImage().catch(console.error);
