import {defineField, defineType} from 'sanity'

export const servicesPageType = defineType({
  name: 'servicesPage',
  title: 'Services Page',
  type: 'document',
  groups: [
    {name: 'content', title: 'Content'},
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo',
      group: 'seo',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      group: 'content',
    }),
    defineField({
      name: 'ctaHeadline',
      title: 'Call to Action Headline',
      type: 'string',
    }),
    defineField({
      name: 'materialsHeadline',
      title: 'Materials Headline',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'materialsText',
      title: 'Materials Text',
      type: 'text',
      group: 'content',
    }),
    defineField({
      name: 'materialsImage',
      title: 'Materials Image',
      type: 'image',
      options: { hotspot: true },
      group: 'content',
    }),
    defineField({
      name: 'craftsmanshipHeadline',
      title: 'Craftsmanship Headline',
      type: 'string',
      group: 'content',
    }),
    defineField({
      name: 'craftsmanshipText',
      title: 'Craftsmanship Text',
      type: 'text',
      group: 'content',
    }),
    defineField({
      name: 'craftsmanshipText2',
      title: 'Craftsmanship Second Paragraph',
      type: 'text',
      group: 'content',
    }),
    defineField({
      name: 'craftsmanshipImage',
      title: 'Craftsmanship Image',
      type: 'image',
      options: { hotspot: true },
      group: 'content',
    }),
  ],
})
