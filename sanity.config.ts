import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schema} from './src/sanity/schemaTypes'

// Use environment variables or fallback values for local development
const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'your-project-id'
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

const singletonActions = new Set(["publish", "discardChanges", "restore"])
const singletonTypes = new Set(["homePage", "aboutPage", "servicesPage", "contactPage", "siteSettings"])

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema: {
    types: schema.types,
    templates: (templates) =>
      templates.filter(({ schemaType }) => !singletonTypes.has(schemaType)),
  },
  document: {
    actions: (input, context) =>
      singletonTypes.has(context.schemaType)
        ? input.filter(({ action }) => action && singletonActions.has(action))
        : input,
  },
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title("Content")
          .items([
            // Singleton items
            S.listItem()
              .title("Home")
              .id("homePage")
              .child(S.document().schemaType("homePage").documentId("homePage")),
            S.listItem()
              .title("Our Story")
              .id("aboutPage")
              .child(S.document().schemaType("aboutPage").documentId("aboutPage")),
            S.listItem()
              .title("Services")
              .id("servicesPage")
              .child(S.document().schemaType("servicesPage").documentId("servicesPage")),
            S.listItem()
              .title("Contact")
              .id("contactPage")
              .child(S.document().schemaType("contactPage").documentId("contactPage")),
            S.listItem()
              .title("Site Settings")
              .id("siteSettings")
              .child(S.document().schemaType("siteSettings").documentId("siteSettings")),

            // Regular document types
            S.divider(),
            ...S.documentTypeListItems().filter(
              (listItem) => !singletonTypes.has(listItem.getId() as string)
            ),
          ]),
    }),
  ],
})
