import React, {useState} from 'react';
import {Route, Switch} from 'react-router-dom'


import NavBar from './NavBar'
import LandingPage from './LandingPage'
import Home from './Home'
import Profile from './ProfilePage'
import SignIn from './SignInPage'
import PrivateRoute from './PrivateRoute'

const Authorization = () => {
    
    const [authorization, setAuthorization]  = useState(false) 

    const handleAuthorization = () => {
        setAuthorization(true)
    }

    return (
        <>
            {authorization ? <navBar /> : null}
            <Switch>
                <Route path={"/"}>
                    <LandingPage onLogin={handleAuthorization}/>
                </Route>
                <Route path ={"/SignIn"}>
                    <SignIn />
                </Route>
                <PrivateRoute path={"/Home"} loggedIn={authorization}>
                    <Home/>
                </PrivateRoute>
                <PrivateRoute path={"/Profile"} loggedIn={authorization}>
                    <Profile />
                </PrivateRoute>
            </Switch>
        </>
    )
  }
  
export default Authorization;