import { defineType, defineField } from 'sanity';

export default defineType({
  name: 'promo',
  title: 'Promotion',
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
      name: 'badge',
      title: 'Badge Text',
      type: 'string',
      description: 'e.g., "30% OFF" or "NEW"',
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
      name: 'startDate',
      title: 'Start Date',
      type: 'datetime',
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'datetime',
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
    }),
  ],
});
