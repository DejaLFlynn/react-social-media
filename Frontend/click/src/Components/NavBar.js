import React from 'react'
import {NavLink} from 'react-router-dom'


const NavBar = () => {
    
    debugger

    return (
        <nav>
            {  ? <NavLink to={"/Home"}><button></button></NavLink> : <NavLink to={"/Profile"}><button></button></NavLink> }
        </nav>
    )
}

export default NavBar
