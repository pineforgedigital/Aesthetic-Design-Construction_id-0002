const sharp = require('sharp');

sharp('public/logo.jpg')
  .resize({
    width: 1200,
    height: 630,
    fit: 'contain',
    background: { r: 250, g: 248, b: 245, alpha: 1 } // #FAF8F5
  })
  .toFile('public/og-logo.jpg', (err, info) => {
    if (err) console.error(err);
    else console.log('Successfully padded logo');
  });
