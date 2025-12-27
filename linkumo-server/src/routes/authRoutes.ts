import express from 'express'

import * as authController from '~/controllers/authController'
import * as emailController from '~/controllers/emailController'

const router = express.Router()

router.post('/signup', authController.signup)
router.post('/login', authController.login)
router.post('/google', authController.googleLogin)
router.get('/logout', authController.logout)
router.get('/refresh', authController.refresh)
router.get('/verify-email', emailController.verifyEmail)

export default router
