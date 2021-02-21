import React, { useState, useEffect } from 'react'
//import {Container} from 'react-bootstrap'
import Post from '../components/Post'
import { getPostList } from '../actions/postActions'

function HomeScreen() {
    const [post, setPost] = useState(null)

    useEffect( () => {
        const fetchPosts = async () => {
            const post = await getPostList()
            setPost(post)
        }
        fetchPosts()

    }, [])


    return (
        <div className="my-2">
            {post ? 
                post.map(post => (
                    <Post post={post} key={post._id}/>
                )) : <p>Loading</p>
            }
        </div>
    )
}

export default HomeScreen
