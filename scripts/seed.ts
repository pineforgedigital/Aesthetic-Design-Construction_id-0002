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
  await client.patch('homePage').set({
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
  await client.patch('aboutPage').set({
    storyHeadline: "ROOTED IN FAITH. BUILT WITH PURPOSE.",
    missionStatement: "Aesthetic Design & Construction was born from a belief that the gifts we are given are meant to be shared.",
    storyParagraphs: [
      "We believe God has uniquely gifted each of us with different talents, passions, and abilities. And as we look back, it feels less like coincidence and more like a beautiful plan, bringing the right people together at the right time and giving us an opportunity to use those gifts together.",
      "For Christian, that gift has always been the ability to create with his hands. He has a natural passion for building, crafting, and bringing ideas to life, a skill that was passed down to him by his father. From an early age, he learned the value of hard work, craftsmanship, and taking pride in creating something with his own two hands.",
      "His father now brings that same passion and artistry to Aesthetic Design & Construction as our expert custom craftsman. He has an incredible artistic eye and a love for woodworking, creating custom pieces that are not only beautiful, but thoughtfully made to stand the test of time. There is something especially meaningful about seeing a gift passed from father to son, and now becoming part of something our family is building together.",
      "Keelin’s gifts have always drawn her toward the creative process. She loves decorating, design, space planning, selecting the details, and imagining how all of the individual pieces can come together to transform a house into a home.",
      "And then there is Kelley.",
      "Years ago, while Keelin was working at a furniture store, Kelley came in looking for help designing her basement and selecting furniture. What began as a design project quickly became a friendship that has lasted ever since.",
      "Kelley shares Keelin’s love for decorating and has a natural talent for creating beautiful spaces. But one of the things that makes their partnership so special is the way they can see each other’s vision. They challenge, inspire, and build upon each other’s ideas, turning a thought or a feeling into a space that feels intentional and beautiful.",
      "What started as an unexpected friendship became another piece of the bigger picture. Today, Kelley is an integral part of our team and a core partner on decorating projects.",
      "Four people. Different gifts. One shared purpose.",
      "Together, we bring design, decorating, construction, craftsmanship, and creativity to Aesthetic Design & Construction. But more importantly, we bring a genuine desire to use what we have been given to serve the families and community around us.",
      "We wanted to build something that was more than a business.",
      "We wanted to put down roots in the community we grew up in. We wanted to create something our children could watch us build, a family-owned company shaped by hard work, creativity, faith, and a commitment to doing things well. Something they could one day look back on and be proud to call part of their family.",
      "We believe a home is deeply personal. It is where families gather, where traditions begin, where children grow, and where countless memories are made. Because of that, we don’t believe a renovation should ever feel like simply changing finishes or knocking down walls.",
      "It should feel like creating something meaningful.",
      "That is why we approach every project with intention. We listen carefully. We design thoughtfully. We choose quality materials and finishes. We take pride in exceptional installation and craftsmanship. And we pour our hearts into the details, because we believe the work we do is an extension of the gifts we have been given.",
      "We feel incredibly blessed to have found a way to bring our passions together and share them with others.",
      "What began as individual gifts has become a shared calling.",
      "Our faith is the foundation.\\nOur family is at the heart.\\nOur craft is the expression.\\nAnd our community is who we are grateful to serve.",
      "This is Aesthetic Design & Construction.",
      "Rooted in faith. Built with purpose. Designed to last."
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
