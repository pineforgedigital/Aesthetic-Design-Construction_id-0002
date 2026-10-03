import { createClient } from 'next-sanity';
const client = createClient({ projectId: 'uvfvl0gt', dataset: 'production', useCdn: false, apiVersion: '2024-01-01' });

client.fetch('*[_type in ["siteSettings", "homePage", "page"]] { _type, _id, title, seo }').then(res => console.log(JSON.stringify(res, null, 2)));
