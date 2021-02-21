import axios from 'axios'

export const getPost = async (id) => {
    const headers = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        const res = await axios.get(`/api/post/${id}`, headers)

        return res.data

    } catch (error) {

    }
}

export const getPostList = async () => {
    const headers = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        const res = await axios.get('/api/post/all', headers)

        return res.data

    } catch (error) {

    }
}

export const createPost = async (post) => {
    try {
        const userData = JSON.parse(localStorage.getItem("userData"))
        
        const headers = {
            headers: {
                'Content-type' : 'application/json',
                'Authorization': `Bearer ${userData && userData.token}`
            }
        }
        console.log(post)
        const { data } = await axios.post('/api/post', post, headers)
        console.log(JSON.stringify(data))
    } catch(error) {
        console.log(error)
    }
}