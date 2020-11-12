import React from "react";
import Collaborator from "./components/collaborator/collaborator";
import  Menu  from "./components/navbar/navbar";
import { BrowserRouter, Switch, Route} from "react-router-dom";
    

const Routes = () => {
    return (
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Menu} />
            <Route path="/colaboradores" component={Collaborator} />
        </Switch>
        </BrowserRouter>
    );
};
export default Routes;
