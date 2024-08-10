import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import AppNavigator from './src/(navigation)/navigator';
import { StatusBar } from 'expo-status-bar';

const App: React.FC = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="auto" translucent backgroundColor="#2A9EC3"/>
        <AppNavigator />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default App