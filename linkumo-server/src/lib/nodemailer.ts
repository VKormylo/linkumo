import nodemailer from 'nodemailer'
import config from '~/configs'

export const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: config.EMAIL_USER,
    pass: config.EMAIL_APP_PASSWORD
  }
})
