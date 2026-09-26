import { createClient } from '@sanity/client';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(process.cwd(), '.env.local') });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
});

async function migrate() {
  console.log('Starting Stage 2 migration...');

  try {
    // Migrate Portfolio Page
    console.log('Migrating portfolioPage...');
    const portfolioPageId = 'portfolioPage'; 
    await client.createOrReplace({
      _id: portfolioPageId,
      _type: 'portfolioPage',
      heroHeadline: 'Our Portfolio',
      heroSubtitle: 'Recent Work',
      heroText: 'Explore our recent remodeling and construction projects, highlighting our approach to quality building and practical design.',
    });
    console.log('Successfully migrated portfolioPage.');

    // Migrate Team Page
    console.log('Migrating teamPage...');
    const teamPageId = 'teamPage';
    await client.createOrReplace({
      _id: teamPageId,
      _type: 'teamPage',
      heroHeadline: 'Meet The Team',
      heroSubtitle: 'Our People',
      heroText: 'The builders, designers, and project managers who work together to bring your project to life.',
    });
    console.log('Successfully migrated teamPage.');

    console.log('Stage 2 Migration complete!');
  } catch (error) {
    console.error('Migration failed:', error);
  }
}

migrate();
