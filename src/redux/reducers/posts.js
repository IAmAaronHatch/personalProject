
import axios from 'axios'

let initialState = {
    data: [],
    favorites: [],
    currentlyDisplayed: []
}
const FULFULLED = '_FULFILLED'


//posts
const GET_POSTS = 'GET_POSTS'
const GET_POSTS_FULFILLED = 'GET_POSTS_FULFILLED'
const GET_POPULAR_POSTS = 'GET_POPULAR_POSTS'
const CREATE_POST = 'CREATE_POST'
const CREATE_POST_FULFILLED = 'CREATE_POST_FULFILLED'
const DELETE_POST = 'DELETE_POST'
const UPDATE_TITLE = "UPDATE_TITLE"
const UPDATE_CONTENT = "UPDATE_CONTENT"


const UPDATE_DISPLAY = 'UPDATE_DISPLAY'

const FAVORITE = 'FAVORITE'
const GET_FAVORITES = 'GET_FAVORITES'

//modal
const OPEN_MODAL = 'OPEN_MODAL'
const CLOSE_MODAL = 'CLOSE_MODAL'



export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_POSTS_FULFILLED:
            let postsWithModalBoolean = action.payload.data.map(post => {
                post.openModal = false
                return post
            })
            return { ...state, data: postsWithModalBoolean, currentlyDisplayed: postsWithModalBoolean }
        case UPDATE_DISPLAY:
            return { ...state, currentlyDisplayed: action.payload }
        case GET_POPULAR_POSTS + FULFULLED:
            return { ...state, data: action.payload.data }
        case CREATE_POST_FULFILLED:
            return { ...state, data: action.payload.data }
        case UPDATE_TITLE + FULFULLED:
            return { ...state, data: action.payload.data }
        case UPDATE_CONTENT + FULFULLED:
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
        case GET_FAVORITES + FULFULLED:
            return { ...state, favorites: action.payload }
        case FAVORITE + FULFULLED:
            return { ...state, favorites: action.payload }
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
export function getPostsByPoints() {
    return {
        type: GET_POSTS,
        payload: axios.get('/api/popular-posts')
    }
}

export function updateCurrentlyDisplayed(filter) {
    return {
        type: UPDATE_DISPLAY,
        payload: filter
    }
}

export function createPost(title, content, picture) {
    return {
        type: CREATE_POST,
        payload: axios.post('/api/post', {title, content, picture})
    }
}

export function updateTitle (title, id) {
    let tempObj = {title}
    return {
        type: UPDATE_TITLE,
        payload: axios.put(`/api/post/title/${id}`, tempObj)
    }
}

export function updateContent (content, id) {
    console.log(content)
    let tempObj = {content}
    return {
        type: UPDATE_TITLE,
        payload: axios.put(`/api/post/content/${id}`, tempObj)
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

export function makeFavorite (postId, user_id, post_id) {
    return {
        type: FAVORITE,
        payload: axios.post(`/api/posts/${postId}/favorite`, user_id, post_id)
    }
}

export function getFavorites (postId) {
    return {
        type: GET_FAVORITES,
        payload: axios.get(`/api/posts/${postId}/favorites`)
    }
}