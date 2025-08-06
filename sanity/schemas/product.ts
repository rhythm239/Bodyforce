// sanity/schemas/product.ts
import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'product',
  title: 'Product',
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
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: {type: 'category'},
    }),
    defineField({
        name: 'description',
        title: 'Description',
        type: 'text',
    }),
    defineField({
        name: 'specifications',
        title: 'Specifications',
        type: 'array',
        of: [{type: 'block'}]
    }),
    defineField({
      name: 'imageGallery',
      title: 'Image Gallery',
      type: 'array',
      of: [{type: 'image', options: {hotspot: true}}],
    }),
  ],
})