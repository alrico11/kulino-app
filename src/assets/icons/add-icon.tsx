import React from "react";
import { View } from "react-native";
import Add from "../svg/add.svg";

interface IAddIcon {
  height: number;
  width: number;
}

export const AddIcon: React.FC<IAddIcon> = ({ height = 50, width = 50 }) => {
  return (
    <View style={{width,height, borderRadius:height/2,backgroundColor:'#057B9F', justifyContent:'center', alignItems:'center'}}>
        <Add height={height/2} width={width/2}></Add>
    </View>
  );
};