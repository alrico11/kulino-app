import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface TabLabelProps {
  label: string;
  focused: boolean;
}

const TabLabel: React.FC<TabLabelProps> = ({ label, focused }) => {
  return (
    <View style={styles.container}>
      {/* <Text style={[styles.label, { color: focused ? '#057B9F' : 'gray' }]}>{label}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  label: {
    fontSize: 12,
  },
});

export default TabLabel;
