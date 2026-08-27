import { defineField, defineType } from 'sanity'

export const seoType = defineType({
  name: 'seo',
  title: 'SEO Settings',
  type: 'object',
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
      description: 'The title that appears in search engines and browser tabs.',
      validation: (Rule) => Rule.max(60).warning('Longer titles may be truncated by search engines'),
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
      description: 'The description that appears in search engines.',
      validation: (Rule) => Rule.max(160).warning('Longer descriptions may be truncated by search engines'),
    }),
    defineField({
      name: 'openGraphImage',
      title: 'Social Sharing Image (OpenGraph)',
      type: 'image',
      description: 'The image that appears when this page is shared on social media (Facebook, Twitter, LinkedIn, etc.)',
      options: {
        hotspot: true,
      },
    }),
  ],
})
