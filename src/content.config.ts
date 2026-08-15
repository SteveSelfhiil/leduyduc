import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Shared shape for essays / poems / photos. Every field except `title` is
// optional, so a post can be as simple as a title + body, or as rich as a
// cover image with a caption and a gallery grid.
const postSchema = z.object({
  title: z.string(),
  tags: z.array(z.string()).default([]),
  order: z.number().optional(),
  excerpt: z.string().optional(),
  cover: z.string().optional(),
  coverCaption: z.string().optional(),
  coverAlt: z.string().optional(),
  gallery: z
    .array(
      z.union([
        z.string(),
        z.object({ src: z.string(), caption: z.string().optional() }),
      ])
    )
    .optional(),
});

const essays = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/essays' }),
  schema: postSchema,
});

const poems = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/poems' }),
  schema: postSchema,
});

const photos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/photos' }),
  schema: postSchema,
});

// Standalone pages: home, about, contact.
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = { essays, poems, photos, pages };
