const fs = require('fs');
const path = require('path');
const { createClient } = require('next-sanity');

// Initialize Sanity client
const client = createClient({
  projectId: 'uvfvl0gt',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'skPjpmWhvvLIekk4i6oaFHV4XkMWyDO2egGKrDD1xbvCo5LQ5XlEBh85g1SIJslmUt0ObRvxfupwGskLdmHouP7MDsr5UCpCZ6f193LrHgSkCWUYNoGAaNkksDIICmqC7CQj65IHGNI0mOViYTQZNTh2T1C6yrkKbk1wbueh5RSfiorxgs7V'
});

const PHOTOS_DIR = path.join(__dirname, '../Business photos');

const CATEGORY_MAP = {
  'Bathrooms': 'Luxury Bathrooms',
  'Countertops': 'Premium Countertops',
  'Custom Pieces': 'Custom Pieces',
  'Decorating': 'Interior Design & Decorating',
  'Fireplaces': 'Fireplaces',
  'Flooring': 'Flooring',
  'Kitchens': 'Kitchen Remodeling',
  'Tile Backsplash': 'Custom Tile Work'
};

async function uploadAsset(filePath) {
  const readStream = fs.createReadStream(filePath);
  const filename = path.basename(filePath);
  console.log(`Uploading ${filename}...`);
  try {
    const asset = await client.assets.upload('image', readStream, { filename });
    return asset._id;
  } catch (error) {
    console.error(`Failed to upload ${filename}:`, error);
    return null;
  }
}

function generateSlug(text) {
  return text.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]+/g, '');
}

async function processFolder(folderName) {
  const folderPath = path.join(PHOTOS_DIR, folderName);
  if (!fs.statSync(folderPath).isDirectory()) return;

  // Handle Portraits differently (just upload assets to media library)
  if (folderName === 'Portraits') {
    console.log('Uploading Portraits to Media Library...');
    const files = fs.readdirSync(folderPath);
    for (const file of files) {
      await uploadAsset(path.join(folderPath, file));
    }
    return;
  }

  const sanityCategory = CATEGORY_MAP[folderName];
  if (!sanityCategory) {
    console.log(`Skipping unknown folder: ${folderName}`);
    return;
  }

  const files = fs.readdirSync(folderPath).filter(f => f.match(/\.(jpg|jpeg|png|heic|webp)$/i));
  if (files.length === 0) return;

  console.log(`\nProcessing Category: ${folderName} (${files.length} images)`);

  const assetIds = [];
  for (const file of files) {
    const assetId = await uploadAsset(path.join(folderPath, file));
    if (assetId) assetIds.push(assetId);
  }

  if (assetIds.length === 0) return;

  const title = `${folderName} Showcase`;
  
  const projectDoc = {
    _type: 'project',
    title: title,
    slug: { _type: 'slug', current: generateSlug(title) },
    category: sanityCategory,
    mainImage: {
      _type: 'image',
      asset: { _type: 'reference', _ref: assetIds[0] }
    },
    gallery: assetIds.slice(1).map(id => ({
      _type: 'image',
      asset: { _type: 'reference', _ref: id }
    })),
    description: `A collection of our finest ${folderName.toLowerCase()} work.`
  };

  try {
    const result = await client.create(projectDoc);
    console.log(`Created project document: ${result.title} (${result._id})`);
  } catch (error) {
    console.error(`Failed to create project document for ${folderName}:`, error);
  }
}

async function main() {
  const folders = fs.readdirSync(PHOTOS_DIR);
  for (const folder of folders) {
    await processFolder(folder);
  }
  console.log('\nUpload complete!');
}

main().catch(console.error);
