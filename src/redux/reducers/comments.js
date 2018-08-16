import axios from 'axios'

let initialState = {
    data: []
}

const FULFILLED = '_FULFILLED'

const GET_COMMENTS = 'GET_COMMENTS'

export default function reducer(state = initialState, action) {
    switch(action.type){
        case GET_COMMENTS + FULFILLED:
            return { ...state, data: action.payload.data }
        default:
            return state;
    }
}

export function getComments(id) {
    return {
        type: GET_COMMENTS,
        payload: axios.get(`/api/comments/${id}`)
    }
}