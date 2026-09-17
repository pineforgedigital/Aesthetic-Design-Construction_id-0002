require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@sanity/client');
const fs = require('fs');
const path = require('path');

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
  apiVersion: '2023-01-01',
});

async function updateHeroImage() {
  try {
    const docs = await client.fetch(`*[_type == "homePage"]`);
    if (docs.length === 0) {
      console.log('No homePage document found');
      process.exit(1);
    }
    const docId = docs[0]._id;

    console.log('Uploading image...');
    const imagePath = path.join(__dirname, 'public', 'home-hero.jpg');
    const imageAsset = await client.assets.upload('image', fs.createReadStream(imagePath), {
      filename: 'home-hero.jpg'
    });
    console.log('Image uploaded. Asset ID:', imageAsset._id);

    console.log('Patching homePage document...', docId);
    await client
      .patch(docId)
      .set({
        heroImage: {
          _type: 'image',
          asset: {
            _type: "reference",
            _ref: imageAsset._id
          }
        }
      })
      .commit();
    console.log('HomePage updated successfully!');
  } catch (error) {
    console.error('Error updating sanity:', error);
    process.exit(1);
  }
}

updateHeroImage();
