import React from "react";
import Home from "./Home";
import  { BrowserRouter, Switch, Route } from 'react-router-dom';

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path = "/" component={Home} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;