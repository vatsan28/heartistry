import React from "react";
import  { HashRouter, Switch, Route } from 'react-router-dom';

const Router = () => {
    return (
        <HashRouter>
            <Switch>
                <Route exact path = "/" render={() => {window.location.href="./ComingSoon/index.html"}} />
            </Switch>
        </HashRouter>
    )
}

export default Router;