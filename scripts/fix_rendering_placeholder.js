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
  console.log('Fixing rendering placeholder...');
  const filePath = path.join(__dirname, '../public/placeholder.svg');
  const filename = path.basename(filePath);
  
  try {
    const readStream = fs.createReadStream(filePath);
    const asset = await client.assets.upload('image', readStream, { filename });
    console.log(`Uploaded placeholder image! Asset ID: ${asset._id}`);
    
    await client.patch('service-rendering')
      .set({
        image: { _type: 'image', asset: { _type: 'reference', _ref: asset._id } }
      })
      .commit();
      
    console.log(`Successfully patched service-rendering with placeholder!`);
  } catch (error) {
    console.error(`Error patching service-rendering:`, error);
  }
}

main().catch(console.error);
