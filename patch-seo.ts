import { createClient } from 'next-sanity';

const client = createClient({
  projectId: 'uvfvl0gt',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN
});

async function run() {
  try {
    const res = await client
      .patch('homePage')
      .set({
        'seo.metaTitle': 'Interior Design & Home Remodeling'
      })
      .commit();
    console.log('Sanity patch successful:', res._id);
  } catch (err) {
    console.error('Error patching sanity:', err);
  }
}

run();
