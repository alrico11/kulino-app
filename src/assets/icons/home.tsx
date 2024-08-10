import React from 'react';
import { StyleSheet, View } from 'react-native';
import Home from '../svg/home.svg'; // Path to your SVG file

interface IHomeIcon {
  color: string;
  width?: number;
  height?: number;
}

export const HomeIcon: React.FC<IHomeIcon> = ({color, height = 24, width = 24}) => {
  return (
    <View style={styles.container}>
      <Home width={width} height={height} fill={color !== "#057B9F" ? "#FFFF" : "#057B9F" } stroke={color === "#057B9F" ? "#FFFF" : "#666666"} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

