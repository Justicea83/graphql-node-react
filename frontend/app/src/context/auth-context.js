import React from "react";

export default React.createContext({
    token: null,
    setUserDetails: (user) => {},
    login: (token, user) => {
    },
    logout: () => {
    },
    user: null
})