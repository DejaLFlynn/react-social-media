import React from 'react';
import {Route, Switch} from 'react-router-dom'

import './App.css';

import NavBar from './Components/NavBar'
import Home from './Components/LandingPage'
import Profile from './Components/ProfilePage'

function App() {
  return (
    <div className="App">
      <NavBar />

      <Switch>
          <Route path={"/Home"}>
            <Home/>
          </Route>
          <Route path={"/Profile"}>
            <Profile />
          </Route>
      </Switch>

    </div>
  );
}

export default App;
