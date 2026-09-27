import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'uvfvl0gt',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN || process.env.SANITY_STUDIO_TOKEN
});

async function main() {
  console.log("Checking API token permissions...");

  // 1. Update Decorate Service
  const serviceId = await client.fetch(`*[_type == "service" && serviceName == "Decorate"][0]._id`);
  if (serviceId) {
    console.log("Updating Decorate service description...");
    await client.patch(serviceId)
      .set({ description: "The details that make a house feel like home." })
      .commit();
    console.log("Decorate service updated.");
  }

  // 2. Add Aesthetic Difference to Home Page
  const homeId = await client.fetch(`*[_type == "homePage"][0]._id`);
  if (homeId) {
    console.log("Updating Home Page with Aesthetic Difference section...");
    await client.patch(homeId)
      .set({
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
      })
      .commit();
    console.log("Home Page updated.");
  }
}

main().then(() => console.log("Migration complete!")).catch(console.error);
