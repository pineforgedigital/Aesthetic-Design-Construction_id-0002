import { createClient } from 'next-sanity'
import dotenv from 'dotenv'

dotenv.config({ path: '.env.local' })

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
  apiVersion: '2024-01-01',
  useCdn: false,
})

async function run() {
  const docs = await client.fetch('*')
  const str = JSON.stringify(docs).toLowerCase()
  if (str.includes('under construction')) {
    console.log('Found "under construction" in Sanity!')
    docs.forEach((doc: any) => {
      if (JSON.stringify(doc).toLowerCase().includes('under construction')) {
        console.log('Document type:', doc._type, 'ID:', doc._id)
        console.log(JSON.stringify(doc, null, 2))
      }
    })
  } else {
    console.log('No "under construction" found in entire Sanity dataset.')
  }
}

run().catch(console.error)
