import React, {useState, useEffect } from 'react'
import { Form, Button, Container } from 'react-bootstrap'
import { login } from '../actions/userActions'

const LoginScreen = ({history}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    var userData = JSON.parse(localStorage.getItem("userData"))

    const submitHandler = async (e) => {
        e.preventDefault()

        await login(email, password)
        window.location.reload() // reload to trigger the useEffect redirect
    }

    useEffect(() => {
        // redirect to home page if im alredy logged
        // should change userData.user for a token and verify if the token its not expired or something like that
        if (userData && userData.user) { 
            history.push('/')
        } 
    }, [history, userData])

    return (
        <div>
            <Container>
            <Form onSubmit={submitHandler}>

                <Form.Group controlId="email">
                    <Form.Label >Email</Form.Label>
                    <Form.Control type="email" placeholder="enter email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label >Password</Form.Label>
                    <Form.Control type="password" placeholder="enter password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>

                <Button type="submit">Submit</Button>

            </Form>
            </Container>
        </div>
    )
}

export default LoginScreen
