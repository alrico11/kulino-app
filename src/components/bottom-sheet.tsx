import React, { useState, useEffect } from "react";
import { Dimensions, Image, Text, TouchableOpacity, View, Platform, KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback } from "react-native";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useRouteNavigator } from "src/hooks";
import CustomButton from "./custom-button";
import { TextInputs } from "./text-inputs";
import { TextInputPassword } from "./text-inputs-password";

const InputLabel: React.FC<{ label: string; required?: boolean }> = ({ label, required }) => (
  <View style={{ flexDirection: 'row', paddingBottom: 4 }}>
    <Text style={{ fontSize: 14 }}>{label}</Text>
    {required && <Text style={{ color: 'red' }}>*</Text>}
  </View>
);

export const BottomSheet: React.FC = () => {
  const { width, height } = Dimensions.get("window");
  const [keyboardHeight, setKeyboardHeight] = useState(0);
  const nav = useRouteNavigator()

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', (e) => {
      setKeyboardHeight(e.endCoordinates.height);
    });
    const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
      setKeyboardHeight(0);
    });

    return () => {
      keyboardDidHideListener.remove();
      keyboardDidShowListener.remove();
    };
  }, []);

  const handleLogin = () => {
    nav("PROFILE_SCREEN");
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <KeyboardAvoidingView
        style={{ flex: 1, backgroundColor: '#FFFFFF', borderRadius: 20, paddingHorizontal: 20, marginTop: height / 2 - keyboardHeight }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <KeyboardAwareScrollView
          style={{ flex: 1 }}
          contentContainerStyle={{ flexGrow: 1 }}
        >
          <View style={{ paddingTop: 14.5, justifyContent: 'center', alignItems: 'center', paddingBottom: 40.5 }}>
            <Image source={require('src/assets/images/vector.jpg')} />
          </View>
          <View>

            <View style={{paddingBottom:20}}>
              <InputLabel required label={'Nama Pengguna'} />
              <TextInputs placeholder="Masukkan nama pengguna" />
            </View>

            <View>
              <InputLabel required label={'Kata Sandi'} />
              <View>
                <TextInputPassword placeholder="Masukkan kata sandi" />
            </View>

              <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingTop:20 }}>
                <Text>Ingatkan saya</Text>
                <Text>Lupa Kata Sandi?</Text>
              </View>
            </View>
            <TouchableOpacity>
              <View style={{ paddingTop: 30 }}>
                <CustomButton onPress={handleLogin} title="Login" bgColor="#5C88BC" textColor="#FFFF" />
              </View>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', justifyContent: 'center', paddingTop: 34 }}>
              <View style={{ paddingRight: 5 }}>
                <Image source={require('src/assets/icons/logo.png')} />
              </View>
              <Image source={require('src/assets/icons/UDINUS.png')} />
            </View>

          </View>
        </KeyboardAwareScrollView>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
};
