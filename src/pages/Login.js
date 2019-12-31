import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import Axios from 'axios'

export default (props) => {
    console.log(props)
    let { from } = props.location.state || { from: { pathname: '/' } }

    const [loginData, setloginData] = useState({
        email: '',
        password: ''
    })

    const handleChange = (e) => {
        setloginData({
            ...loginData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        Axios.post('http://localhost:4000/login', loginData).then(data => {
            console.log(data)
            localStorage.token = data.data.token
            localStorage.isAuth = true
            setloginData({ email: '', password: '' })
        })
    }

    if (localStorage.isAuth === "true") {
        return <Redirect to={from} />
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>email</label>
            <input type="email" name="email" placeholder="email" onChange={handleChange} required={true} />
            <br />
            <label>password</label>
            <input type="password" name="password" placeholder="password" onChange={handleChange} required={true} />
            <br />
            <input type="submit" />
        </form>
    )
}
