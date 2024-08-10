import React from "react";
import { View } from "react-native";
import Pencil from "../svg/pencil.svg";

interface IPencilIcon {
  height: number;
  width: number;
}

export const PencilIcon: React.FC<IPencilIcon> = ({ height = 36, width = 36 }) => {
  return (
    <View style={{width,height, borderRadius:8,backgroundColor:'#057B9F', justifyContent:'center', alignItems:'center'}}>
        <Pencil height={height/2} width={width/2}></Pencil>
    </View>
  );
};