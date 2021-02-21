import express from 'express'
import { getPost, getPostList, createPost } from '../controllers/postController.js'
import { tokenRequired } from '../middlewares/authMiddleware.js'

const postRoutes = express.Router()

postRoutes.route('/').post(tokenRequired, createPost)
postRoutes.route('/all').get(getPostList)
postRoutes.route('/:id').get(getPost)

export { postRoutes }