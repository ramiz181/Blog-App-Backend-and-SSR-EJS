import { BlogUser } from "../models/user.model.js"

export const handleUserSignup = async (req, res) => {
    const { fullName, email, password } = req.body
    await BlogUser.create({
        fullName,
        email,
        password
    })
    res.redirect('/login')

}

export const handleUserLogin = async (req, res) => {
    const { email, password } = req.body

    const isMatch = await BlogUser.matchPassword(email, password)

    res.redirect('/')
}