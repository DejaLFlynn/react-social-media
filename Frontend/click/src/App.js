import React from 'react';
import {Route, Switch} from 'react-router-dom'

import './App.css';


import NavBar from './Components/NavBar'
import LandingPage from './Components/LandingPage'
import Home from './Components/Home'
import Profile from './Components/ProfilePage'
import SignIn from './Components/SignInPage'
import PrivateRoute from './Components/PrivateRoute'

function App() {
  return (
    <div className="App">
      
    
      <Switch>
          <Route path={"/"}>
            <LandingPage />
          </Route>
          <Route path ={"/SignIn"}>
            <SignIn />
          </Route>
          
          <PrivateRoute>
            <Switch>
            <NavBar />
            <Route path={"/Home"}>
              <Home/>
            </Route>
            <Route path={"/Profile"}>
              <Profile />
            </Route>
            </Switch>
          </PrivateRoute>
      </Switch>

    </div>
  );
}

export default App;
