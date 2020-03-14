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
        console.log(authorization)
    }

    return (
        <>
            {!authorization ?
                <Switch>
                <Route exact path={"/"}>
                    <LandingPage onLogin={handleAuthorization}/>
                </Route>
                <Route path={"/SignUp"}>
                    <SignUp onLogin={handleAuthorization}/>
                </Route>
                </Switch>
                : <Redirect to={"/Home"}/> }

            {authorization ?
                <>
                <NavBar />
                <Switch>
                <Route path={"/Home"} >
                    <Home/>
                </Route>
                <Route path={"/Profile"}>
                    <Profile />
                </Route>
                </Switch>
                </>
            : <Redirect to={"/"}/>  }
        </>
    )
  }
  
export default Authorization;