import User from '../schemas/userSchema.js'
import { asyncHandler } from '../asyncHandler.js'
import { getToken } from '../utils/userToken.js'

const login = asyncHandler(async(req, res) => {
    // TODO -> add login from username also
    const { email, password } = req.body
    const user = await User.findOne({email})

    if (user && user.password === password) {
        res.json({
            username: user.username,
            nickname: user.nickname,
            description: user.description,
            email: user.email,
            isAdmin: user.isAdmin, // i don't know if i should return this...
            token: getToken(user._id)
        })
    } else {
        res.status(401)
        throw new Error("Invalid username or password.")
    }
})

const register = asyncHandler(async (req, res) => {

    if(Object.keys(req.body).length === 0) {
        res.status(400)
        throw new Error("Bad request. Body is empty.")
    }
    
    const {username, nickname, email, password} = req.body

    const user = await User.findOne({ 
        $or: [
            {email}, 
            {username}
        ]
    })
    if (user) {
        let resp = {error: {status: 400, message: {}}}
        if (user.username === username) {
            resp.error.message.username = "username already exists"
        }
        else if(user.email === email) {
            resp.error.message.email = "email already exists"
        }
        return res.status(400).json(resp)
    } 

    const newUser = await User.create({
        username,
        email,
        password,
        nickname
    })

    if (newUser) {
        res.status(200).json({
            username,
            email,
            nickname,
            token: ""
        })
    } else {
        res.status(400)
        throw new Error("Error while registering user in database")
    }
})

const getUser = (req, res) => {
    const { id } = req.params

    const user = User.findById(id).select('-password')

    if (user) {
        res.json(user)
    }
    else {
        res.status(404)
        throw new Error("User not found")
    }
}

export {
    login,
    register,
    getUser
}