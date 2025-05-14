import express from 'express'
import * as loginController from '../controller/loginController.js'

const router = express.Router()

router.get('/', (req, res) => {
  res.render('login', {
    title: 'Login Admin',
    layout: 'layouts/main',
  })
})
router.post('/login', loginController.login)
router.post('/signUp', loginController.SignUp)


export default router