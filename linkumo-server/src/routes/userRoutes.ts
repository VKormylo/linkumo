import express from 'express'

import * as userController from '~/controllers/userController'
import * as authMiddleware from '~/middlewares/authMiddleware'

const router = express.Router()

router.get('/', authMiddleware.protect, userController.getUsers)

export default router
