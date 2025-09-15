import z from 'zod'

export const UserSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'Name must be at least 2 characters long')
    .max(20, 'Name must be less than 20 characters long')
    .regex(
      /^[a-zA-Z '.-]*$/,
      'Name can only contain letters, spaces, hyphens, and apostrophes'
    ),
  email: z.email('Invalid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters long'),
  rememberMe: z.boolean()
})

export type User = z.infer<typeof UserSchema>
