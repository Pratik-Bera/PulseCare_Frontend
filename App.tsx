import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
/*Self defined imports */
import { StatusBar } from 'react-native';
import { RootNavigator } from './src/routes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor="#FFFFFF"
      />
      <RootNavigator />
      {/* <DrawerNav/> */}
    </NavigationContainer>
  )
}