import { createClient } from '@sanity/client';
import * as dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
});

async function run() {
  const published = await client.getDocument('homePage');
  const draft = await client.getDocument('drafts.homePage');
  
  console.log("PUBLISHED:");
  console.log(JSON.stringify({
    differenceHeadline: published?.differenceHeadline,
    differenceText: published?.differenceText,
  }, null, 2));

  console.log("DRAFT:");
  console.log(JSON.stringify({
    differenceHeadline: draft?.differenceHeadline,
    differenceText: draft?.differenceText,
  }, null, 2));
}

run().catch(console.error);
