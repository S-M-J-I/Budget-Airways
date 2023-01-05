import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthContext, AuthProvider } from './src/providers/AuthProviders';
import HomeScreen from './src/screens/HomeScreens/HomeScreen';
import SignUpScreen from './src/screens/AuthScreens/SignUpScreen';
import SignInScreen from './src/screens/AuthScreens/SignInScreen';
import * as React from 'react'


const OPTIONS = {
  headerShown: false
}

const HomeStack = createStackNavigator()
const AuthStack = createStackNavigator()


const RenderHomeStack = ({ user }) => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name='Homepage' component={HomeScreen} options={{ headerTitle: `Welcome ${user.fullname}` }} />
    </HomeStack.Navigator>
  )
}

const RenderAuthStack = () => {
  return (
    <AuthStack.Navigator initialRouteName='Signin'>
      <AuthStack.Screen name='Signup' component={SignUpScreen} options={OPTIONS} />
      <AuthStack.Screen name='Signin' component={SignInScreen} options={OPTIONS} />
    </AuthStack.Navigator>
  )
}

const App = () => {
  return (
    <AuthProvider>
      <AuthContext.Consumer>
        {(
          (auth) => (
            <NavigationContainer>
              {auth.isLoggedIn ? <RenderHomeStack user={auth.userDetails} /> : <RenderAuthStack />}
            </NavigationContainer>
          )
        )}
      </AuthContext.Consumer>
    </AuthProvider>
  );
}

export default App