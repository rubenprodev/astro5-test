import { z, defineCollection } from "astro:content";

const books = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.string(),
    author: z.string(),
    img: z.string(),
    description: z.string(),
    buy: z.object({
      spain: z.string().url(),
      row: z.string().url(),
    }),
    tags: z.array(z.string()),
  }),
});

export const collections = { books };
