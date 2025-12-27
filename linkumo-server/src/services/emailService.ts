import config from '~/configs'

import { transporter } from '~/lib/nodemailer'

const emailService = {
  sendVerificationEmail: async (email: string, token: string) => {
    const url = `${config.CLIENT_URL}/verify-email?token=${token}`

    await transporter.sendMail({
      from: `"Linkumo" <${config.EMAIL_USER}>`,
      to: email,
      subject: 'Verify your email',
      html: `
            <h1>Verify your email</h1>
            <p>Click <a href="${url}">here</a> to verify your email</p>
          `
    })
  }
}

export default emailService
