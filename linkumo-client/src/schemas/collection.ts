import z from 'zod'

export const CollectionSchema = z.object({
  title: z.string().min(2, 'Title is required!'),
  description: z.string().min(2, 'Description is required'),
  tags: z.array(z.string())
})

export type Collection = z.infer<typeof CollectionSchema>
