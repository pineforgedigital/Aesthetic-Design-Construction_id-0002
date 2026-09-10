import { groq } from "next-sanity";

export const getProjectsQuery = groq`*[_type == "project"] | order(_createdAt desc) {
  _id,
  title,
  category,
  description,
  "mainImage": mainImage.asset->url,
  "images": gallery[].asset->url
}`;

export const getTeamMembersQuery = groq`*[_type == "teamMember"] | order(_createdAt asc) {
  _id,
  name,
  role,
  bio,
  "image": headshot.asset->url
}`;

export const getHomePageQuery = groq`*[_type == "homePage"][0] {
  heroHeadline,
  heroSubtitle,
  "heroImage": heroImage.asset->url,
  seo,
  highlightsHeadline,
  highlightsText,
  highlightsList,
  "highlightsImage": highlightsImage.asset->url,
  ctaHeadline,
  ctaSubtitle,
  primaryButtonText,
  primaryButtonUrl,
  secondaryButtonText,
  secondaryButtonUrl,
  featuredServices[]->{
    _id,
    serviceName,
    "slug": slug.current,
    "image": image.asset->url,
    description
  }
}`;

export const getAboutPageQuery = groq`*[_type == "aboutPage"][0] {
  storyHeadline,
  "storyImage": storyImage.asset->url,
  storyParagraphs,
  missionStatement,
  processSubtitle,
  processSteps,
  coreValuesSubtitle,
  coreValuesList,
  ctaHeadline,
  seo
}`;

export const getSiteSettingsQuery = groq`*[_type == "siteSettings"][0] {
  contactEmail,
  contactPhone,
  instagramUrl,
  facebookUrl,
  footerText,
  address,
  businessHours,
  companyName,
  mainNavLinks,
  footerQuickLinks,
  footerLegalLinks,
  globalCtaHeadline,
  globalCtaSubtitle,
  globalCtaButtonText,
  globalCtaButtonUrl,
  seo
}`;

export const getTestimonialsQuery = groq`*[_type == "testimonial"] | order(_createdAt desc) {
  _id,
  clientName,
  role,
  quote,
  rating
}`;

export const getServicesPageQuery = groq`*[_type == "servicesPage"][0] {
  heroHeadline,
  heroSubtitle,
  ctaHeadline,
  materialsHeadline,
  materialsText,
  "materialsImage": materialsImage.asset->url,
  craftsmanshipHeadline,
  craftsmanshipText,
  craftsmanshipText2,
  "craftsmanshipImage": craftsmanshipImage.asset->url,
  visualizeHeadline,
  visualizeText,
  visualizeText2,
  differenceHeadline,
  differenceText,
  differenceHighlights,
  differenceFooter,
  seo
}`;

export const getServicesQuery = groq`*[_type == "service"] | order(_createdAt asc) {
  _id,
  serviceName,
  "slug": slug.current,
  subtitle,
  "image": image.asset->url,
  description,
  subServices,
  capabilities
}`;

export const getContactPageQuery = groq`*[_type == "contactPage"][0] {
  heroHeadline,
  heroSubtitle,
  contactInfoSubtitle,
  seo
}`;

export const getLegalPageQuery = groq`*[_type == "legalPage" && slug.current == $slug][0] {
  title,
  lastUpdated,
  content,
  seo
}`;
