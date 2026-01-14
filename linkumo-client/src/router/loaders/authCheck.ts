import { redirect } from 'react-router-dom'

import { authService } from '~/services/auth-service'

export const authCheck = async () => {
  try {
    await authService.refresh()
    return null
  } catch {
    throw redirect('/auth/signup')
  }
}
