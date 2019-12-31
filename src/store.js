import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Axios from "axios";

let initState = {
    books: []
}

const rootReduder = (state = initState, action) => {
    let { type, payload } = action
    switch (type) {
        case 'GET_ALL_BOOKS':
            return {
                ...state,
                books: payload
            }
        default:
            return state
    }
}


export const getAllBooks = () => dispatch => {
    Axios.get('http://localhost:4000/books').then(data => {
        dispatch({ type: 'GET_ALL_BOOKS', payload: data.data.books })
    }).catch(err => {
        console.log(err.response)
    })
}

export default createStore(rootReduder, applyMiddleware(thunk))