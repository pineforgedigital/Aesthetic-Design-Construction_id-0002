import {defineField, defineType} from 'sanity'

export const projectType = defineType({
  name: 'project',
  title: 'Portfolio',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative text',
        }
      ]
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: '3D Rendering', value: '3D Rendering'},
          {title: 'Flooring', value: 'Flooring'},
          {title: 'Kitchen Remodeling', value: 'Kitchen Remodeling'},
          {title: 'Luxury Bathrooms', value: 'Luxury Bathrooms'},
          {title: 'Interior Design & Decorating', value: 'Interior Design & Decorating'},
          {title: 'Custom Tile Work', value: 'Custom Tile Work'},
          {title: 'Premium Countertops', value: 'Premium Countertops'},
          {title: 'Custom Pieces', value: 'Custom Pieces'},
          {title: 'Fireplaces', value: 'Fireplaces'},
          {title: 'Full Interior Remodeling', value: 'Full Interior Remodeling'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'clientName',
      title: 'Client Name (Optional)',
      type: 'string',
    }),
    defineField({
      name: 'completionDate',
      title: 'Completion Date',
      type: 'date',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'gallery',
      title: 'Image Gallery',
      type: 'array',
      of: [{type: 'image'}],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'mainImage',
    },
  },
})
