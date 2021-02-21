import React from 'react'
import { Media } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Post = ( { post }) => {

    return (
        <div className="border">
            <Media>
            <Link to={`/post/${post.id}/${post.title}`}>
                <img variant='bottom' className="mr-3 rounded-left" height={100} width={120} src={post.post_image} alt={post.title}/>
            </Link>

                <Media.Body>
                    <Link to={`/post/${post.id}/${post.title}`}><h5>{post.title}</h5></Link>
                    <p>
                        {post.content}
                    </p>
                </Media.Body>
            </Media>
        </div>
    )
}

export default Post
