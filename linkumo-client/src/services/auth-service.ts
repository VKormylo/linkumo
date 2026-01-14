import { URLs } from '~/constants/request'
import type { UserLogin, UserSignup } from '~/schemas/auth'
import type { AccessTokenResponse, LoginResponse } from '~/types/auth.types'

import { baseService } from './base-service'

export const authService = {
  signup: (user: UserSignup) => {
    return baseService.request<void>({
      data: user,
      method: 'POST',
      url: URLs.auth.signup
    })
  },
  login: (user: UserLogin) => {
    return baseService.request<LoginResponse>({
      data: user,
      method: 'POST',
      url: URLs.auth.login
    })
  },
  logout: () => {
    return baseService.request<void>({
      method: 'GET',
      url: URLs.auth.logout
    })
  },
  refresh: () => {
    return baseService.request<AccessTokenResponse>({
      method: 'GET',
      url: URLs.auth.refresh
    })
  },
  verifyEmail: (token: string) => {
    return baseService.request<void>({
      method: 'GET',
      url: `${URLs.auth.verifyEmail}?token=${token}`
    })
  },
  googleLogin: (idToken: string) => {
    return baseService.request<LoginResponse>({
      data: { idToken },
      method: 'POST',
      url: URLs.auth.googleLogin
    })
  }
}
