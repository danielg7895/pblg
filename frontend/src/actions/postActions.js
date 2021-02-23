import axios from 'axios'

export const getPost =  (id) => async (dispatch, getState) => {

    dispatch({type: "GET_POST_REQUEST"})

    const headers = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        const res = await axios.get(`/api/post/${id}`, headers)

        dispatch({
            type: "GET_POST_SUCCESS",
            payload: res.data
        })

        return res.data

    } catch (error) {
        dispatch({ type: "GET_POST_FAIL", payload: error.message})
    }
}

export const getPostList =  () => async (dispatch, getState) => {
    console.log("getPostList")

    dispatch({ type: "LIST_POST_REQUEST"})

    const headers = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        const res = await axios.get('/api/post/all', headers)

        dispatch({
            type: "LIST_POST_SUCCESS",
            payload: res.data
        })

        return res.data

    } catch (error) {
        dispatch({ type: "LIST_POST_FAIL", payload: error.message})

    }
}

export const createPost =  (post) => async (dispatch, getState) => {

    dispatch({ type: "CREATE_POST_REQUEST"})

    
    try {
        const {userLogin: { userData }} = getState()
        
        const headers = {
            headers: {
                'Content-type' : 'application/json',
                'Authorization': `Bearer ${userData && userData.token}`
            }
        }

        const { data } = await axios.post('/api/post', post, headers)
    
        dispatch({ 
            type: "CREATE_POST_SUCCESS",
            payload: data
    })
        

    } catch(error) {
        dispatch({ type: "CREATE_POST_FAIL", payload: error.message})
    }
}