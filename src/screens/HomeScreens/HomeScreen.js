import { View } from 'react-native'
import React, { useEffect } from 'react'
import { AuthContext } from '../../providers/AuthProviders'
import { Button, Stack, Text } from '@react-native-material/core'
import styles from '../../styles/styles'
import Icon from "@expo/vector-icons/MaterialCommunityIcons";

const HomeScreen = ({ navigation }) => {

    return (
        <AuthContext.Consumer>
            {
                (auth) => (
                    <View style={styles.containerhome}>
                        <Button title='Search for a flight' onPress={() => navigation.navigate('create-trip')} trailing={props => <Icon name='magnify' {...props} />} />
                        <Text>{"\n"}</Text>
                        <Text variant='h5'>Recently Viewed</Text>
                        <Stack spacing={5}>
                            <Text>{auth.userDetails.fullname}</Text>
                            <Text>{auth.userDetails.fullname}</Text>
                            <Text>{auth.userDetails.fullname}</Text>
                            <Text>{auth.userDetails.fullname}</Text>
                            <Text>{auth.userDetails.fullname}</Text>
                        </Stack>
                    </View>
                )
            }
        </AuthContext.Consumer>
    )
}

export default HomeScreen