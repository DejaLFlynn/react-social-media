import React from 'react'
import {Route, Redirect } from 'react-router';


const PrivateRoute = ({ path, loggedIn }) => {
    return (
        <Route children={ ({path}) => {

            { loggedIn ? path : <Redirect to={"/SignIn"}/>}}
        }>
        </Route>
    );
}

export default PrivateRoute

