import { verifyToken } from "../services/auth.service.js"

export const Authentication = (req, res, next) => {
    const token = req.cookies?.token

    if (!token) return res.redirect('/login?error=Please login')
    const user = verifyToken(token)
    if (!user) return res.status(401).redirect('/login?error=Unauthorize user')

    req.user = user
    next()
}
export const optionalAuth = (req, res, next) => {
    const token = req.cookies?.token
    if (token) {
        const user = verifyToken(token)
        if (user) {
            req.user = user
        }
    }
    next()
}