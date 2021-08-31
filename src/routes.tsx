import React from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

import { Journals } from './components/Journals';
import { SignIn } from './components/Homepage/SignIn';
import { SignUp } from './components/Homepage/SignUp';

export const Routes = () => {
    
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" component={SignIn}/>
                <Route exact path="/signup" component={SignUp}/>
                <Route path="/journals" component={Journals}/>
            </Switch>
        </BrowserRouter>
    )
}