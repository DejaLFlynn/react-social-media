import React from 'react'
import {NavLink} from 'react-router-dom'
import "CSSFile"


const NavBar = () => {
    return (
        <nav>
            <NavLink exact to={"/"}>HOME</NavLink> 
            <NavLink to={"/Home"}><Button></Button></NavLink>
            <NavLink to={"/Profile"}><Button></Button></NavLink>
        </nav>
    )
}

export default NavBar
