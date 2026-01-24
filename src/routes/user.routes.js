import express from 'express'
import { handleUserSignup } from '../controllers/user.controllers.js'

const router = express.Router()


router.post('/signup', handleUserSignup)

export default router