/* eslint-disable no-multi-spaces */
import React                        from 'react';
import { createStackNavigator }     from '@react-navigation/stack';
import LoginScreen                  from 'screens/Login';
/* eslint-enable no-multi-spaces */

const Stack = createStackNavigator();

const LoginStack = () => (
    <Stack.Navigator screenOptions={ { headerShown: false } }>
        <Stack.Screen name={'LoginScreen'} component={LoginScreen}/>
    </Stack.Navigator>
);

export default LoginStack;
