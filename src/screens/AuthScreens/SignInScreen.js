import { View } from 'react-native'
import React, { useState } from 'react'
import styles from '../../styles/styles'
import { AuthContext } from '../../providers/AuthProviders'
import { Stack, Divider, TextInput, Text, Button, IconButton } from '@react-native-material/core'
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Card from '../../components/Card'
import configs from '../../styles/styles.configs'
import { validSignin } from '../../functions/AuthFunctions'

const SignInScreen = ({ navigation }) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    /**
     * Attempts a signin with the details entered into this form
     * @param {AuthContext} auth 
     */
    const submit = (authContext) => {
        validSignin({ email, password }, authContext)
    }

    // * state to toggle secureTextEntry in password fields
    const [hidePassword, setHidePassword] = useState(true)

    /**
     * Render eye icon at input-field end, and toggle between show and hide password
     * @param {any} props 
     * @returns {None} 
     */
    const toggleShowHide = props => (
        <IconButton onPress={() => setHidePassword(!hidePassword)} icon={props => <Icon name="eye" {...props} />} {...props} />
    )

    return (
        <AuthContext.Consumer>
            {
                (auth) => (
                    <View style={styles.container}>
                        <Stack spacing={configs.stackLayout.SPACING} style={{ margin: configs.stackLayout.MARGIN }}>
                            <Card>
                                <Text variant='h5' style={styles.formHeader}>Sign In</Text>
                                <Divider style={styles.divider} />
                                <TextInput onChangeText={setEmail} style={styles.textInputLarge} placeholder='Email Address' variant='outlined' autoComplete='email' />
                                <TextInput onChangeText={setPassword} style={styles.textInputLarge} secureTextEntry={hidePassword ? true : false} placeholder='Password' variant='outlined' trailing={toggleShowHide} />
                                <Button style={styles.btn} title='Sign In' onPress={() => submit(auth)} />
                            </Card>
                        </Stack>
                        <Button variant='text' title="Don't have an account? Sign Up" onPress={() => navigation.navigate('Signup')} />
                    </View>
                )
            }
        </AuthContext.Consumer>
    )
}

export default SignInScreen