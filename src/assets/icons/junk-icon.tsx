import React from "react";
import { View } from "react-native";
import Junk from "../svg/junk.svg";

interface IJunkIcon {
  height: number;
  width: number;
}

export const JunkIcon: React.FC<IJunkIcon> = ({ height = 36, width = 36 }) => {
  return (
    <View style={{width,height, borderRadius:8,backgroundColor:'#EA4949', justifyContent:'center', alignItems:'center'}}>
        <Junk height={height/2} width={width/2}></Junk>
    </View>
  );
};