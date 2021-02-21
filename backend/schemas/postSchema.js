import mongoose from 'mongoose'

const { Schema } = mongoose

const postSchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    content: {
        type: String,
        required: true
    },
    tags: {
        type: [String]
    },
    num_comments: {
        type: Number,
        default: 0
    },
    claps: {
        type: Number,
        default: 0
    },
    title: {
        type: String,
        required: true
    },
    post_image: {
        type: String,
    },
    creationDate: {
        type: Date,
        default: Date.now
    }
})

const Post = mongoose.model('Post', postSchema)
 
export default Post