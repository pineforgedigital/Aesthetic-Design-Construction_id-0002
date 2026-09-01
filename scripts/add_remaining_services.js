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

const servicesToAdd = [
  {
    _id: 'service-countertops',
    _type: 'service',
    serviceName: 'Premium Countertops',
    slug: { _type: 'slug', current: 'premium-countertops' },
    description: 'Elevate your kitchen or bathroom with our stunning, durable, and expertly crafted premium countertops. We source only the finest materials to provide a flawless finish that matches your luxury aesthetic.',
    capabilities: ['Granite & Quartz Installation', 'Custom Edge Profiles', 'Seamless Integration', 'Stain & Scratch Resistant Surfaces'],
    imagePath: '../Business photos/Countertops/IMG_2762.jpg'
  },
  {
    _id: 'service-custom-pieces',
    _type: 'service',
    serviceName: 'Custom Pieces',
    slug: { _type: 'slug', current: 'custom-pieces' },
    description: 'Our bespoke custom pieces are designed and built to seamlessly integrate into your unique space. From breathtaking custom shelving to statement centerpieces, we craft woodwork and masonry that defines luxury.',
    capabilities: ['Bespoke Cabinetry', 'Custom Woodwork', 'Built-in Shelving', 'Unique Architectural Accents'],
    imagePath: '../Business photos/Custom Pieces/IMG_1310.jpg'
  },
  {
    _id: 'service-fireplaces',
    _type: 'service',
    serviceName: 'Custom Fireplaces',
    slug: { _type: 'slug', current: 'custom-fireplaces' },
    description: 'Transform your living space with a custom-built fireplace that serves as a stunning centerpiece. We combine traditional masonry with modern design to create warm, inviting, and luxurious gathering areas.',
    capabilities: ['Stone & Brick Masonry', 'Modern Gas & Electric Installations', 'Custom Mantels & Hearths', 'Chimney Refacing'],
    imagePath: '../Business photos/Fireplaces/IMG_7462.jpg'
  },
  {
    _id: 'service-flooring',
    _type: 'service',
    serviceName: 'Luxury Flooring',
    slug: { _type: 'slug', current: 'luxury-flooring' },
    description: 'The foundation of any beautiful room starts with the floor. We offer premium flooring solutions, from rich hardwood to elegant tile, installed with absolute precision.',
    capabilities: ['Hardwood Installation & Refinishing', 'Luxury Vinyl Plank (LVP)', 'Porcelain & Ceramic Tile', 'Heated Flooring Systems'],
    imagePath: '../Business photos/Flooring/IMG_9524.jpg'
  }
];

async function main() {
  for (const service of servicesToAdd) {
    console.log(`Processing service: ${service.serviceName}...`);
    
    // Upload image
    const filePath = path.join(__dirname, service.imagePath);
    const filename = path.basename(filePath);
    
    try {
      const readStream = fs.createReadStream(filePath);
      const asset = await client.assets.upload('image', readStream, { filename });
      console.log(`Uploaded image! Asset ID: ${asset._id}`);
      
      // Create or replace document
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
      console.log(`Successfully created/updated document for ${service.serviceName}!\n`);
    } catch (error) {
      console.error(`Error processing ${service.serviceName}:`, error);
    }
  }
}

main().catch(console.error);
