import React, { useState, useEffect } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import {createPost} from '../actions/postActions.js'

const AddPostScreen = ({history}) => {
    const [content, setContent] = useState('')
    const [title, setTitle] = useState('')
    const [tags, setTags] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        createPost({title, content, tags})
    }

    useEffect(() => {
        console.log(content)
        console.log(title)
    }, [content, title])


    return (
        <Container>
            <Form onSubmit={submitHandler}>
                <Form.Group controlId="postTitle">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type='text' placeholder='Enter a title' value={title} onChange={e => setTitle(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group controlId="postBody">
                    <Form.Label>Body</Form.Label>
                    <Form.Control as='textarea' row={10} value={content} onChange={ e => setContent(e.target.value)}></Form.Control>
                </Form.Group>

                <Form.Group controlId="postTags">
                    <Form.Label>Tags</Form.Label>
                    <Form.Control type='text' placeholder='Enter tags separated from comma' value={tags} onChange={e=> setTags(e.target.value)}></Form.Control>
                </Form.Group>

                <Button variant="primary" type="submit">Post</Button>

            </Form>


        </Container>
    )
}

export default AddPostScreen
