import { defineCollection, z } from 'astro:content';

import { glob, file } from 'astro/loaders';

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    collection: z.string(),
    description: z.string(),
    image: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional()
  })
});

export const collections = { blog };