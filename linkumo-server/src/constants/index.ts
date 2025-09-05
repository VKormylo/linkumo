import { CookieOptions } from 'express'

export const ROOT: string = '/api'
export const BCRYPT_SALT_ROUNDS: number = 12
export const JWT_REFRESH_COOKIE_LIFETIME: number = 60 * 60 * 24 * 30 * 1000
export const REFRESH_TOKEN_COOKIE_NAME: string = 'refreshToken'

export const COOKIE_OPTIONS: CookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
  path: '/'
} as const
