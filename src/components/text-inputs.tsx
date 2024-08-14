import React from "react";
import { KeyboardAvoidingView, Platform, TextInput, View } from "react-native";

interface ITextInput {
  numberOnly? : boolean;
  isTextBox?: boolean;
  secureTextEntry?: boolean;
  placeholder: string;
}

export const TextInputs: React.FC<ITextInput> = ({ placeholder, secureTextEntry, isTextBox, numberOnly}) => {
  return (
    <View style={{borderBlockStartColor: '#F0F5FA',borderRadius: 8,backgroundColor: 'rgba(5, 123, 159, 0.1)',borderColor: '#82A7D0',height:46,borderWidth:1}}>
      <TextInput
        style={{
          fontSize: 14,
          lineHeight: 16.94,
          borderRadius:8,
          marginBottom: 12,
          padding: 15,
        }}
        placeholderTextColor="#ACACAC"
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        autoCapitalize="none"
        multiline={isTextBox}
        numberOfLines={isTextBox ? 5 : 1} 
      />
    </View>
  );
};
