import { client } from "../src/sanity/client";
async function run() {
  const data = await client.fetch('*[_type == "servicesPage"][0]{materialsHeadline}');
  console.log(JSON.stringify(data));
}
run();
