import React from "react";
import { StyleSheet, View } from "react-native";
import Sorter from "../svg/sorter.svg";

interface ISortIcon {
  height : number 
  width: number
}

export const SortIcon: React.FC<ISortIcon>= ({height,width}) => {
  return (
    <View>
      <Sorter style={{height,width}} />
   </View>
  );
};