const fs = require('fs');
const path = require('path');
const { createClient } = require('next-sanity');

const client = createClient({
  projectId: 'uvfvl0gt',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'skPjpmWhvvLIekk4i6oaFHV4XkMWyDO2egGKrDD1xbvCo5LQ5XlEBh85g1SIJslmUt0ObRvxfupwGskLdmHouP7MDsr5UCpCZ6f193LrHgSkCWUYNoGAaNkksDIICmqC7CQj65IHGNI0mOViYTQZNTh2T1C6yrkKbk1wbueh5RSfiorxgs7V'
});

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

async function main() {
  const photosDir = path.join(__dirname, '../Business photos');
  
  // 1. Upload the specific images we want to use
  const heroImageId = await uploadAsset(path.join(photosDir, 'Kitchens', 'IMG_5841.jpg'));
  const highlightImageId = await uploadAsset(path.join(photosDir, 'Custom Pieces', 'IMG_1310.jpg'));
  const portraitImageId = await uploadAsset(path.join(photosDir, 'Portraits', 'Cannon 2025_229_3942.jpg'));
  const kitchenServiceImageId = await uploadAsset(path.join(photosDir, 'Kitchens', 'IMG_2760.jpg'));
  const bathServiceImageId = await uploadAsset(path.join(photosDir, 'Bathrooms', 'IMG_9154.jpg'));
  const interiorServiceImageId = await uploadAsset(path.join(photosDir, 'Decorating', 'IMG_5464.jpg'));

  // 2. Create/Patch About Page
  await client.createIfNotExists({ _id: 'aboutPage', _type: 'aboutPage' });
  await client.patch('aboutPage').set({
    storyImage: { _type: 'image', asset: { _type: 'reference', _ref: portraitImageId } }
  }).commit();
  console.log('Updated About Page');

  // 3. Create Services Documents
  const createService = async (id, name, assetId, slug) => {
    const doc = {
      _id: id,
      _type: 'service',
      serviceName: name,
      slug: { _type: 'slug', current: slug },
      image: { _type: 'image', asset: { _type: 'reference', _ref: assetId } }
    };
    await client.createOrReplace(doc);
    return id;
  };

  const s1Id = await createService('service-kitchens', 'Kitchen Remodeling', kitchenServiceImageId, 'kitchen-remodeling');
  const s2Id = await createService('service-bathrooms', 'Luxury Bathrooms', bathServiceImageId, 'luxury-bathrooms');
  const s3Id = await createService('service-interiors', 'Full Interiors', interiorServiceImageId, 'full-interior-remodeling');
  console.log('Created Services Documents');

  // 4. Create/Patch Home Page
  await client.createIfNotExists({ _id: 'homePage', _type: 'homePage' });
  await client.patch('homePage').set({
    heroImage: { _type: 'image', asset: { _type: 'reference', _ref: heroImageId } },
    highlightsImage: { _type: 'image', asset: { _type: 'reference', _ref: highlightImageId } },
    featuredServices: [
      { _type: 'reference', _ref: s1Id },
      { _type: 'reference', _ref: s2Id },
      { _type: 'reference', _ref: s3Id }
    ]
  }).commit();
  console.log('Updated Home Page');

  console.log('Sanity population complete!');
}

main().catch(console.error);
