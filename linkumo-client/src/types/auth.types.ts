import type { User } from '~/schemas/user'

export interface UserResponse {
  user: User
}

export interface LoginResponse extends UserResponse {
  accessToken: string
}
