import React from 'react'
import {Route, Switch, Redirect } from 'react-router';


const PrivateRoute = ({ children, authorization }) => {
    return (
        <Route render={children => }>

            { authorization ? children : <Redirect to={"/SignIn"}/> }
        </Route>
    );
}

export default PrivateRoute

<Route render={props => auth === true
    ? <Component auth={auth} {...props} />
    : <Redirect to={{pathname:'/'}} />