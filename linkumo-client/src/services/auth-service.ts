import type { UserSignup } from '~/schemas/auth'
import { baseService } from './base-service'
import { URLs } from '~/constants/request'

export const authService = {
  signup: (user: UserSignup) => {
    return baseService.request({
      data: user,
      method: 'POST',
      url: URLs.auth.signup
    })
  }
}
