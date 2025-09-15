import { Response } from 'express'
import jwt, { JwtPayload, Secret } from 'jsonwebtoken'
import config from '~/configs'
import { COOKIE_OPTIONS, JWT_REFRESH_COOKIE_LIFETIME, REFRESH_TOKEN_COOKIE_NAME } from '~/constants'

const tokenService = {
  generateAccessToken: (id: string) => {
    return jwt.sign({ id }, config.JWT_ACCESS_TOKEN_SECRET, {
      expiresIn: config.JWT_ACCESS_TOKEN_LIFETIME
    })
  },

  generateRefreshToken: (id: string) => {
    return jwt.sign({ id }, config.JWT_REFRESH_TOKEN_SECRET, {
      expiresIn: config.JWT_REFRESH_TOKEN_LIFETIME
    })
  },

  generateVerificationToken: (id: string) => {
    return jwt.sign({ id }, config.JWT_VERIFICATION_TOKEN_SECRET, {
      expiresIn: config.JWT_VERIFICATION_TOKEN_LIFETIME
    })
  },

  verifyToken: (token: string, secret: Secret) => {
    return jwt.verify(token, secret) as JwtPayload
  },

  retrieveToken: (header: string | undefined) => {
    if (!header) return undefined

    return header.split(' ')[1]
  },

  setRefreshTokenCookie: (res: Response, token: string, isSession: boolean) => {
    const defaultOptions = { ...COOKIE_OPTIONS }

    if (!isSession) {
      defaultOptions.expires = new Date(Date.now() + JWT_REFRESH_COOKIE_LIFETIME)
    }

    res.cookie(REFRESH_TOKEN_COOKIE_NAME, token, defaultOptions)
  }
}

export default tokenService
