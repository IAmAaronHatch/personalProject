import axios from 'axios'

let initialState = {
    messages: []
}

const FULFILLED = '_FULFILLED'

const GET_MESSAGES = 'GET_MESSAGES'
const CREATE_MESSAGE = 'CREATE_MESSAGE'
const UPDATE_MESSAGE = 'UPDATE_MESSAGE'
const DELETE_MESSAGE = 'DELETE_MESSAGE'

export default function reducer (state = initialState, action) {
    switch(action.type){
        case GET_MESSAGES + FULFILLED:
            return { ...state, posts: action.payload.posts }
        case CREATE_MESSAGE + FULFILLED:
            return { ...state, posts: action.payload.posts }
        case UPDATE_MESSAGE + FULFILLED:
            return { ...state, posts: action.payload.posts }
        case DELETE_MESSAGE + FULFILLED: 
            return { ...state, posts: action.payload.posts }
        default: return state
    }
}

export function getMessages () {
    return {
        type: GET_MESSAGES,
        payload: axios.get('/api/messages')
    }
}

export function createMessage (message) {
    return {
        type: CREATE_MESSAGE,
        payload: axios.post('/api/message', {message})
    }
}

export function updateMessage (id, message) {
    return {
        type: UPDATE_MESSAGE,
        payload: axios.put(`/api/message/${id}`, {message})
    }
}

export function deleteMessage (id) {
    return {
        type: DELETE_MESSAGE,
        payload: axios.delete(`/api/message/${id}`)
    }
}