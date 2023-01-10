import { View, Text } from 'react-native'
import React from 'react'
import { Button, IconButton } from '@react-native-material/core'
import { signout } from '../functions/AuthFunctions'
import { AuthContext } from '../providers/AuthProviders'
import styles from '../styles/styles'
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const LogoutButton = () => {
    return (
        <AuthContext.Consumer>
            {
                (auth) => (
                    <IconButton
                        icon={props => <Icon size={30} style={{ marginRight: 15 }} name="power" {...props} />}
                        color="error"
                        onPress={() => signout(auth)}
                    />
                    // <Button leading={props => <Icon name='power' {...props} />} color="error" onPress={() => signout(auth)} />
                )
            }
        </AuthContext.Consumer>
    )
}

export default LogoutButton