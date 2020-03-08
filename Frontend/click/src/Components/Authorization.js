import React, {useState} from 'react';
import {Route, Switch} from 'react-router-dom'


import NavBar from './NavBar'
import LandingPage from './LandingPage'
import Home from './Home'
import Profile from './ProfilePage'
import SignUp from './SignUpPage'

const Authorization = () => {
    
    const [authorization, setAuthorization]  = useState(false) 

    const handleAuthorization = () => {
        setAuthorization(true)
    }

    return (
        <>
            <Switch>
                <Route path={"/"}>
                    <LandingPage />
                </Route>
                <Route path ={"/SignUp"}>
                    <SignUp />
                </Route>
           
                {authorization ?
                <Switch>
                <NavBar />
                <Route path={"/Home"} >
                    <Home/>
                </Route>
                <Route path={"/Profile"}>
                    <Profile />
                </Route>
                </Switch>
            : null }
        </Switch> 
        </>
    )
  }
  
export default Authorization;