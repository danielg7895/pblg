import mongoose from 'mongoose'

const { Schema } = mongoose

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    nickname: {
        type: String,
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    avatar: {
        type: String,
        default: "" // todo => add default avatar
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    registrationDate: {
        type: Date,
        default: Date.now
    }
})

const User = mongoose.model('User', userSchema)

export default User