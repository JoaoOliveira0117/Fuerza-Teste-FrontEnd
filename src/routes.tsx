import React, { useEffect, useState } from 'react';
import { Route, BrowserRouter, Switch, Redirect } from 'react-router-dom';

import { Journals } from './components/Journals';
import { SignIn } from './components/Homepage/SignIn';
import { SignUp } from './components/Homepage/SignUp';

// creates a route element that can be accessed if "canAcessIf" == true, else, redirects to "redirectTo".
const PrivateRoute = ({component, canAccessIf, redirectTo, ...rest}: any) => {
    const routeComponent = (props: any) => (
        canAccessIf
            ? React.createElement(component, props)
            : <Redirect to={{pathname: redirectTo}}/>
    );
    return <Route {...rest} render={routeComponent}/>;
};

export const Routes = () => {
    let user = localStorage.getItem("@user")
    
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/">
                    <Redirect to="/login"></Redirect>
                </Route>
                <PrivateRoute exact path="/login" component={SignIn} canAccessIf={user==null} redirectTo="/journals"/>
                <Route exact path="/signup" component={SignUp}/>
                <Route path="/journals" component={Journals}/>
            </Switch>
        </BrowserRouter>
    )
}