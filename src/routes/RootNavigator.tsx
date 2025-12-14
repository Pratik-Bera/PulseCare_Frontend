// Predefined import
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from "react";

// self defined imports
import Login from './../screens/Login';
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

        </Stack.Navigator>
    )
}

export default StackNav;

