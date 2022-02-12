/* eslint-disable no-multi-spaces */
import React                           from 'react';
import { createStackNavigator }        from '@react-navigation/stack';
import { NavigatorScreenParams }       from '@react-navigation/native';
import { DrawerParamList, MainDrawer } from 'navigation/Drawer';
/* eslint-enable no-multi-spaces */

export type StackParamList = {
    MainDrawer: NavigatorScreenParams<DrawerParamList>;
};

const Stack = createStackNavigator<StackParamList>();

const Koombea = () => (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='MainDrawer' component={MainDrawer}/>
    </Stack.Navigator>
);

export default Koombea;
