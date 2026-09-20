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
  console.log("Patching difference fields...");
  await client.patch('homePage').set({
    differenceHeadline: "From Concept to Curated.",
    differenceText: [
      "Most remodeling companies focus on construction.",
      "Most interior designers focus on design.",
      "We bring the two together, and carry the vision all the way through the finishing touches.",
      "At Aesthetic Design & Construction, you don’t have to assemble a team of designers, contractors, installers, and decorators to create one cohesive home. We can help with it all."
    ],
    differenceHighlights: [
      "Design.", "Materials.", "Construction.", "Custom Craftsmanship.", "Installation.", "Furnishings.", "Styling."
    ],
    differenceFooter: "One Team. One Vision. One Beautifully Finished Home."
  }).commit();
  console.log("Done patching.");
}

run().catch(console.error);
