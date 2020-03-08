import React from 'react';
import {Route, Switch} from 'react-router-dom'


import NavBar from './NavBar'
import LandingPage from './LandingPage'
import Home from './Home'
import Profile from './ProfilePage'
import SignIn from './SignInPage'
import PrivateRoute from './PrivateRoute'

const Authorization = () => {
    
    return (
      <div className="App">

        <Route path={"/"}>
            <LandingPage />
        </Route>
        <Route path ={"/SignIn"}>
            <SignIn />
        </Route>
        
        <PrivateRoute>
            <NavBar />
            <Switch>
                <Route path={"/Home"}>
                    <Home/>
                </Route>
                <Route path={"/Profile"}>
                    <Profile />
                </Route>
            </Switch>
        </PrivateRoute>`
  
  
      </div>
    );
  }
  
export default Authorization;