import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { ArrowLeftIcon } from '../../assets/icons';
import { NavigationProp } from '@react-navigation/native';
import { RootStackParamList, RootStackParamListKey } from '../../(navigation)';
import { StackNavigationProp } from '@react-navigation/stack';

interface IHeaderCustom {
  title: string;
  routes: RootStackParamListKey;
  navigation: StackNavigationProp<RootStackParamList>;
}

export const HeaderCustom: React.FC<IHeaderCustom> = ({ title, routes, navigation }) => {

  const handleNavigation = () => {
    try {
      navigation.navigate(routes);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={{ backgroundColor: '#FFFFFF' }}>
      <View style={{ borderBottomLeftRadius: 20, borderBottomRightRadius: 20, height: 56, padding: 16, gap: 10, backgroundColor: "#2A9EC3" }}>
      <View style={{ flexDirection: 'row', alignSelf: 'flex-start', alignItems: 'center', gap: 10 }}>
        <TouchableOpacity onPress={handleNavigation}>
          <ArrowLeftIcon />
        </TouchableOpacity>
        <Text style={{ fontSize: 18, lineHeight: 21.78, color: "#FFFF" }}>{title}</Text>
      </View>
    </View>
    </View>
  );
};
