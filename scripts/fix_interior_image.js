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

async function main() {
  const filePath = path.join(__dirname, '../Business photos/Decorating/IMG_0804.jpg');
  const filename = path.basename(filePath);
  console.log(`Uploading ${filename}...`);
  
  try {
    const readStream = fs.createReadStream(filePath);
    const asset = await client.assets.upload('image', readStream, { filename });
    console.log(`Uploaded! Asset ID: ${asset._id}`);
    
    console.log('Patching service document service-interiors...');
    await client.patch('service-interiors').set({
      image: { _type: 'image', asset: { _type: 'reference', _ref: asset._id } }
    }).commit();
    console.log('Successfully updated service image in Sanity!');
    
  } catch (error) {
    console.error(`Failed to upload or patch:`, error);
  }
}

main().catch(console.error);
