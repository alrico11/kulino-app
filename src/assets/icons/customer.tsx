import React from "react";
import { StyleSheet, View } from "react-native";
import Customer from "../svg/customer.svg";

export const CustomerIcon: React.FC = () => {
  return (
    <View style={{justifyContent: "center",alignItems: "center"}}>
     <View style={styles.container}>
      <Customer style={styles.contentItem} />
    </View>
   </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: "#2A9EC3",
    justifyContent: "center",
    alignItems: "center",
    marginBottom:10
  },
  contentItem: {
    height: 24,
    width: 24,
  },
});
