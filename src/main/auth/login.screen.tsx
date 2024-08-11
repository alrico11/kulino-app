import React, { useState } from "react";
import { KeyboardAvoidingView, Platform, Text, View } from "react-native";
import { useRouteNavigator } from "src/hooks";
import { IconBumdes } from "src/assets/icons";
import CustomButton from "src/components/custom-button/custom-button";
import { TextInputs } from "src/components/text-input/text-input";

export const LoginScreen: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigateTo = useRouteNavigator();

  const handleLogin = async () => {
    try {
      navigateTo('MAIN_SCREEN');
      // await AuthService.login({ email, password });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 60 : 0}
    >
      <View style={{ flex: 1, alignContent: 'center', padding: 16, backgroundColor: '#fff' }}>
        <View style={{ paddingBottom: 16 }}>
          <View style={{ height: 82, width: 120, alignSelf: 'center' }}>
            <IconBumdes />
          </View>
          <View style={{ marginTop: 30 }}>
            <Text style={{ fontSize: 24, textAlign: 'center', marginBottom: 6 }}>
              Selamat Datang
            </Text>
            <Text style={{ fontSize: 12, color: '#7A7A7A', textAlign: 'center' }}>
              Masukkan Email dan kata sandi Anda yang terdaftar untuk masuk ke aplikasi PAMSIMAS.
            </Text>
          </View>
        </View>
        <TextInputs onChangeText={setEmail} placeholder="example@gmail.com" secureTextEntry={false} value={email}/> 
        <TextInputs onChangeText={setPassword} placeholder="Masukan kata sandi" secureTextEntry value={password}/>
        <Text style={{ textAlign: 'right', marginHorizontal: 8, marginBottom: 20 }}>
          Lupa ID Pelanggan?
        </Text>
        <CustomButton title="Masuk" onPress={handleLogin} bgColor="#057B9F" textColor="#FFFF"/>
      </View>
    </KeyboardAvoidingView>
  );
};
