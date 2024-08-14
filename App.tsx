import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
import AppNavigator from 'src/(navigation)/navigator';
import { Text, View } from 'react-native';

const App: React.FC = () => {
  return (
        <AppNavigator />
  );
};

export default App