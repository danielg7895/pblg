import jwt from 'jsonwebtoken'
import User from '../schemas/userSchema.js'
import { asyncHandler } from '../asyncHandler.js'
import colors from 'colors'

const tokenRequired = asyncHandler(async(req, res, next) => {

    let token;
    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
        try {
            token = req.headers.authorization.split("Bearer ")[1] // probably this will fail if 'bearer' is in lowercase
            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            
            // adding the user id in the request
            req.userId = decoded.userId 

            next()
        } catch(error) {
            console.error(colors.red(error))
            res.status(401)
            throw new Error('Not authorized, token failed') // calling errorMiddleware 
        }
    }

    if (!token) {
        res.status(401)
        throw new Error('No token provided.') // calling errorMiddleware 
    }
})

export {
    tokenRequired
}