import React, { useState, useEffect } from "react";
import { Dimensions, Image, Text, TouchableOpacity, View, Platform, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useRouteNavigator } from "src/hooks";
import CustomButton from "./custom-button";
import { TextInputs } from "./text-inputs";
import { SwipeUp } from "src/assets/icons/udinus2";

const InputLabel: React.FC<{ label: string; required?: boolean }> = ({ label, required }) => (
  <View style={{ flexDirection: 'row', paddingBottom: 4 }}>
    <Text style={{ fontSize: 14 }}>{label}</Text>
    {required && <Text style={{ color: 'red' }}>*</Text>}
  </View>
);

export const BottomSplash: React.FC = () => {
  const { width, height } = Dimensions.get("window");
  const nav = useRouteNavigator()

  const handleLogin = () => {
    nav("LOGIN_SCREEN");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View
        style={{ flex: 1, borderRadius: 20, paddingHorizontal: 20, marginTop: height / 1.08 }}
      >
        <View style={{justifyContent:'center', alignItems:'center'}}>
          <View style={{paddingBottom:30}}>
          <TouchableOpacity onPress={handleLogin}>
            <SwipeUp/>
          </TouchableOpacity>
          </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 34 }}>
            <View style={{ paddingRight: 5 }}>
              <Image source={require('src/assets/icons/logo.png')} />
            </View>
            <Image source={require('src/assets/icons/UDINUS.png')} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};
