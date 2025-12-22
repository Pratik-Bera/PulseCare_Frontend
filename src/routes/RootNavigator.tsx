// Predefined import
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";

// self defined imports
import DashboardScreen from '../screens/dashboard/DashboardScreen';
import RegistrationScreen from '../screens/registration/RegistrationScreen';
import Login from './../screens/login/LoginScreen';
import { RouteNames } from './RouteNames';
import { RootStackParamList } from './Types';


const Stack = createNativeStackNavigator<RootStackParamList>();

const StackNav = () => {
    return (
        <Stack.Navigator initialRouteName={RouteNames.LOGIN}>

            <Stack.Screen
                name={RouteNames.LOGIN}
                component={Login}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name={RouteNames.REGISTRATION}
                component={RegistrationScreen}
                options={{ headerShown: false }}
            />

            <Stack.Screen
                name={RouteNames.DASHBOARD}
                component={DashboardScreen}
                options={{ headerShown: false }}
            />

        </Stack.Navigator>
    )
}

export default StackNav;

