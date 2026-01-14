import z from 'zod'

import { UserSchema } from './user'

export const UserSignupSchema = UserSchema.omit({ rememberMe: true })
export const UserLoginSchema = UserSchema.omit({ name: true })

export type UserSignup = z.infer<typeof UserSignupSchema>
export type UserLogin = z.infer<typeof UserLoginSchema>
