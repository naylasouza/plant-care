import React from "react";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Menu from "../components/navbar/navbar";
import Footer from "../components/footer/footer";

const Routa =()=>{
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/colaboradores" exact component={Collaborator}/>
        </Switch>
        </BrowserRouter>
    )
}
export default Routa;
