import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import axios from 'axios'
import Input from './Input'


const NavBar = () => {
    
    const [NavButton, setNavButton] = useState(false)
    
    const handleNavButton = () => {
        setNavButton(!NavButton)
    }

    const fetchHashtags = async (url) => {
        try {
            let res = await axios.get(url)
            debugger
            let hashtags = res.data.payload
            console.log(hashtags)
        } catch (error) {
            console.log(error)
        }

    }

    const handleOnSubmit = async (event) => {
        event.preventDefault()
        fetchHashtags(`http://localhost:4000/hashtags/${event.target[0].value}`)
        
    }
    
    return (
        <nav>
            { NavButton ? <NavLink to={"/Home"}><button onClick={handleNavButton}>HOME</button></NavLink> : <NavLink to={"/Profile"}><button onClick={handleNavButton}>Profile</button></NavLink> }
            <form onSubmit={handleOnSubmit}>
                <Input placeholder={"Search Hashtags"}/>
            </form>
            <button>Add Image</button>
        </nav>
    )
}

export default NavBar
