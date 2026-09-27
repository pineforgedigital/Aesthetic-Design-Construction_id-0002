import fs from 'fs';
import path from 'path';

const pages = [
  'src/app/(main)/the-team/page.tsx',
  'src/app/(main)/terms-of-service/page.tsx',
  'src/app/(main)/services/page.tsx',
  'src/app/(main)/privacy-policy/page.tsx',
  'src/app/(main)/portfolio/page.tsx',
  'src/app/(main)/our-story/page.tsx',
  'src/app/(main)/contact/page.tsx',
];

const slugs = {
  'the-team': '/the-team',
  'terms-of-service': '/terms-of-service',
  'services': '/services',
  'privacy-policy': '/privacy-policy',
  'portfolio': '/portfolio',
  'our-story': '/our-story',
  'contact': '/contact'
};

for (const p of pages) {
  let content = fs.readFileSync(p, 'utf-8');
  
  let slug = '/';
  for (const k in slugs) {
    if (p.includes(k)) slug = slugs[k];
  }

  content = content.replace(
    /return \{\s*title,\s*description,\s*openGraph:\s*\{([\s\S]*?)\}\s*\}/g,
    `return {
    title,
    description,
    alternates: {
      canonical: '${slug}',
    },
    openGraph: {
      type: 'website',
      url: '${slug}',
      siteName: 'Aesthetic Design & Construction',$1}
  }`
  );

  fs.writeFileSync(p, content);
  console.log(`Updated ${p}`);
}
