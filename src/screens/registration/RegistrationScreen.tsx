import GlobalStyles from '@/src/utils/Styles';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import useRegistrationViewModel from './RegistrationViewModel';

export default function RegistrationScreen() {

    const{} = useRegistrationViewModel();

  return (
    <View style={GlobalStyles.container}>
      <Text>RegistrationScreen</Text>
    </View>
  )
}

const styles = StyleSheet.create({})