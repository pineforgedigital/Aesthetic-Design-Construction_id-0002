import {defineField, defineType} from 'sanity'

export const aboutPageType = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  groups: [
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'storyHeadline',
      title: 'Story Headline',
      type: 'string',
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo',
      group: 'seo',
    }),
    defineField({
      name: 'storyText',
      title: 'Story Text',
      type: 'text',
    }),
    defineField({
      name: 'missionStatement',
      title: 'Mission Statement',
      type: 'text',
    }),
    defineField({
      name: 'coreValues',
      title: 'Core Values',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'processSubtitle',
      title: 'Process Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'coreValuesSubtitle',
      title: 'Core Values Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'ctaHeadline',
      title: 'Call to Action Headline',
      type: 'string',
    }),
  ],
})
