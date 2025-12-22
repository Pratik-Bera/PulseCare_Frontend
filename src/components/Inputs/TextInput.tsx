import Color from '@/src/utils/Color';
import { normalizeScale } from '@/src/utils/sharedFunction';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';

export default function index(props: any) {
  const [isFocused, setIsFocused] = React.useState(false);
  const inputRef = React.useRef<TextInput>(null);

  const handleFocus = () => {
    setIsFocused(true);
  }

  const handleBlur = () => {
    setIsFocused(false);
  }

  return (
    <View style={{ borderWidth: 2, borderColor: isFocused ? Color.primary : Color.secondary, borderRadius: normalizeScale(8), width: "100%", flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

      {props?.leftIcon &&
        <TouchableOpacity
          onPress={() => { }}
          style={{ padding: normalizeScale(8) }}
        >
          <Ionicons name={props.leftIcon} size={normalizeScale(22)} color={isFocused ? Color.primary : Color.secondary} />
        </TouchableOpacity>}

      <TextInput
        ref={inputRef}
        onFocus={handleFocus}
        onBlur={handleBlur}
        style={{ flex: 1, borderRadius: 5, paddingHorizontal: normalizeScale(5), height: normalizeScale(45), fontSize: normalizeScale(18), color: isFocused ? Color.primary : Color.secondary, }}
        placeholder="Your Name"
        placeholderTextColor={isFocused ? Color.primary : Color.secondary}
        secureTextEntry={props?.secureTextEntry || false}
        value={props.value}
        onChangeText={props.onChangeText}
        multiline={props.multiline || false}
        onChange={props.onChange}

      />


      {props.rightIcon &&
        <TouchableOpacity
          onPress={props.rightIconPress || (() => { })}
          style={{ padding: normalizeScale(8) }}
        >
          <Ionicons name={props.rightIcon} size={normalizeScale(22)} color={isFocused ? Color.primary : Color.secondary} />
        </TouchableOpacity>
      }
    </View>
  )
}

const styles = StyleSheet.create({})