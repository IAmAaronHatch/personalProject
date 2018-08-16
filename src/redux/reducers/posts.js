
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
const FULFULLED = '_FULFILLED'

const OPEN_MODAL = 'OPEN_MODAL'
const CLOSE_MODAL = 'CLOSE_MODAL'

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS_FULFILLED:
            let postsWithModalBoolean = action.payload.data.map(post => {
                post.openModal = false
                return post
            })
            return { ...state, data: postsWithModalBoolean }
        case CREATE_POST_FULFILLED:
            return { ...state, data: action.payload.data }
        case UPDATE_POST_FULFILLED:
            return { ...state, data: action.payload.data }
        case DELETE_POST + FULFULLED:
            return { ...state, data: action.payload.data}
        case OPEN_MODAL:
            let data = state.data.map(post => {
                if ( post.id === action.payload) {
                    post.openModal = true
                } else {
                    post.openModal = false
                }
                return post
            })
            return { ...state, data}
        case CLOSE_MODAL:
            let posts = state.data.map(post => {
                post.openModal = false
                return post
            })
            return { ...state, data: posts }
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

export function openModal (postId) {
    return {
        type: OPEN_MODAL,
        payload: postId
    }
}

export function closeModal () {
    return {
        type: CLOSE_MODAL
    }
}