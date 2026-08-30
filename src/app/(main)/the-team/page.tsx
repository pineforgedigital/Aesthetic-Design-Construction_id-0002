import { client } from "@/sanity/client";
import { getTeamMembersQuery, getSiteSettingsQuery } from "@/sanity/queries";
import { Metadata } from "next";
import TeamClient from "./TeamClient";

export async function generateMetadata(): Promise<Metadata> {
  const settingsData = await client.fetch(getSiteSettingsQuery)

  const title = "The Team | Aesthetic Design & Construction"
  const description = "Meet the expert designers and builders at Aesthetic Design & Construction."
  const image = settingsData?.seo?.openGraphImage

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: image ? [{ url: image }] : [],
    }
  }
}

export const revalidate = 60; // Revalidate every 60 seconds

export default async function TeamPage() {
  const TEAM_MEMBERS = await client.fetch(getTeamMembersQuery);
  return <TeamClient teamMembers={TEAM_MEMBERS} />;
}
