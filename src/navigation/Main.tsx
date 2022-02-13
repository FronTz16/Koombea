/* eslint-disable no-multi-spaces */
import React                      from 'react';
import { createStackNavigator }   from '@react-navigation/stack';
import DashboardScreen            from 'screens/Dashboard';
import { FighterModel }           from 'models/FighterModel';
import FighterDetailsScreen       from 'screens/FighterDetails';
import FiltersScreen              from 'screens/FiltersScreen';
/* eslint-enable no-multi-spaces */

export type StackParamList = {
    DashboardScreen: undefined;
    FighterDetailsScreen: { fighter: FighterModel };
    FiltersScreen: undefined;
};

const Stack = createStackNavigator<StackParamList>();

export const MainStack = () => (
    // <Stack.Navigator >
    <Stack.Navigator screenOptions={{ headerShown: false }} >
        <Stack.Screen name='DashboardScreen' component={DashboardScreen}/>
        <Stack.Screen name='FighterDetailsScreen' component={FighterDetailsScreen}/>
        <Stack.Screen name='FiltersScreen' component={FiltersScreen}/>
    </Stack.Navigator>
);

