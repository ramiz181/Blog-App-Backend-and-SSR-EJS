import jwt from 'jsonwebtoken'


export const generateToken = (user) => {
    return jwt.sign({
        _id: user._id,
        email: user.email,
        role: user.role,
        profileImageURL: user.profileImageURL
    }, process.env.JWTSECRETKEY)
}

export const verifyToken = (token) => {
    try {
        return jwt.verify(token, process.env.JWTSECRETKEY)
    } catch (error) {
        console.log("JWT error", error);
    }
}