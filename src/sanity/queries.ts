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
  "heroImage": heroImage.asset->url
}`;

export const getAboutPageQuery = groq`*[_type == "aboutPage"][0] {
  storyHeadline,
  storyText,
  missionStatement,
  coreValues
}`;

export const getSiteSettingsQuery = groq`*[_type == "siteSettings"][0] {
  contactEmail,
  contactPhone,
  instagramUrl,
  facebookUrl,
  footerText
}`;
