import { BlogUser } from "../models/user.model.js"
import { generateToken } from "../services/auth.service.js"

export const handleUserSignup = async (req, res) => {
    const { fullName, email, password } = req.body
    await BlogUser.create({
        fullName,
        email,
        password
    })
    res.status(201).redirect('/login')
}

export const handleUserLogin = async (req, res) => {
    const { email, password } = req.body
    try {
        const User = await BlogUser.AuthenticateUser(email, password)
        // console.log("Controller user", User);
        const token = generateToken(User)
        return res.cookie('token', token).status(200).redirect('/')
    } catch (error) {
        console.log(error);
        res.render('login', {
            error
        })
    }
}