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
            
            
            <Switch>
                <Route path={"/"}>
                    <LandingPage onLogin={handleAuthorization}/>
                </Route>
                <Route path ={"/SignIn"}>
                    <SignIn />
                </Route>
            
                <Private loggedIn={authorization}>
                    <NavBar />
                    <PrivateRoute path={"/Home"} loggedIn={authorization>
                        <Home/>
                    </PrivateRoute>
                    <PrivateRoute path={"/Profile"} loggedIn={authorization>
                        <Profile />
                    </PrivateRoute>
                </Private>
            </Switch>
        </>
    );
  }
  
export default Authorization;