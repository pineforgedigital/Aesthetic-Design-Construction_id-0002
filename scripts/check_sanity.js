const { createClient } = require('next-sanity');

const client = createClient({
  projectId: 'uvfvl0gt',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01'
});

async function main() {
  const projects = await client.fetch('*[_type == "project"]');
  const teamMembers = await client.fetch('*[_type == "teamMember"]');
  console.log('Projects count:', projects.length);
  console.log('Team Members count:', teamMembers.length);
}

main().catch(console.error);
