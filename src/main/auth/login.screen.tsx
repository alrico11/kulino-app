import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { BottomSheet } from "src/components/bottom-sheet";
export const LoginScreen: React.FC = () => {
  
  return (
    <View style={{flex:1}}>
      <View style={{backgroundColor:'#FFF', alignItems:'center', justifyContent:'center'}}>
        <Image
          source={require('src/assets/images/Splashscreen.jpg')}
          style={styles.background}
          resizeMode="stretch"
        />
      </View>
      <View style={{flex:1,justifyContent:'center', alignItems:'center', right:0, left:0, position:'absolute',paddingTop:'30%'}}>
          <Image source={require('assets/images/icon-udinus.jpg')}/>
      </View>
        <BottomSheet/>
    </View>
  );
};

const styles = StyleSheet.create({ 
  background: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
  },
});
