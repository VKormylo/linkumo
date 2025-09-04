import { Secret, SignOptions } from 'jsonwebtoken'

const config = {
  SERVER_PORT: process.env.SERVER_PORT,
  NODE_ENV: process.env.NODE_ENV,
  JWT_ACCESS_TOKEN_SECRET: process.env.JWT_ACCESS_TOKEN_SECRET as Secret,
  JWT_REFRESH_TOKEN_SECRET: process.env.JWT_REFRESH_TOKEN_SECRET as Secret,
  JWT_VERIFICATION_TOKEN_SECRET: process.env.JWT_VERIFICATION_TOKEN_SECRET as Secret,
  JWT_ACCESS_TOKEN_LIFETIME: process.env.JWT_ACCESS_TOKEN_LIFETIME as SignOptions['expiresIn'],
  JWT_REFRESH_TOKEN_LIFETIME: process.env.JWT_REFRESH_TOKEN_LIFETIME as SignOptions['expiresIn'],
  JWT_VERIFICATION_TOKEN_LIFETIME: process.env.JWT_VERIFICATION_TOKEN_LIFETIME as SignOptions['expiresIn'],
  JWT_EXPIRES_IN: process.env.JWT_EXPIRES_IN,
  JWT_COOKIE_EXPIRES_IN: process.env.JWT_COOKIE_EXPIRES_IN,
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_APP_PASSWORD: process.env.EMAIL_APP_PASSWORD,
  CLIENT_URL: process.env.CLIENT_URL
}

export default config
