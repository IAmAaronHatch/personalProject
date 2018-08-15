
import axios from 'axios'

let initialState = {
    data: []
}

const GET_POSTS = 'GET_POSTS'
const GET_POSTS_FULFILLED = 'GET_POSTS_FULFILLED'

const CREATE_POST = 'CREATE_POST'
const CREATE_POST_FULFILLED = 'CREATE_POST_FULFILLED'

const UPDATE_POST = 'UPDATE_POST'
const UPDATE_POST_FULFILLED = 'UPDATE_POST_FULFILLED'

const DELETE_POST = 'DELETE_POST'
const DELETE_POST_FULFILLED = 'DELETE_POST_FULFILLED'

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS_FULFILLED:
        return { ...state, data: action.payload.data }
        case CREATE_POST_FULFILLED:
        console.log(action.payload)
            return { ...state, data: action.payload.data }
        case UPDATE_POST_FULFILLED:
            return { ...state, data: action.payload.data }
        case DELETE_POST_FULFILLED:
            return { ...state, data: action.payload.data}
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

export function createPost(title, content) {
    return {
        type: CREATE_POST,
        payload: axios.post('/api/post', {title, content})
    }
}

export function updatePost(id) {
    return {
        type: UPDATE_POST,
        payload: axios.put(`/api/post/${id}`)
    }
}

export function deletePost (id) {
    return {
        type: DELETE_POST,
        payload: axios.delete(`/api/post/${id}`)
    }
}