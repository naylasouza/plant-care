import React from "react";
import Collaborator from "../src/Pages/collaborator/collaborator";
import  Home  from "../src/Pages/home/home";
import { BrowserRouter, Switch, Route} from "react-router-dom";
    

const Routes = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/colaboradores" component={Collaborator} />
        </Switch>
        </BrowserRouter>
    );
};
export default Routes;
