import React, { useState } from "react"

const AuthContext = React.createContext()

const AuthProvider = (props) => {
    const [isLoggedIn, setLoggedIn] = useState(false)
    const [userDetails, setUserDetails] = useState([])


    return (
        <AuthContext.Provider
            value={{
                isLoggedIn,
                setLoggedIn,
                userDetails,
                setUserDetails
            }}
        >
            {props.children}
        </AuthContext.Provider>
    )
}


export { AuthProvider, AuthContext }