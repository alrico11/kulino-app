import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { HeaderCustom } from '../components';
import { RootStackParamList } from './navigator.@types';
import { BillScreen, CreateCustomerScreen, CustomerScreen, LoginScreen, NewsScreen, ReportScreen } from 'src/main';
import TabLayout from 'src/(tabs)/tabs';

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CREATE_CUSTOMER_SCREEN">
        <Stack.Screen name="LOGIN_SCREEN" component={LoginScreen} options={{ headerShown: false }} />
        
        {/* TAB */}
        <Stack.Group screenOptions={{ headerShown: false }}>
          <Stack.Screen name="MAIN_SCREEN" component={TabLayout} />
          <Stack.Screen name="ENTRY_SCREEN" component={TabLayout} />
          <Stack.Screen name="PROFILE_SCREEN" component={TabLayout} />
        </Stack.Group>

        {/* HOME */}
        <Stack.Group screenOptions={({ navigation }) => ({
          header: ({ route }) => {
            const titles: { [key in keyof RootStackParamList]?: string } = {
              CUSTOMER_SCREEN: 'Pelanggan',
              BILL_SCREEN: 'Tagihan',
              REPORT_SCREEN: 'Aduan',
              NEWS_SCREEN: 'Pengumuman',
            };
            return <HeaderCustom title={titles[route.name as keyof RootStackParamList]!} navigation={navigation} routes="MAIN_SCREEN" />;
          },
        })}>
          <Stack.Screen name="CUSTOMER_SCREEN" component={CustomerScreen} />
          <Stack.Screen name="BILL_SCREEN" component={BillScreen} />
          <Stack.Screen name="REPORT_SCREEN" component={ReportScreen} />
          <Stack.Screen name="NEWS_SCREEN" component={NewsScreen} />
        </Stack.Group>

        {/* CUSTOMER */}
        <Stack.Group screenOptions={({ navigation }) => ({
          header: ({ route }) => {
            const titles: { [key in keyof RootStackParamList]?: string } = {
              CREATE_CUSTOMER_SCREEN: 'Tambah Pelanggan',
            };
            return <HeaderCustom title={titles[route.name as keyof RootStackParamList]!} navigation={navigation} routes="CUSTOMER_SCREEN" />;
          },
        })}>
          <Stack.Screen name="CREATE_CUSTOMER_SCREEN" component={CreateCustomerScreen}/>
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
