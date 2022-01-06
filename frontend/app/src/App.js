import './App.css';
import {BrowserRouter} from "react-router-dom";
import React from "react";
import Routes from "./Routes";
import AuthContext from "./context/auth-context";

class App extends React.Component {
    state = {
        token: null,
        user: null,
    }

    login = (token, user) => {
        this.setState({token: token, user: user})
    }

    setUserDetails = ( user) => {
        this.setState({ user: user})
    }

    logout = () => {
        this.setState({token: null, userId: null})
    }


    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <AuthContext.Provider
                        value={{
                            token: this.state.token,
                            user: this.state.user,
                            login: this.login,
                            logout: this.logout,
                            setUserDetails: this.setUserDetails
                        }}>
                        <Routes/>
                    </AuthContext.Provider>
                </BrowserRouter>
            </div>
        );
    }


}

export default App;
