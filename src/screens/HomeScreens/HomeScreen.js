import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { AuthContext } from '../../providers/AuthProviders'
import { Button } from '@react-native-material/core'
import styles from '../../styles/styles'
import { signout } from '../../functions/AuthFunctions'

const HomeScreen = () => {

    return (
        <AuthContext.Consumer>
            {
                (auth) => (
                    <View style={styles.containerhome}>
                        <Text>HomeScreen</Text>
                        <Text>{auth.userDetails.fullname}</Text>
                        <Button variant='outlined' title='Log Out' onPress={() => signout(auth)} />
                    </View>
                )
            }
        </AuthContext.Consumer>
    )
}

export default HomeScreen