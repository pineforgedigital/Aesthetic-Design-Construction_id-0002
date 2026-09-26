import { defineField, defineType } from 'sanity'

export const portfolioPageType = defineType({
  name: 'portfolioPage',
  title: 'Portfolio Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      initialValue: 'Our Portfolio',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'string',
      initialValue: 'Recent Work',
    }),
    defineField({
      name: 'heroText',
      title: 'Hero Text',
      type: 'text',
      initialValue: 'Explore our recent remodeling and construction projects, highlighting our approach to quality building and practical design.',
    }),
    defineField({
      name: 'seo',
      title: 'SEO & Metadata',
      type: 'seo',
    }),
  ],
})
