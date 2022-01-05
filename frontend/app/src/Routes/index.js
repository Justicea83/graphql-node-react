import {Navigate, Route, Routes as Switch} from "react-router-dom";
import Login from "../Pages/Auth/Login";
import Dashboard from "../Pages/Dashboard";


export default function Routes() {


    return (
        <>
            <Switch>
                <Route exact path="/" element={<Login/>}/>
                <Route path="/profile/*" element={<Dashboard/>}/>
                <Route path="*" element={<Navigate to="/"/>}/>
            </Switch>
        </>
    )
}