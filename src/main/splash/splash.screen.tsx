import React from "react";
import { Image, StyleSheet, View } from "react-native";
import { BottomSheet } from "src/components/bottom-sheet";
import { BottomSplash } from "src/components/bottom-splash";

export const Splashscreen: React.FC = () => {
  
  return (
    <View style={{flex:1}}>
      <View style={{backgroundColor:'#FFF', alignItems:'center', justifyContent:'center'}}>
        <Image
          source={require('src/assets/images/Splashscreen.jpg')}
          style={styles.background}
          resizeMode="stretch"
        />
        <View style={{flex:1,justifyContent:'center', alignItems:'center', right:0, left:0, position:'absolute',paddingTop:'30%'}}>
          <Image source={require('assets/images/icon-udinus.jpg')}/>
        </View>
        <BottomSplash/>
      </View>
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
