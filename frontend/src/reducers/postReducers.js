
export const createPostReducer = ( state = {}, action) => {
    
    switch(action.type) {

        case "CREATE_POST_REQUEST":
            return {
                loading: true
            }

        case "CREATE_POST_SUCCESS":
            return {
                loading: false,
                post: action.payload
            }
        
        case "CREATE_POST_FAIL":
            return {
                loading: false,
                error: action.payload
            }
        
        default:
            return state

    }
}

export const listPostReducer = ( state = {loading: true}, action) => {
    
    switch(action.type) {

        case "LIST_POST_REQUEST":
            return {
                loading: true
            }

        case "LIST_POST_SUCCESS":
            return {
                loading: false,
                posts: action.payload
            }
        
        case "LIST_POST_FAIL":
            return {
                loading: false,
                error: action.payload
            }
        
        default:
            return state

    }
}

export const getPostReducer = ( state = {}, action) => {
    
    switch(action.type) {

        case "GET_POST_REQUEST":
            return {
                loading: true
            }

        case "GET_POST_SUCCESS":
            return {
                loading: false,
                post: action.payload
            }
        
        case "GET_POST_FAIL":
            return {
                loading: false,
                error: action.payload
            }
        
        default:
            return state

    }
}