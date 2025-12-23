import express from 'express'
import * as linkController from '~/controllers/linkController'
import * as authMiddleware from '~/middlewares/authMiddleware'

const router = express.Router()

router.get('/', authMiddleware.protect, linkController.getLinks)
router.get('/:id', authMiddleware.protect, linkController.getLink)
router.post('/', authMiddleware.protect, linkController.createLink)
router.put('/:id', authMiddleware.protect, linkController.updateLink)
router.delete('/:id', authMiddleware.protect, linkController.deleteLink)

export default router
