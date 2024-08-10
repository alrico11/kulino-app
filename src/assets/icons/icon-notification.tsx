import React from "react";
import { StyleSheet, View } from "react-native";
import Notif from "../svg/notifcation.svg";

export const IconNotification: React.FC = () => {
  return (
    <View style={styles.container}>
      <Notif width={17} height={20} />
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

