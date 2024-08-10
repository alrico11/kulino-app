import React from "react";
import { TextInput, View } from "react-native";

interface ITextInput {
  secureTextEntry : boolean
  placeholder : string
  value : string
  onChangeText : (text:string) => void
}

export const TextInputs : React.FC<ITextInput> = ({placeholder,secureTextEntry,value,onChangeText}) => {
  return (
    <View>
      <TextInput
          style={{
            height: 49,
            fontSize: 14,
            lineHeight: 16.94,
            borderBlockStartColor: '#057B9F',
            borderRadius: 8,
            backgroundColor: 'rgba(5, 123, 159, 0.1)',
            borderColor: '#057B9F',
            borderWidth: 1,
            marginBottom: 12,
            padding: 15,
          }}
          placeholderTextColor="#D6D6D6"
          placeholder={placeholder}
          value={value}
          secureTextEntry={secureTextEntry}
          onChangeText={onChangeText}
          autoCapitalize="none"
        />
    </View>  
  )
}