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
  highlightsHeadline,
  highlightsText,
  "highlightsImage": highlightsImage.asset->url,
  ctaHeadline,
  ctaSubtitle
}`;

export const getAboutPageQuery = groq`*[_type == "aboutPage"][0] {
  storyHeadline,
  storyText,
  missionStatement,
  coreValues,
  processSubtitle,
  coreValuesSubtitle,
  ctaHeadline
}`;

export const getSiteSettingsQuery = groq`*[_type == "siteSettings"][0] {
  contactEmail,
  contactPhone,
  instagramUrl,
  facebookUrl,
  footerText,
  address,
  businessHours
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
  ctaHeadline
}`;

export const getServicesQuery = groq`*[_type == "service"] | order(_createdAt asc) {
  _id,
  serviceName,
  "slug": slug.current,
  "image": image.asset->url,
  description,
  capabilities
}`;

export const getContactPageQuery = groq`*[_type == "contactPage"][0] {
  heroHeadline,
  heroSubtitle,
  contactInfoSubtitle
}`;
