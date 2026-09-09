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
      name: 'storyImage',
      title: 'Story Image (Portrait)',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'seo',
      title: 'SEO Settings',
      type: 'seo',
      group: 'seo',
    }),
    defineField({
      name: 'storyParagraphs',
      title: 'Story Paragraphs',
      type: 'array',
      of: [{type: 'text'}],
    }),
    defineField({
      name: 'missionStatement',
      title: 'Mission Statement',
      type: 'text',
    }),
    defineField({
      name: 'processSubtitle',
      title: 'Process Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'processSteps',
      title: 'Process Steps',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'desc', title: 'Description', type: 'text' },
            { name: 'iconName', title: 'Icon Name (e.g. Compass, PenTool)', type: 'string' }
          ]
        }
      ]
    }),
    defineField({
      name: 'coreValuesSubtitle',
      title: 'Core Values Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'coreValuesList',
      title: 'Core Values List',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'desc', title: 'Description', type: 'text' },
            { name: 'iconName', title: 'Icon Name (e.g. ShieldCheck)', type: 'string' }
          ]
        }
      ]
    }),
    defineField({
      name: 'ctaHeadline',
      title: 'Call to Action Headline',
      type: 'string',
    }),
  ],
})
