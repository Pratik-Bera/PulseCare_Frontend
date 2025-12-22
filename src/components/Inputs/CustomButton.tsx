import Color from '@/src/utils/Color'
import { normalizeScale } from '@/src/utils/sharedFunction'
import GlobalStyles from '@/src/utils/Styles'
import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function CustomButton(props: any) {
    return (
        <TouchableOpacity
            onPress={props.onPress || (() => { console.log("Button Pressed") })}
            style={[GlobalStyles.alignJustifyCenter,
            { flex: 1, backgroundColor: props.btnColor || Color.deepPrimary, borderRadius: 50 }]}>
            <Text style={{ color: props.textColor || Color.white, fontSize: normalizeScale(props.textSize || 16), fontWeight: 'bold' }}>{props.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({})