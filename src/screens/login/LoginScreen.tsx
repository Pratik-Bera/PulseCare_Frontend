import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import useLoginViewModel from './LoginViewModel';

export default function LoginScreen() {

    const {
        username,
        setUsername,
        password,
        setPassword,
        handleLogin
    } = useLoginViewModel();

    return (
        <SafeAreaView >
            {/* <Image 
      source={require('../../assets/images/image 1569.png')}
      style={{width:"50%", height:"25%", alignSelf:'center', marginTop:50}}
      /> */}
            <Text style={{ fontSize: 30, textAlign: 'center', marginTop: 20 }}>Welcome Back!</Text>
            <Text style={{ fontSize: 16, textAlign: 'center', marginTop: 10, color: 'gray' }}>Use Credentials to acees your account</Text>
            <TextInput
                style={styles.textInput}
                placeholder="Enter Username :"
                onChangeText={(text) => setUsername(text)}
                value={username}
            />
            <TextInput
                style={styles.textInput}
                placeholder="Enter Password :"
                onChangeText={(text) => setPassword(text)}
                value={password}
                secureTextEntry={true}
            />
            <Text style={{ textAlign: 'right', marginRight: 15, color: '#6839d6ff' }}>Forgot Password?</Text>
            <View style={{ marginHorizontal: 15, marginTop: 20, borderRadius: 10, overflow: 'hidden' }}>
                <Button
                    title="Log in"
                    color='#996be3ff'
                    onPress={handleLogin}
                />
            </View>
            <View style={{ borderBottomWidth: 1, marginTop: 10, marginHorizontal: 15, borderColor: 'gray' }}><Text></Text></View>
            <View style={{ marginHorizontal: 15, marginTop: 20, borderRadius: 10, gap: 10 }}>
                <Button
                    title="Sing in with Google"
                    color='#3b5998'
                />
                <Button
                    title="Sing in with Apple"
                    color='#3b5998'

                />

            </View>
            <Text style={{ textAlign: 'center', marginTop: 20 }}>Don't have an account? <Text style={{ color: '#6839d6ff' }}>Sign Up</Text></Text>
        </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    textInput: {
        fontSize: 15,
        padding: 10,
        borderWidth: 2,
        color: "black",
        borderColor: "gray",
        margin: 15,
        borderRadius: 10,
    }
})