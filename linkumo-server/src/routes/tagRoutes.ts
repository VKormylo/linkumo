import express from 'express'

import * as tagController from '~/controllers/tagController'
import * as authMiddleware from '~/middlewares/authMiddleware'

const router = express.Router()

router.get('/', authMiddleware.protect, tagController.getTags)
router.get('/:id', authMiddleware.protect, tagController.getTag)
router.post('/', authMiddleware.protect, tagController.createTag)
router.put('/:id', authMiddleware.protect, tagController.updateTag)
router.delete('/:id', authMiddleware.protect, tagController.deleteTag)

export default router
