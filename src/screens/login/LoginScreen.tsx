import CustomButton from '@/src/components/Inputs/CustomButton'
import TextInputField from '@/src/components/Inputs/TextInput'
import FacebookLogo from '@/src/components/svgComponents/FacebookLogo'
import GoogleLogo from '@/src/components/svgComponents/GoogleLogo'
import LogoSvg from '@/src/components/svgComponents/LogoSvg'
import Color from '@/src/utils/Color'
import { normalizeScale } from '@/src/utils/sharedFunction'
import GlobalStyles from '@/src/utils/Styles'
import React from 'react'
import { KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import useLoginViewModel from './LoginViewModel'

export default function LoginScreen() {

  const { 
    formData, 
    handleInputChange,
    onPressLogin,
    passwordVisible,
    setPasswordVisible
   } = useLoginViewModel();


  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={[GlobalStyles.container, GlobalStyles.alignCenter]}>


          <View style={[GlobalStyles.alignJustifyCenter, { flex: 0.27, gap: normalizeScale(10) }]}>
            <LogoSvg width={normalizeScale(100)} height={normalizeScale(100)} />
            <Text style={{ fontSize: normalizeScale(20), color: Color.secondary, fontWeight: 'bold' }}>Pulse
              <Text style={{ color: Color.deepPrimary }}>Care</Text></Text>
          </View>

          <View style={[GlobalStyles.alignCenter, GlobalStyles.width95, { flex: 0.33, justifyContent: "space-between" }]}>

            <View style={{ alignItems: 'center', gap: normalizeScale(8) }}>
              <Text style={{ color: Color.deepPrimary, fontSize: normalizeScale(25), fontWeight: 'bold' }}>Hi, Welcome Back!</Text>
              <Text style={{ color: Color.secondary, fontSize: normalizeScale(16) }}>Hope you’re doing fine.</Text>
            </View>

            <View style={{ gap: normalizeScale(8) }}>
              <TextInputField
                label='Email'
                value={formData.email}
                onChange={(e: any) => handleInputChange('email', e.nativeEvent.text)}
                leftIcon="mail"
              />

              <TextInputField
                label='Password'
                secureTextEntry={!passwordVisible}
                leftIcon="lock-closed"
                onChange={(e: any) => handleInputChange('password', e.nativeEvent.text)}
                rightIcon={passwordVisible ? "eye" : "eye-off"}
                rightIconPress={() => setPasswordVisible(!passwordVisible)}
              />
            </View>

            <View style={{ width: '100%', height: normalizeScale(50) }}>
              <CustomButton title="Sign In" onPress={onPressLogin} />
            </View>

          </View>


          <View style={{ flex: 0.4, alignItems: 'center', justifyContent: 'space-around', paddingVertical: normalizeScale(10) }}>

            <View style={[GlobalStyles.width90,
            { borderTopWidth: 2, borderColor: Color.secondary, alignItems: "center" }]}>
              <Text
                style={{
                  position: 'absolute', height: normalizeScale(20), width: normalizeScale(30), backgroundColor: Color.white, top: -normalizeScale(14),
                  fontSize: normalizeScale(16), color: Color.secondary, textAlign: 'center'
                }}>
                or
              </Text>
            </View>

            <View style={{gap:normalizeScale(10)}}>
              <TouchableOpacity
                style={styles.signInBottomBtn}
              >
                <GoogleLogo width={normalizeScale(25)} height={normalizeScale(25)} />
                <Text style={{ fontSize: normalizeScale(16), color: Color.secondary }}>Sign in with Google</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.signInBottomBtn}
              >
                <FacebookLogo width={normalizeScale(25)} height={normalizeScale(25)} />
                <Text style={{ fontSize: normalizeScale(16), color: Color.secondary }}>Sign in with Google</Text>
              </TouchableOpacity>
            </View>

            <Text style={{color: Color.linkBlue}}> Forgot password? </Text>

            <Text style={{color: Color.secondary}}>Don’t have an account yet?<Text style={{color: Color.linkBlue}}> Sign up</Text></Text>









          </View>




        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}

const styles = StyleSheet.create({

  signInBottomBtn: {
    ...GlobalStyles.width95,
    justifyContent: "center",
    height: normalizeScale(50),
    borderWidth: 2,
    borderColor: Color.secondary,
    borderRadius: 7,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: normalizeScale(20),
    gap: normalizeScale(10)
  }
})