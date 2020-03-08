import React, {useState} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom'


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
            {!authorization ?
                <Switch>
                <Route path={"/"}>
                    <LandingPage onLogin={handleAuthorization}/>
                </Route>
                <Route path ={"/SignUp"}>
                    <SignUp />
                </Route>
                </Switch>
                : null }

           
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
            : <Redirect to={"/SignIn"}/> }
        </>
    )
  }
  
export default Authorization;