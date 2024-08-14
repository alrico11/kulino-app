import React from "react";
import { View } from "react-native";
import Bg from "../svg/bg.svg";

export const BgMain: React.FC = () => {
  return (
    <View style={{ flex: 1,height : '100%' }}>
      <Bg style={{ position: 'absolute', top: 0, width: '100%', height: '50%' }} />
      <View style={{ flex: 1, backgroundColor: 'white' }} />
      <Bg style={{ position: 'absolute', bottom: 0, width: '100%', height: '50%', transform: [{ rotate: '180deg' }] }} />
    </View>
  );
};
