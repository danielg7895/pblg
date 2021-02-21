import express from 'express'
import { login, getUser, register } from '../controllers/userController.js'

const userRoutes = express.Router()

userRoutes.post('/login', login)
userRoutes.route('/register').post(register)
userRoutes.route('/:id').get(getUser)

export { userRoutes }