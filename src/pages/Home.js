import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllBooks } from '../store'

export default () => {
    let books = useSelector(state => state.books)

    let dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAllBooks())
    }, [])
    return (
        <>
            <h1>Books</h1>
            <ul>
                {
                    books.map(({ _id, title }) => (
                        <li key={_id}>{title}</li>
                    ))
                }
            </ul>
        </>
    )
}
