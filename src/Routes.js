import React from 'react'
import Login from './pages/Login'
import Home from './pages/Home'

const About = () => <h1>About</h1>

export default [
    {
        path: '/',
        component: Home,
        exact: true,
        protected: true
    },
    {
        path: '/about',
        component: About,
        protected: true
    },
    {
        path: '/login',
        component: Login
    }
]