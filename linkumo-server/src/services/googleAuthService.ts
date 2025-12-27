import { OAuth2Client } from 'google-auth-library'

import config from '~/configs'

import errors from '~/constants/errors'
import { ErrorResponse, ErrorStatusCode } from '~/types/error.types'

const client = new OAuth2Client(config.GOOGLE_CLIENT_ID)

export interface GoogleUserInfo {
  id: string
  email: string
  name: string
  picture?: string
  email_verified: boolean
}

const googleAuthService = {
  verifyIdToken: async (idToken: string): Promise<GoogleUserInfo> => {
    try {
      const ticket = await client.verifyIdToken({
        idToken,
        audience: config.GOOGLE_CLIENT_ID
      })

      const payload = ticket.getPayload()

      if (!payload) {
        throw new ErrorResponse(errors.INVALID_GOOGLE_TOKEN, ErrorStatusCode.UNAUTHORIZED)
      }

      return {
        id: payload.sub,
        email: payload.email!,
        name: payload.name!,
        picture: payload.picture,
        email_verified: payload.email_verified || false
      }
    } catch (_) {
      throw new ErrorResponse(errors.GOOGLE_AUTH_FAILED, ErrorStatusCode.UNAUTHORIZED)
    }
  }
}

export default googleAuthService
