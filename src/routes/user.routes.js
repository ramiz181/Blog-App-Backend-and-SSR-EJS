import express from 'express'
import { handleUserLogin, handleUserLogout, handleUserSignup } from '../controllers/user.controllers.js'

const router = express.Router()

router.post('/signup', handleUserSignup)
router.post('/login', handleUserLogin)
router.get('/logout', handleUserLogout)

export default router