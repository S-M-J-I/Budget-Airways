import { View, Text } from 'react-native'
import React from 'react'
import { Button } from '@react-native-material/core'
import { signout } from '../functions/AuthFunctions'
import { AuthContext } from '../providers/AuthProviders'
import styles from '../styles/styles'

const LogoutButton = () => {
    return (
        <AuthContext.Consumer>
            {
                (auth) => (
                    <Button title='Log Out' color="error" onPress={() => signout(auth)} />
                )
            }
        </AuthContext.Consumer>
    )
}

export default LogoutButton