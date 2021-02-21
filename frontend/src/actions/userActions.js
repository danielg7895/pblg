import axios from 'axios'

export const login = async (email, password) => {
    const headers = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        const res = await axios.post('/api/user/login', {email, password}, headers)
        localStorage.setItem("userData", JSON.stringify(res.data))
        res.json(res.data)
    } catch (error) {
        // add to a future dispatch...
    }
}

export const logout = () => {
    localStorage.removeItem('userData')
    return {}
}

export const getUserById = async (id) => {
    const headers = {
        headers: {
            'Content-Type': 'application/json'
        }
    }

    try {
        const res = await axios.get(`/api/user/${id}`, headers)
        return res.data
        
    } catch( error ) {
        // add to a future dispatch...
    }

}