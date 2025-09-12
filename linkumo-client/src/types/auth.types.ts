import type { User } from '~/schemas/user'

export interface UserResponse {
  user: User
}

export interface AccessTokenResponse {
  accessToken: string
}

export interface LoginResponse extends UserResponse, AccessTokenResponse {}
