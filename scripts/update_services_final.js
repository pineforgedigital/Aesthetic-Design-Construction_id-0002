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

const loremDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
const loremCapabilities = [
  "Lorem ipsum dolor sit amet",
  "Consectetur adipiscing elit",
  "Sed do eiusmod tempor incididunt",
  "Ut labore et dolore magna aliqua"
];

const newServices = [
  {
    _id: 'service-decorating',
    _type: 'service',
    serviceName: 'Interior Design & Decorating',
    slug: { _type: 'slug', current: 'interior-design-decorating' },
    description: loremDescription,
    capabilities: loremCapabilities,
    imagePath: '../Business photos/Decorating/IMG_0805.jpg'
  },
  {
    _id: 'service-rendering',
    _type: 'service',
    serviceName: 'Rendering',
    slug: { _type: 'slug', current: 'rendering' },
    description: loremDescription,
    capabilities: loremCapabilities,
    imagePath: '../Business photos/Decorating/IMG_1527.jpg'
  }
];

async function main() {
  console.log('Deleting Custom Fireplaces service...');
  try {
    await client.delete('service-fireplaces');
    console.log('Successfully deleted service-fireplaces.');
  } catch (err) {
    console.log('Could not delete service-fireplaces (maybe it was already deleted):', err.message);
  }

  for (const service of newServices) {
    console.log(`Processing service: ${service.serviceName}...`);
    
    const filePath = path.join(__dirname, service.imagePath);
    const filename = path.basename(filePath);
    
    try {
      const readStream = fs.createReadStream(filePath);
      const asset = await client.assets.upload('image', readStream, { filename });
      console.log(`Uploaded image! Asset ID: ${asset._id}`);
      
      const doc = {
        _id: service._id,
        _type: 'service',
        serviceName: service.serviceName,
        slug: service.slug,
        description: service.description,
        capabilities: service.capabilities,
        image: { _type: 'image', asset: { _type: 'reference', _ref: asset._id } }
      };
      
      await client.createOrReplace(doc);
      console.log(`Successfully created document for ${service.serviceName}!\n`);
    } catch (error) {
      console.error(`Error processing ${service.serviceName}:`, error);
    }
  }
}

main().catch(console.error);
