
import axios from 'axios'

let initialState = {
    data: []
}

const GET_POSTS = 'GET_POSTS'
const GET_POSTS_FULFILLED = 'GET_POSTS_FULFILLED'

const CREATE_POST = 'CREATE_POST'
const CREATE_POST_FULFILLED = 'CREATE_POST_FULFILLED'

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS_FULFILLED:
            return { ...state, data: action.payload.data }
        case CREATE_POST_FULFILLED:
            return { ...state, data: action.payload.data }
        default:
            return state
    }
}

export function getPosts() {
    return {
        type: GET_POSTS,
        payload: axios.get('/api/posts')
    }
}

export function createPost() {
    return {
        type: CREATE_POST,
        payload: axios.post('/api/post')
    }
}