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
  "image": headshot
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
    "image": image,
    description
  },
  differenceHeadline,
  differenceText,
  differenceHighlights,
  differenceFooter,
  "differenceImage1": differenceImage1,
  "differenceImage2": differenceImage2,
  "differenceLargeImage": differenceLargeImage
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
  "materialsImage": materialsImage,
  craftsmanshipHeadline,
  craftsmanshipText,
  craftsmanshipText2,
  "craftsmanshipImage": craftsmanshipImage,
  visualizeHeadline,
  visualizeText,
  visualizeText2,
  seo
}`;

export const getServicesQuery = groq`*[_type == "service"] | order(_createdAt asc) {
  _id,
  serviceName,
  "slug": slug.current,
  subtitle,
  "image": image,
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

export const getTeamPageQuery = groq`*[_type == "teamPage"][0] {
  heroHeadline,
  heroSubtitle,
  heroText,
  "heroImage": heroImage,
  seo
}`;

export const getPortfolioPageQuery = groq`*[_type == "portfolioPage"][0] {
  heroHeadline,
  heroSubtitle,
  heroText,
  seo
}`;
