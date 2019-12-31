import React from 'react'
import { render } from 'react-dom'
import App from './App'
import Axios from 'axios'

Axios.defaults.baseURL = 'http://localhost:4000'
Axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.token

render(<App />, document.getElementById('root'))