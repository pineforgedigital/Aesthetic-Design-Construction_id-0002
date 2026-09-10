import {defineField, defineType} from 'sanity'

export const siteSettingsType = defineType({
  name: 'siteSettings',
  title: 'Site Settings',
  type: 'document',
  groups: [
    {name: 'seo', title: 'SEO'},
  ],
  fields: [
    defineField({
      name: 'seo',
      title: 'Default SEO Settings',
      type: 'seo',
      group: 'seo',
      description: 'These SEO settings will be used as a fallback if a specific page does not have SEO settings defined.',
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
    }),
    defineField({
      name: 'contactPhone',
      title: 'Contact Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'instagramUrl',
      title: 'Instagram URL',
      type: 'url',
    }),
    defineField({
      name: 'facebookUrl',
      title: 'Facebook URL',
      type: 'url',
    }),
    defineField({
      name: 'footerText',
      title: 'Footer Text',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Service Area Address',
      type: 'text',
      description: 'The physical address or service area shown on the contact page.',
    }),
    defineField({
      name: 'businessHours',
      title: 'Business Hours',
      type: 'text',
      description: 'Hours shown on the contact page.',
    }),
    defineField({
      name: 'companyName',
      title: 'Company Name',
      type: 'string',
      description: 'Used in the Navbar and Footer',
    }),
    defineField({
      name: 'mainNavLinks',
      title: 'Main Navigation Links',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'label', title: 'Label', type: 'string' },
          { name: 'url', title: 'URL', type: 'string' }
        ]
      }]
    }),
    defineField({
      name: 'footerQuickLinks',
      title: 'Footer Quick Links',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'label', title: 'Label', type: 'string' },
          { name: 'url', title: 'URL', type: 'string' }
        ]
      }]
    }),
    defineField({
      name: 'footerLegalLinks',
      title: 'Footer Legal Links',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'label', title: 'Label', type: 'string' },
          { name: 'url', title: 'URL', type: 'string' }
        ]
      }]
    }),
    defineField({
      name: 'globalCtaHeadline',
      title: 'Global CTA Headline',
      type: 'string',
    }),
    defineField({
      name: 'globalCtaSubtitle',
      title: 'Global CTA Subtitle',
      type: 'text',
    }),
    defineField({
      name: 'globalCtaButtonText',
      title: 'Global CTA Button Text',
      type: 'string',
    }),
    defineField({
      name: 'globalCtaButtonUrl',
      title: 'Global CTA Button URL',
      type: 'string',
    }),
  ],
})
