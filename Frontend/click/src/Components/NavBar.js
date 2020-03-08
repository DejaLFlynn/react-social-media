import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import axios from 'axios'
import Input from './Input'
import {useInput} from '../Utilities/CustomHooks'


const NavBar = () => {
    
    const [NavButton, setNavButton] = useState(false)
    
    const handleNavButton = () => {
        setNavButton(!NavButton)
    }

    const input = useInput("")

    const fetchHashtags = async (url) => {
        try {
            let res = await axios.get(url)
            let hashtags = res.data.payload
            console.log(hashtags)
        } catch (error) {
            console.log(error)
        }

    }
    
    

    const handleOnSubmit = async (event) => {
        event.preventDefault()
        fetchHashtags(`http://localhost:4000/hashtags/${input.value}`)
        
    }
    
    return (
        <nav>
            { NavButton ? <NavLink to={"/Home"}><button onClick={handleNavButton}>HOME</button></NavLink> : <NavLink to={"/Profile"}><button onClick={handleNavButton}>Profile</button></NavLink> }
            <form onSubmit={handleOnSubmit}>
                <Input placeholder={"Search Hashtags"} input={input}/>
            </form>
            <button>Add Image</button>
        </nav>
    )
}

export default NavBar
