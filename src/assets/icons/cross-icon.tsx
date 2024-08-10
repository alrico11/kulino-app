import React from "react";
import { StyleSheet, View } from "react-native";
import Cross from "../svg/cross.svg";

interface ICrossIcon {
  height : number 
  width: number
}

export const CrossIcon: React.FC<ICrossIcon>= ({height,width}) => {
  return (
    <View>
      <Cross style={{height,width}} />
   </View>
  );
};