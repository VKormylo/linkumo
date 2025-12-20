import z from 'zod'

export const LinkSchema = z.object({
  link: z.url('Invalid link'),
  title: z.string().min(2, 'Title is required'),
  tags: z.array(z.string())
})

export type Link = z.infer<typeof LinkSchema>
