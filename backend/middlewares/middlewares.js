
const errorMiddleware = (err, req, res, next) => {
    // middleware for unhandled errors
    
    res.json({
        error: {
            status: res.statusCode || 500,
            message: err.message
        }
    })
    
    next()
}

const requestMiddleware = (req, res, next) => {
    next()
}


export { errorMiddleware, requestMiddleware }