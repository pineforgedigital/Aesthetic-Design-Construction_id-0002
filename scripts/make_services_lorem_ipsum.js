const { createClient } = require('next-sanity');

const client = createClient({
  projectId: 'uvfvl0gt',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2024-01-01',
  token: 'skPjpmWhvvLIekk4i6oaFHV4XkMWyDO2egGKrDD1xbvCo5LQ5XlEBh85g1SIJslmUt0ObRvxfupwGskLdmHouP7MDsr5UCpCZ6f193LrHgSkCWUYNoGAaNkksDIICmqC7CQj65IHGNI0mOViYTQZNTh2T1C6yrkKbk1wbueh5RSfiorxgs7V'
});

async function main() {
  const loremDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
  
  const loremCapabilities = [
    "Lorem ipsum dolor sit amet",
    "Consectetur adipiscing elit",
    "Sed do eiusmod tempor incididunt",
    "Ut labore et dolore magna aliqua"
  ];

  console.log('Fetching all services...');
  const services = await client.fetch(`*[_type == "service"]`);
  
  for (const service of services) {
    console.log(`Patching ${service.serviceName}...`);
    await client.patch(service._id)
      .set({
        description: loremDescription,
        capabilities: loremCapabilities
      })
      .commit();
  }
  
  console.log('Successfully updated all services to Lorem Ipsum!');
}

main().catch(console.error);
