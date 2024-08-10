import React from "react";
import { StyleSheet, View } from "react-native";
import ArrowLeft from "../svg/arrow-left.svg";

interface IArrowLeftIcon {
  height?: number;
  width?: number;
  rotation?: number;
}

export const ArrowLeftIcon: React.FC<IArrowLeftIcon> = ({ height = 24, width = 24, rotation = 0 }) => {
  return (
    <View style={styles.iconContainer}>
      <ArrowLeft height={height} width={width} style={{ transform: [{ rotate: `${rotation}deg` }] }} />
    </View>
  );
};

const styles = StyleSheet.create({
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});
