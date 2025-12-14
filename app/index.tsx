import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { enableScreens } from 'react-native-screens';

// ✅ enable native screen optimizations
enableScreens();

// import screens
import HomeScreen from './../src/screens/Login';
import DetailsScreen from './../src/screens/Starter';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Welcome' }}
        />

        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ title: 'Details Page' }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
