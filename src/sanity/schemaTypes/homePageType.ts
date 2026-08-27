import {defineField, defineType} from 'sanity'

export const homePageType = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
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
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Background Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'highlightsHeadline',
      title: 'Highlights Headline',
      type: 'string',
    }),
    defineField({
      name: 'highlightsText',
      title: 'Highlights Text',
      type: 'text',
    }),
    defineField({
      name: 'highlightsImage',
      title: 'Highlights Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'ctaHeadline',
      title: 'Call to Action Headline',
      type: 'string',
    }),
    defineField({
      name: 'ctaSubtitle',
      title: 'Call to Action Subtitle',
      type: 'text',
    }),

  ],
})
