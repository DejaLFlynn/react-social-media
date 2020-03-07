import React, {useState} from 'react'
import {NavLink} from 'react-router-dom'
import {usePrevState} from '../Utilities/CustomHooks'


const NavBar = () => {
    
    const [NavButton, setNavButton] = useState("/Home")
    
    const handleNavButton = () => {
        let prevState = usePrevState(NavButton)
        setNavButton("/Profile")
        prevState = usePrevState(NavButton)
        
        return NavButton
    }

    
    return (
        <nav>
            <NavLink to={NavButton}><button value={NavButton} onClick={handleNavButton}>{NavButton}</button></NavLink>
        </nav>
    )
}

export default NavBar
