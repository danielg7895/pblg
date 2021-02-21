import jwt from 'jsonwebtoken'

const getToken = (userId) => {
    // todo: find a proper way to handle the refresh token process, for ex -> https://stackoverflow.com/questions/27726066/jwt-refresh-token-flow
    return jwt.sign({userId}, process.env.JWT_SECRET, {expiresIn: "90d"})
}

const getUserIdFromToken = (token) => {
    const data = jwt.verify(token, process.env.JWT_SECRET)
    //console.log(data)
    return data.userId
}

export { getToken, getUserIdFromToken}