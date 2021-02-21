import { asyncHandler } from '../asyncHandler.js'
import Post from '../schemas/postSchema.js'


const getPost = asyncHandler( async(req, res) => {
    const post = await Post.findById(req.params.id)
    if (!post) {
        res.status(404)
        throw new Error("The requested post id does not exist")

    }

    res.json(post)
})

const getPostList = asyncHandler( async(req, res) => {
    const posts = await Post.find({})
    if (!posts) {
        res.status(404)
        throw Error("Error while fetching posts")
    }

    res.json(posts)
})

const createPost = asyncHandler(async (req, res) => {
    if(Object.keys(req.body).length === 0) {
        res.status(400)
        throw new error("Bad request. Body is empty.")
    }

    const { title, content, tags } = req.body

    const post = await Post.create({
        author: req.userId,
        title,
        content,
        tags
    })
    
    if (post) {
        res.status(201).json(post)
    } else {
        res.status(400)
        throw new Error("Error while saving post data in database")
    }
})

export {
    getPost,
    getPostList,
    createPost
}