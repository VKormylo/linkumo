import type { User } from '~/schemas/user'

export enum AuthActionEnum {
  signup = 'signup',
  login = 'login'
}

export interface AuthOutletContext {
  signInWithGoogle: () => void
}

export interface UserResponse {
  user: User
}

export interface AccessTokenResponse {
  accessToken: string
}

export interface LoginResponse extends UserResponse, AccessTokenResponse {}
