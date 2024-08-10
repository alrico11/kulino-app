import { NavigationProp, useNavigation } from "@react-navigation/native";
import { RootStackParamList, RootStackParamListKey } from "src/(navigation)";

export const useRouteNavigator = () => {
  const nav = useNavigation<NavigationProp<RootStackParamList>>();

  const navigateTo = (
    route: RootStackParamListKey, 
    params?: Partial<RootStackParamList[RootStackParamListKey]>
  ) => {
    nav.navigate(route, params);
  };

  return navigateTo;
};
