import { Col, Row, Container } from 'react-bootstrap'
import {useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
//import { Link } from 'react-dom'
//import { Avatar } from '../components/Avatar'
import { getPost } from '../actions/postActions'
import { getUserById } from '../actions/userActions'

import React from 'react'

const PostScreen = () => {
    const [user, setUser] = useState(null)
    const [post, setPost] = useState(null) 
    
    // getting post id from current url
    const {id: postId} = useParams() 
    
    useEffect(() => {
        if (!post) {
            const fetchPost = async () => {
                const post = await getPost(postId)
                setPost(post)
                console.log(post)

                const user = await getUserById(post.author_id)
                setUser(user)
                console.log(JSON.stringify(user))
            }
            fetchPost()
        }


    }, [user, post, postId])


    return (
        <Container>
            <p>{user ? user.nickname : ""}</p>
            <Row>
            <Col>

            </Col>

            <Col>
            </Col>

            </Row>

        </Container>
    )
}

export default PostScreen
