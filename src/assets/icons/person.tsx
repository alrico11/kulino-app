import React from "react";
import { StyleSheet, View } from "react-native";
import Person from "../svg/person.svg";

interface IPersonIcon {
  color? : string
  width? : number
  height? : number
}

export const PersonIcon: React.FC<IPersonIcon> = ({ color,height = 24,width = 24 }) => {
  return (
    <View style={styles.container}>
      <Person width={width} height={height} fill={color !== "#057B9F" ? "#FFFF" : "#057B9F" } stroke={color === "#057B9F" ? "#FFFF" : "#666666"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});