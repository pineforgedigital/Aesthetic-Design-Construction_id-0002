import {defineField, defineType, Rule} from 'sanity'

export const project = defineType({
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Kitchen', value: 'kitchen'},
          {title: 'Bath', value: 'bath'},
          {title: 'Flooring', value: 'flooring'},
          {title: 'Small Projects', value: 'small-projects'},
          {title: 'Rendering', value: 'rendering'},
        ],
      },
      validation: (rule: Rule) => rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{type: 'image'}],
      options: {
        layout: 'grid',
      },
    }),
  ],
})
