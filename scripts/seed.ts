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

async function seed() {
  console.log("Seeding homePage...");
  await client.createIfNotExists({ _id: 'homePage', _type: 'homePage' });
  await client.patch('homePage').setIfMissing({
    heroHeadline: "Quality Construction & Thoughtful Design.",
    heroSubtitle: "We bring together skilled building and thoughtful design to create functional, well-made homes tailored to your lifestyle.",
    primaryButtonText: "Start Your Project",
    primaryButtonUrl: "/contact",
    secondaryButtonText: "View Our Work",
    secondaryButtonUrl: "/portfolio",
    highlightsHeadline: "Attention to Detail",
    highlightsText: "We treat every project with care and focus. By managing a select number of projects at a time, we make sure your home gets the dedicated attention it deserves, from the first plans to the final walkthrough.",
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
    differenceFooter: "One Team. One Vision. One Beautifully Finished Home.",
    highlightsList: [
      { _key: '1', iconName: "Ruler", title: "Solid Engineering", desc: "Reliable construction backed by structural expertise." },
      { _key: '2', iconName: "Hammer", title: "Custom Carpentry", desc: "Quality woodwork and cabinetry built to fit your home." },
      { _key: '3', iconName: "PaintBucket", title: "Full-Service Design", desc: "An organized process from the first blueprints to the final walkthrough." }
    ]
  }).commit();

  console.log("Seeding aboutPage...");
  await client.createIfNotExists({ _id: 'aboutPage', _type: 'aboutPage' });
  await client.patch('aboutPage').setIfMissing({
    storyHeadline: "ROOTED IN FAITH. BUILT WITH PURPOSE.",
    missionStatement: "To build and design reliable, well-crafted spaces that stand the test of time and fit our clients' everyday lives.",
    storyParagraphs: [
      "We started Aesthetic Design & Construction because we saw a gap in the industry: homeowners were often forced to manage separate teams for building and interior design. This disconnect led to communication breakdowns, budget overruns, and a disjointed final product.",
      "Our approach is different. By keeping both the architectural construction and the interior styling under one roof, we ensure that every phase of the project speaks the same language. From the initial framing to the final placement of furniture, our team is aligned on the vision.",
      "Whether it’s a complete home renovation or a custom build, we believe that true quality comes from a seamless partnership between builder and designer."
    ],
    processSubtitle: "A clear, organized approach from planning to completion, keeping you informed at every step.",
    processSteps: [
      { _key: '1', iconName: "Compass", title: "Discovery", desc: "We start by understanding your goals, budget, and design preferences." },
      { _key: '2', iconName: "PenTool", title: "Design & Planning", desc: "Our team develops detailed plans, material selections, and a clear timeline." },
      { _key: '3', iconName: "Hammer", title: "Construction", desc: "We execute the build with precision, keeping the site clean and organized." },
      { _key: '4', iconName: "Sofa", title: "Furnishing & Styling", desc: "We bring the space to life with carefully selected furniture and decor." }
    ],
    coreValuesSubtitle: "The core principles that guide our work and our relationships with clients.",
    coreValuesList: [
      { _key: '1', iconName: "ShieldCheck", title: "Integrity", desc: "Honest communication and transparent pricing from start to finish." },
      { _key: '2', iconName: "Star", title: "Quality", desc: "We don't cut corners. We build things to last." },
      { _key: '3', iconName: "Users", title: "Collaboration", desc: "We listen to your needs and work together to achieve the best result." }
    ]
  }).commit();

  console.log("Seeding servicesPage...");
  await client.createIfNotExists({ _id: 'servicesPage', _type: 'servicesPage' });
  await client.patch('servicesPage').setIfMissing({
    heroHeadline: "Our Expertise",
    heroSubtitle: "From small designs to complete interior Remodeling we offer tailored Services to complete your Project",
    materialsHeadline: "Beautiful Materials. \nThoughtfully Selected.",
    materialsText: "The materials you live with every day should be beautiful, durable, and chosen with intention. We help you navigate the countless decisions that go into a renovation, sourcing and coordinating materials that complement one another and support the overall vision.",
    craftsmanshipHeadline: "Made For Your Home. \nMade To Last.",
    craftsmanshipText: "Some spaces call for something you simply can’t find in a showroom. Our custom woodworking brings artistry and craftsmanship into your home through pieces designed specifically for your space.",
    craftsmanshipText2: "From built-ins and cabinetry to mantels, furniture, shelving, and architectural details, each piece is thoughtfully crafted with quality materials, durable construction, and meticulous attention to detail."
  }).commit();

  console.log("Seeding contactPage...");
  await client.createIfNotExists({ _id: 'contactPage', _type: 'contactPage' });
  await client.patch('contactPage').setIfMissing({
    heroHeadline: "Contact Us",
    heroSubtitle: "We're here to help you get started on your next project. Reach out to our team to schedule a consultation.",
    contactInfoSubtitle: "Prefer to reach out directly? Use the details below."
  }).commit();

  console.log("Seeding siteSettings...");
  await client.createIfNotExists({ _id: 'siteSettings', _type: 'siteSettings' });
  await client.patch('siteSettings').setIfMissing({
    globalCtaHeadline: "Ready to transform your space?",
    globalCtaSubtitle: "Schedule a consultation to discuss your project with our builders and designers.",
    globalCtaButtonText: "Contact Us Today",
    globalCtaButtonUrl: "/contact"
  }).commit();

  console.log("Seeding complete!");
}

seed().catch(console.error);
