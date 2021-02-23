import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
    userLoginReducer,
    userRegisterReducer,
    getUserReducer
} from './reducers/userReducers'
import {
    createPostReducer,
    listPostReducer,
    getPostReducer
} from './reducers/postReducers'

const reducer = combineReducers({
    userLoginReducer,
    userRegisterReducer,
    getUserReducer,

    createPostReducer,
    listPostReducer,
    getPostReducer
})

const userInfoFromLocalStorage = localStorage.getItem("userData") ? JSON.parse(localStorage.getItem("userData")) : null

const initialState = {
    userLogin: {userData: userInfoFromLocalStorage}
}

const middleware = [thunk]

const store = createStore(reducer, initialState, composeWithDevTools(applyMiddleware(...middleware)))

export default store