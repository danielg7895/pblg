import React from 'react'
import { Card } from 'react-bootstrap'

const Avatar = ( user ) => {
    return (
        <Card>
            <Card.Title><strong>{user.nickname}</strong></Card.Title>
            <Card.Img src={user.avatar} />
        </Card>  
    )
}

export default Avatar
