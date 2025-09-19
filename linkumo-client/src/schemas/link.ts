import z from 'zod'

export const LinkSchema = z.object({
  link: z.url('Invalid link'),
  description: z.string().min(2, 'Description is required'),
  tags: z.array(z.string())
})

export type Link = z.infer<typeof LinkSchema>
