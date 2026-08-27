import {defineField, defineType} from 'sanity'

export const aboutPageType = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'storyHeadline',
      title: 'Story Headline',
      type: 'string',
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
  ],
})
