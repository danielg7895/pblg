import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
//import {Container} from 'react-bootstrap'
import Post from '../components/Post'
import { getPostList } from '../actions/postActions'

function HomeScreen() {
    
    const postList = useSelector(state => state.listPostReducer)
    const { loading, error, posts } = postList

    const dispatch = useDispatch()


    useEffect( () => {
        console.log("hey")
        dispatch(getPostList())

    }, [dispatch])


    return (
        <div className="my-2">
            { 
            loading ?
                <p>Loading</p>
            : error ?
                <p>{error}</p>
            : posts.map(post => (
                    <Post post={post} key={post._id}/>
                ))
            }
        </div>
    )
}

export default HomeScreen
