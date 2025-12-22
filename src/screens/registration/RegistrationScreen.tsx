import GlobalStyles from '@/src/utils/Styles';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import TextInputField from '../../components/Inputs/TextInput';
import useRegistrationViewModel from './RegistrationViewModel';

export default function RegistrationScreen() {

  const { } = useRegistrationViewModel();

  return (
    <View style={[GlobalStyles.container, GlobalStyles.alignCenter, { justifyContent: 'center' }]}>
      <View style={{...GlobalStyles.width90 }}>
        <TextInputField leftIcon="mail" rightIcon="eye" />
      </View>
      <View style={{...GlobalStyles.width90 }}>
        <TextInputField />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({})