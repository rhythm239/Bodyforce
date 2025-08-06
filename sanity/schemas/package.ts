// sanity/schemas/package.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'package',
  title: 'Package',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'string',
      description: 'e.g., "₹6,50,000"',
    }),
    defineField({
      name: 'includedEquipment',
      title: 'Included Equipment',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of equipment included in this package.',
    }),
    defineField({
      name: 'imageGallery',
      title: 'Image Gallery',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    }),
  ],
})