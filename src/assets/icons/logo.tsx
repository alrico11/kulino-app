import React from "react";
import { StyleSheet, View } from "react-native";
import Bumdes from "../svg/Bumdes.svg";

export const IconBumdes: React.FC = () => {
  return (
    <View style={styles.container}>
      <Bumdes width={120} height={82} />
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