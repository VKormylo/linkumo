import type { UserLogin, UserSignup } from '~/schemas/auth'
import type { LoginResponse } from '~/types/auth.types'
import { URLs } from '~/constants/request'
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
  verifyEmail: (token: string) => {
    return baseService.request<void>({
      method: 'GET',
      url: `${URLs.auth.verifyEmail}?token=${token}`
    })
  }
}
