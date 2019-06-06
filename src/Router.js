import React from "react";
import  { BrowserRouter, Switch, Route } from 'react-router-dom';
// import ComingSoon from "./ComingSoon/";
const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path = "/" render={() => {window.location.href="./ComingSoon/index.html"}} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router;