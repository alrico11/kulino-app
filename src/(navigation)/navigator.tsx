import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { LoginScreen } from 'src/main';
import { RootStackParamList } from './navigator.@types';
import { ProfileScreen } from 'src/main/profile';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LOGIN_SCREEN">
        <Stack.Screen name="LOGIN_SCREEN" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="PROFILE_SCREEN" component={ProfileScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
