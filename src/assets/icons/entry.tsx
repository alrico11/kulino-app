import React from "react";
import { StyleSheet, View } from "react-native";
import Entry from "../svg/entry.svg";

interface IEntryIcon {
  color? : string
  width? : number
  height? : number
}

export const EntryIcon: React.FC<IEntryIcon> = ({color,height = 24,width=24 }) => {
  return (
    <View style={styles.container}>
      <Entry width={width} height={height} fill={color} stroke={color} />
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