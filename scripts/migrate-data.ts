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
  console.log('Starting migration...');

  try {
    // Migrate Site Settings
    console.log('Migrating siteSettings...');
    await client.createOrReplace({
      _id: 'siteSettings',
      _type: 'siteSettings',
      companyName: 'Aesthetic Design & Construction',
      footerText: 'Rooted in our community. Inspired by family and friends. Built with heart.',
      mainNavLinks: [
        { _key: '1', url: '/', label: 'Home' },
        { _key: '2', url: '/portfolio', label: 'Portfolio' },
        { _key: '3', url: '/services', label: 'Services' },
        { _key: '4', url: '/our-story', label: 'Our Story' },
        { _key: '5', url: '/the-team', label: 'The Team' },
      ],
      footerQuickLinks: [
        { _key: '1', label: 'Home', url: '/' },
        { _key: '2', label: 'Portfolio', url: '/portfolio' },
        { _key: '3', label: 'Services', url: '/services' },
        { _key: '4', label: 'Our Story', url: '/our-story' },
        { _key: '5', label: 'The Team', url: '/the-team' },
      ],
      footerLegalLinks: [
        { _key: '1', label: 'Terms of Service', url: '/terms-of-service' },
        { _key: '2', label: 'Privacy Policy', url: '/privacy-policy' },
      ],
      globalCtaHeadline: 'Ready to transform your space?',
      globalCtaSubtitle: "Let's discuss your project and how we can bring your vision to life.",
      globalCtaButtonText: 'Get in Touch',
      globalCtaButtonUrl: '/contact',
    });
    console.log('Successfully migrated siteSettings.');

    // Migrate Home Page
    console.log('Migrating homePage...');
    const homePageId = 'homePage'; // We will just create or replace one document with a specific ID
    await client.createOrReplace({
      _id: homePageId,
      _type: 'homePage',
      heroHeadline: 'Custom Building & Remodeling in South Jersey.',
      heroSubtitle: 'We bring luxury construction and intentional design to Haddonfield, Medford, and surrounding South Jersey communities. Family-owned, expertly crafted.',
      primaryButtonText: 'View Our Work',
      primaryButtonUrl: '/portfolio',
      secondaryButtonText: 'Our Services',
      secondaryButtonUrl: '/services',
      highlightsHeadline: 'Our Approach',
      highlightsText: "We believe in a collaborative, transparent process that puts your needs first. From the initial consultation to the final walkthrough, we're with you every step of the way.",
      differenceHeadline: 'From Concept TO CURATED.',
      differenceText: [
        "We believe your home should be a reflection of you—not a replica of a showroom.",
        "That’s why we don’t just build houses; we craft environments tailored to the way you actually live. We take the time to understand your daily rhythms, your personal style, and your long-term goals for the space.",
        "Every detail, from the floor plan to the final finishes, is intentionally chosen to create a home that feels effortlessly yours.",
        "It’s not just about making it beautiful; it’s about making it make sense for your life."
      ],
      differenceHighlights: [
        "Architecture", "Interiors", "Construction"
      ],
      differenceFooter: "Designed specifically for you. Crafted by hand. Built to last.",
      highlightsList: [
        { _key: '1', title: "Transparent Communication", desc: "You're never left in the dark.", iconName: "Search" },
        { _key: '2', title: "Expert Craftsmanship", desc: "Built with precision and care.", iconName: "Hammer" },
        { _key: '3', title: "Intentional Design", desc: "Spaces that make sense for your life.", iconName: "Layers" }
      ],
    });
    console.log('Successfully migrated homePage.');

    console.log('Migration complete!');
  } catch (error) {
    console.error('Migration failed:', error);
  }
}

migrate();
