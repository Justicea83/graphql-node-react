import {Navigate, Route, Routes as Switch} from "react-router-dom";
import Login from "../Pages/Auth/Login";
import Dashboard from "../Pages/Dashboard";
import React from "react";
import Register from "../Pages/Auth/Register";
import AuthContext from "../context/auth-context";

export default class Routes extends React.Component{

    context = AuthContext

    render() {
        return (
            <>
                <Switch>
                    <Route exact path="/" element={<Navigate replace to={this.context.token ? "/profile" : "/login"}/>} />
                    <Route exact path="/register" element={<Register/>} />
                    <Route exact path="/login" element={<Login/>}/>
                    <Route path="/profile/*" element={<Dashboard/>}/>
                    <Route path="*" element={<Navigate to="/"/>}/>
                </Switch>
            </>
        )
    }


}