import axios from 'axios'

let initialState = {
    data: []
}

const FULFILLED = '_FULFILLED'

const GET_COMMENTS = 'GET_COMMENTS'
const CREATE_COMMENT = 'CREATE_COMMENT'

export default function reducer(state = initialState, action) {
    switch(action.type){
        case GET_COMMENTS + FULFILLED:
            return { ...state, data: action.payload.data }
        case CREATE_COMMENT + FULFILLED:
            return { ...state, data: action.payload.data }
        default:
            return state;
    }
}

export function getComments(postId) {
    return {
        type: GET_COMMENTS,
        payload: axios.get(`/api/posts/${postId}/comments`)
    }
}

export function createComment (postId, comment, commenter_id) {
    let tempObj = {comment}
    return {
        type: CREATE_COMMENT,
        payload: axios.post(`/api/posts/${postId}/comment`, tempObj, {commenter_id})
    }
}