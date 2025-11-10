import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'menuItem',
  title: 'Menu Item',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'object',
      fields: [
        { name: 'ar', title: 'Arabic', type: 'string' },
        { name: 'en', title: 'English', type: 'string' },
        { name: 'sv', title: 'Swedish', type: 'string' },
      ],
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title.en',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'object',
      fields: [
        { name: 'ar', title: 'Arabic', type: 'text' },
        { name: 'en', title: 'English', type: 'text' },
        { name: 'sv', title: 'Swedish', type: 'text' },
      ],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price (SEK)',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'allergens',
      title: 'Allergens',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Gluten', value: 'gluten' },
          { title: 'Dairy', value: 'dairy' },
          { title: 'Nuts', value: 'nuts' },
          { title: 'Sesame', value: 'sesame' },
          { title: 'Soy', value: 'soy' },
        ],
      },
    }),
    defineField({
      name: 'halal',
      title: 'Halal',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'vegetarian',
      title: 'Vegetarian',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'featured',
      title: 'Featured Item',
      type: 'boolean',
      description: 'Show on home page',
      initialValue: false,
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      validation: (Rule) => Rule.required().min(0),
    }),
  ],
  orderings: [
    {
      title: 'Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
});
