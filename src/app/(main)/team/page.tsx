import { client } from "@/sanity/client";
import { getTeamMembersQuery } from "@/sanity/queries";
import TeamClient from "./TeamClient";

export const revalidate = 60; // Revalidate every 60 seconds

export default async function TeamPage() {
  const TEAM_MEMBERS = await client.fetch(getTeamMembersQuery);
  return <TeamClient teamMembers={TEAM_MEMBERS} />;
}
