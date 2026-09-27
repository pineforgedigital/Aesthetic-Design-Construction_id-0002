require('dotenv').config({ path: '.env.local' });
const { createClient } = require('@sanity/client');

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_API_TOKEN,
});

async function syncData() {
  console.log("Starting data sync...");

  // 1. Sync About Page
  console.log("Syncing About Page...");
  const storyParagraphs = [
    "Aesthetic Design & Construction was born from a belief that the gifts we are given are meant to be shared.",
    "We believe God has uniquely gifted each of us with different talents, passions, and abilities. And as we look back, it feels less like coincidence and more like a beautiful plan, bringing the right people together at the right time and giving us an opportunity to use those gifts together.",
    "For my husband, that gift has always been the ability to create with his hands. He has a natural passion for building, crafting, and bringing ideas to life, a skill that was passed down to him by his father. From an early age, he learned the value of hard work, craftsmanship, and taking pride in creating something with your own two hands.",
    "His father now brings that same passion and artistry to Aesthetic Design & Construction as our expert custom craftsman. He has an incredible artistic eye and a love for woodworking, creating custom pieces that are not only beautiful, but thoughtfully made to stand the test of time. There is something especially meaningful about seeing a gift passed from father to son, and now becoming part of something our family is building together.",
    "My own gifts have always drawn me toward the creative process. I love decorating, design, space planning, selecting the details, and imagining how all of the individual pieces can come together to transform a house into a home.",
    "And then there is Kelley.",
    "Years ago, while I was working at a furniture store, Kelley came in looking for help designing her basement and selecting furniture. What began as a design project quickly became a friendship that has lasted ever since.",
    "Kelley shares my love for decorating and has a natural talent for creating beautiful spaces. But one of the things that makes our partnership so special is the way we can see each other’s vision. We challenge, inspire, and build upon each other’s ideas, turning a thought or a feeling into a space that feels intentional and beautiful.",
    "What started as an unexpected friendship became another piece of the bigger picture. Today, Kelley is an integral part of our team and my partner on decorating projects.",
    "Four people. Different gifts. One shared purpose.",
    "Together, we bring design, decorating, construction, craftsmanship, and creativity to Aesthetic Design & Construction. But more importantly, we bring a genuine desire to use what we have been given to serve the families and community around us.",
    "We wanted to build something that was more than a business.",
    "We wanted to put down roots in the community we grew up in. We wanted to create something our children could watch us build: a family-owned company shaped by hard work, creativity, faith, and a commitment to doing things well. Something they could one day look back on and be proud to call part of their family.",
    "We believe a home is deeply personal. It is where families gather, where traditions begin, where children grow, and where countless memories are made. Because of that, we don’t believe a renovation should ever feel like simply changing finishes or knocking down walls.",
    "It should feel like creating something meaningful.",
    "That is why we approach every project with intention. We listen carefully. We design thoughtfully. We choose quality materials and finishes. We take pride in exceptional installation and craftsmanship. And we pour our hearts into the details, because we believe the work we do is an extension of the gifts we have been given.",
    "We feel incredibly blessed to have found a way to bring our passions together and share them with others.",
    "What began as individual gifts has become a shared calling.",
    "Our faith is the foundation.\\nOur family is at the heart.\\nOur craft is the expression.\\nAnd our community is who we are grateful to serve.",
    "This is Aesthetic Design & Construction.",
    "Rooted in faith. Built with purpose. Designed to last."
  ];

  const processSteps = [
    { title: "Consultation", desc: "We start by discussing your goals, timeline, and budget to build a solid plan for your project.", iconName: "Compass", _key: "step-1" },
    { title: "Design & Rendering", desc: "We provide detailed plans and 3D mockups so you can see your space before construction begins.", iconName: "PenTool", _key: "step-2" },
    { title: "Construction", desc: "Our builders manage the entire construction process, focusing on quality materials and structural integrity.", iconName: "Hammer", _key: "step-3" },
    { title: "Final Walkthrough", desc: "We review every detail with you to ensure the final result meets your expectations.", iconName: "CheckSquare", _key: "step-4" }
  ];

  const coreValuesList = [
    { title: "Quality Craftsmanship", desc: "We work with experienced tradespeople to ensure the work is done right the first time.", iconName: "ShieldCheck", _key: "cv-1" },
    { title: "Clear Communication", desc: "We keep you updated on progress, answering questions and sticking to the budget.", iconName: "HeartHandshake", _key: "cv-2" },
    { title: "Practical Solutions", desc: "We use effective building methods to solve structural and design challenges.", iconName: "Lightbulb", _key: "cv-3" }
  ];

  const existingAbout = await client.fetch('*[_type == "aboutPage"][0]');
  if (existingAbout) {
    await client.patch(existingAbout._id)
      .set({
        storyParagraphs,
        processSteps,
        coreValuesList,
        storyHeadline: "ROOTED IN FAITH. BUILT WITH PURPOSE.",
        processSubtitle: "A clear, organized approach from planning to completion, keeping you informed at every step.",
        coreValuesSubtitle: "The core principles that guide our work and our relationships with clients.",
        ctaHeadline: "Ready to start your journey?",
        missionStatement: "To build and design reliable, well-crafted spaces that stand the test of time and fit our clients' everyday lives."
      })
      .commit();
  }

  // 2. Sync Services Page
  console.log("Syncing Services Page...");
  const existingServicesPage = await client.fetch('*[_type == "servicesPage"][0]');
  if (existingServicesPage) {
    await client.patch(existingServicesPage._id)
      .set({
        heroHeadline: "Our Expertise",
        heroSubtitle: "From early design to final construction, we offer a full range of building and remodeling services tailored to your project.",
        ctaHeadline: "Ready to transform your space?",
        materialsHeadline: "Beautiful Materials. Thoughtfully Selected.",
        materialsText: "The materials you live with every day should be beautiful, durable, and chosen with intention. We help you navigate the countless decisions that go into a renovation, sourcing and coordinating materials that complement one another and support the overall vision.",
        craftsmanshipHeadline: "Made For Your Home. Made To Last.",
        craftsmanshipText: "Some spaces call for something you simply can’t find in a showroom. Our custom woodworking brings artistry and craftsmanship into your home through pieces designed specifically for your space.",
        craftsmanshipText2: "From built-ins and cabinetry to mantels, furniture, shelving, and architectural details, each piece is thoughtfully crafted with quality materials, durable construction, and meticulous attention to detail.",
        visualizeHeadline: "See Your Space Before It Becomes Reality.",
        visualizeText: "Big decisions are easier when you can see the vision. Our 3D renderings allow you to experience your space before construction begins. Visualize layouts, cabinetry, materials, finishes, colors, and architectural details before making the final decision.",
        visualizeText2: "Renderings help bridge the gap between an idea and the finished space, giving you confidence in the direction before construction begins.",
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
  }

  // 3. Sync Individual Services
  console.log("Syncing Individual Services...");
  const decorateSubServices = [
    { name: "Furnishings & Furniture", desc: "We curate thoughtfully selected pieces that harmonize perfectly with your space and lifestyle. From statement sofas to the perfect accent chair, every piece is chosen for its quality, scale, and ability to elevate the room's aesthetic.", _key: "ss-1" },
    { name: "Window Treatments", desc: "Custom window treatments are the tailored suit of a room. We design and install bespoke drapery, shades, and blinds that not only control light and privacy but also add a crucial layer of softness, texture, and architectural height to your space.", _key: "ss-2" },
    { name: "Artwork & Accessories", desc: "A house feels like a home when it reflects the people living in it. We source unique artwork, sculptural elements, and meaningful accessories that bring undeniable character, visual intrigue, and a collected-over-time feel to your interiors.", _key: "ss-3" },
    { name: "Textiles & Styling", desc: "It's the layers that create warmth. We expertly select vintage rugs, luxurious throw pillows, rich fabrics, and tactile finishing details that tie the room together, creating a cohesive and inviting atmosphere.", _key: "ss-4" },
    { name: "Final Styling", desc: "The finishing touch is where the magic happens. We meticulously style your shelves, surfaces, and seating areas, bringing every element into perfect balance for a beautifully completed, magazine-ready space.", _key: "ss-5" }
  ];

  const designSubServices = [
    { name: "Space Planning", desc: "A beautiful room must first be a functional one. We create thoughtful, intelligent layouts designed meticulously around the way you live, ensuring optimal flow, comfortable clearances, and purposeful zones within your home.", _key: "ss-6" },
    { name: "Interior Design", desc: "We establish a complete, bespoke design direction that brings your entire space together. From conceptual mood boards to the final execution, we ensure every detail speaks the same cohesive, elevated visual language.", _key: "ss-7" },
    { name: "Materials & Finishes", desc: "The tactile foundation of your home. We specify exquisite cabinetry, resilient countertops, artisan tile, premium flooring, distinctive hardware, and brilliant lighting fixtures that combine for an unparalleled sensory experience.", _key: "ss-8" },
    { name: "Custom Design", desc: "True luxury lies in the bespoke. We design unique built-ins, striking architectural details, and custom elements specifically tailored for your home, adding both immense value and undeniable character.", _key: "ss-9" },
    { name: "3D Renderings", desc: "Experience your new space before construction even begins. We produce photorealistic 3D renderings that allow you to visualize the proposed layouts, finishes, and custom details, giving you total confidence in the design direction.", _key: "ss-10" }
  ];

  const transformSubServices = [
    { name: "Kitchens", desc: "The heart of the home, designed for the way you actually live. We create kitchens that are beautiful enough to inspire culinary creativity and functional enough to handle everyday life. From custom cabinetry to the perfect island layout, we consider every element as part of one breathtaking, cohesive design.", _key: "ss-11" },
    { name: "Bathrooms", desc: "Your everyday personal retreat. We transform your bathroom into a space that feels beautiful, functional, and uniquely yours. By thoughtfully coordinating layouts, luxurious tile, elegant fixtures, and ambient lighting, we create spa-like sanctuaries built to last.", _key: "ss-12" },
    { name: "Whole-Home Transformations", desc: "One home, one cohesive vision. When you’re ready to reimagine your property as a whole, we bring every element together under a single, unified aesthetic. We manage the immense details of reconfiguring spaces and updating finishes, resulting in a home completely reimagined.", _key: "ss-13" }
  ];

  const decorate = await client.fetch('*[_type == "service" && serviceName match "Decorate"][0]');
  if (decorate) {
    await client.patch(decorate._id).set({
      subtitle: "The details that make a house feel like home.",
      description: "Our decorating services bring warmth, personality, and cohesion to your home through thoughtfully selected furnishings, textiles, artwork, window treatments, accessories, and styling.",
      subServices: decorateSubServices
    }).commit();
  }

  const design = await client.fetch('*[_type == "service" && serviceName match "Design"][0]');
  if (design) {
    await client.patch(design._id).set({
      subtitle: "A beautiful space begins with a thoughtful plan.",
      description: "Great design isn’t simply about choosing beautiful finishes. It’s about understanding how a space needs to function and creating a vision where every element works together.",
      subServices: designSubServices
    }).commit();
  }

  const transform = await client.fetch('*[_type == "service" && serviceName match "Transform"][0]');
  if (transform) {
    await client.patch(transform._id).set({
      subtitle: "Reimagine your home from the inside out.",
      description: "Our Transform service brings the complete Aesthetic experience together: from initial concept and design through construction, installation, custom craftsmanship, and final styling.",
      subServices: transformSubServices
    }).commit();
  }

  // 4. Sync Home Page
  console.log("Syncing Home Page...");
  const highlightsList = [
    { title: "Solid Engineering", desc: "Reliable construction backed by structural expertise.", iconName: "Ruler", _key: "hl-1" },
    { title: "Custom Carpentry", desc: "Quality woodwork and cabinetry built to fit your home.", iconName: "Hammer", _key: "hl-2" },
    { title: "Full-Service Design", desc: "An organized process from the first blueprints to the final walkthrough.", iconName: "PaintBucket", _key: "hl-3" }
  ];

  const existingHome = await client.fetch('*[_type == "homePage"][0]');
  if (existingHome) {
    await client.patch(existingHome._id).set({
      highlightsList,
      highlightsHeadline: "Attention to Detail",
      highlightsText: "We treat every project with care and focus. By managing a select number of projects at a time, we make sure your home gets the dedicated attention it deserves, from the first plans to the final walkthrough.",
      ctaHeadline: "Ready to Update Your Home?",
      ctaSubtitle: "Schedule a consultation to discuss your project with our builders and designers."
    }).commit();
  }

  console.log("Data sync complete!");
}

syncData().catch(console.error);
