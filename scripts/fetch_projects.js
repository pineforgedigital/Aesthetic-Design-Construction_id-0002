require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: false
});

async function run() {
  const project = await client.fetch('*[_type == "project" && title == "Decorating Showcase"][0]');
  console.log(JSON.stringify(project, null, 2));
}

run().catch(console.error);
