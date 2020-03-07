import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import Input from './Input'


const NavBar = () => {
    
    const [NavButton, setNavButton] = useState(false)
    
    const handleNavButton = () => {
        setNavButton(!NavButton)
    }

    
    return (
        <nav>
            { NavButton ? <NavLink to={"/Home"}><button onClick={handleNavButton}>HOME</button></NavLink> : <NavLink to={"/Profile"}><button onClick={handleNavButton}>Profile</button></NavLink> }
            <Input />
        </nav>
    )
}

export default NavBar
