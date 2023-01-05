import { View } from 'react-native'
import React, { useState } from 'react'
import { Stack, TextInput, IconButton, Button, Text, Divider } from "@react-native-material/core";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import styles from '../../styles/styles'
import Card from '../../components/Card'
import configs from '../../styles/styles.configs';
import { AuthContext } from '../../providers/AuthProviders';
import { signup } from '../../functions/AuthFunctions';

const SignInScreen = ({ navigation }) => {

    // * states to handle user inputs
    const [fullname, setFullName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPass, setConfirmPass] = useState('')

    // * state to toggle secureTextEntry in password fields
    const [hidePassword, setHidePassword] = useState(true)


    /**
     * Validify the passwords and register the user when the form is submitted
     * @param {any} auth
     * @returns {None}
    */
    const submit = () => {
        if (password !== confirmPass) {
            alert('Passwords do not match')
            return
        }

        const result = signup({ fullname, email, phone, password })
        if (result) {
            alert('Signed Up successfully')
            navigation.navigate('Signin')
        } else {
            alert('Error in signup')
        }
    }


    /**
     * Render eye icon at input-field end, and toggle between show and hide password
     * @param {any} props 
     * @returns {None} 
     */
    const toggleShowHide = props => (
        <IconButton onPress={() => setHidePassword(!hidePassword)} icon={props => <Icon name="eye" {...props} />} {...props} />
    )

    /**
     * * Render the main view of the functional component
    */
    return (
        <AuthContext.Consumer>
            {(auth) => (
                <View style={styles.container}>
                    <Stack spacing={configs.stackLayout.SPACING} style={{ margin: configs.stackLayout.MARGIN }}>
                        <Card>
                            <Text variant='h5' style={styles.formHeader}>Sign Up</Text>
                            <Divider style={styles.divider} />
                            <TextInput onChangeText={setFullName} style={styles.textInputLarge} placeholder='Full Name' variant='outlined' autoComplete='name' />
                            <TextInput onChangeText={setEmail} style={styles.textInputLarge} placeholder='Email Address' variant='outlined' autoComplete='email' />
                            <TextInput onChangeText={setPhone} style={styles.textInputLarge} placeholder='Phone Number' variant='outlined' autoComplete='tel' />
                            <TextInput onChangeText={setPassword} style={styles.textInputLarge} secureTextEntry={hidePassword ? true : false} placeholder='Password' variant='outlined' trailing={toggleShowHide} />
                            <TextInput onChangeText={setConfirmPass} style={styles.textInputLarge} secureTextEntry={hidePassword ? true : false} placeholder='Confirm Password' variant='outlined' trailing={toggleShowHide} />
                            <Button style={styles.btn} title='Sign Up' onPress={submit} />
                        </Card>
                    </Stack>
                    <Button variant='text' title='Already have an account? Sign In' onPress={() => navigation.navigate('Signin')} />
                </View>
            )}
        </AuthContext.Consumer>
    )
}

export default SignInScreen