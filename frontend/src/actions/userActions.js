import axios from 'axios'

export const login = (email, password) => async (dispatch, getState) => {
    try {

        dispatch({
            type: "USER_LOGIN_REQUEST"
        })
    
        const headers = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        
        const res = await axios.post('/api/user/login', {email, password}, headers)

        dispatch({
            type: "USER_LOGIN_SUCCESS",
            payload: res.data
        })
        
        res.json(res.data)
    } catch (error) {
        dispatch({ type: "USER_LOGIN_FAIL", payload: error.message})
    }
}

export const logout = () => async (dispatch, getState) => {
    localStorage.removeItem('userData')

    dispatch({type: "USER_LOGOUT"})
}

export const getUserById = (id) => async (dispatch, getState) => {
    try {
        
        dispatch({
            type: "USER_DETAILS_REQUEST"
        })
    
        const {userLogin: { userData }} = getState()
        const headers = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${userData.token}`
            }
        }
        const res = await axios.get(`/api/user/${id}`, headers)
        dispatch({
            type: "USER_DETAILS_SUCCESS",
            payload: res.data
        })
        return res.data
        
    } catch( error ) {
        dispatch({ type: "USER_DETAILS_FAIL", payload: error.message})
    }

}