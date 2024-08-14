import React from "react";
import { Image, KeyboardAvoidingView, Platform, TextInput, View } from "react-native";

interface ITextInput {
  placeholder: string;
}

export const TextInputPassword: React.FC<ITextInput> = ({ placeholder}) => {
  return (
    <View style={{borderBlockStartColor: '#F0F5FA',borderRadius: 8,backgroundColor: 'rgba(5, 123, 159, 0.1)',borderColor: '#82A7D0',height:46,flexDirection:'row',borderWidth:1,justifyContent:'space-between'}}>
      <View style={{}}>
        <TextInput
          style={{
            height:46,
            fontSize: 14,
            lineHeight: 16.94,
            borderRadius:8,
            marginBottom: 12,
            padding: 15,
          }}
          placeholderTextColor="#ACACAC"
          placeholder={placeholder}
          secureTextEntry={true}
          autoCapitalize="none"
        />
      </View>
      <View style={{paddingVertical:11,paddingRight:11,alignSelf:'center',right:0}}>
        <Image source={require('assets/images/eye.png')}/>
      </View>
    </View>
  );
};
