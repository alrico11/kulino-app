import React from "react";
import { StyleSheet, View } from "react-native";
import Billing from "../svg/billing.svg";

export const BillingIcon: React.FC = () => {
  return (
    <View style={{justifyContent: "center",alignItems: "center"}}>
     <View style={styles.container}>
      <Billing style={styles.contentItem} />
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