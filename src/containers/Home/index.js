import React from 'react'
import {useHistory} from 'react-router-dom'

const jwt = require('jsonwebtoken')

const decodedToken = token =>{
    try{
        return jwt.verify(token, 'ihkjhljewf')

    } catch (error){
        console.log(error)

    }
}



const Home = () => {
    const history = useHistory()
    const token = localStorage.getItem('token')
    const decoded = decodedToken(token)
    if (!decoded.user || !token){
        history.push('/login')
    }

    return (
        <div>Welcome to the DEV React starter!</div>

    )
}

export default Home
