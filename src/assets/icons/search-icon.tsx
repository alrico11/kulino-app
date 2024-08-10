import React from "react";
import { StyleSheet, View } from "react-native";
import Search from "../svg/search.svg";

interface ISearchIcon {
  height : number 
  width: number
}

export const SearchIcon: React.FC<ISearchIcon>= ({height,width}) => {
  return (
    <View style={{height,width,...styles.container}}>
     <Search style={styles.contentItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: "#057B9F",
    justifyContent: "center",
    alignItems: "center",
    marginBottom:10
  },
  contentItem: {
    height: 18,
    width: 18,
  },
});