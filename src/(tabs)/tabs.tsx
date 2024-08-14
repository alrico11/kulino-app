// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import React from 'react';
// import { EntryIcon, HomeIcon, PersonIcon } from '../assets/icons';
// import { EntryScreen, HomeScreen, ProfileScreen } from 'src/main';

// const Tab = createBottomTabNavigator();

// const TabLayout: React.FC = () => {
//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ color}) => {
//           switch (route.name) {
//             case 'HOME':
//               return <HomeIcon  color={color}   />;
//             case 'ENTRY':
//               return <EntryIcon  color={color}   />;
//             case 'PROFILE':
//               return <PersonIcon color={color}  />;
//             default:
//               return null;
//           }
//         },
//         tabBarStyle: {
//           borderTopWidth: 0, 
//           elevation: 0,
//           shadowOpacity: 0, 
//         },
//         tabBarActiveTintColor: '#057B9F',
//       })}
//     >
//       <Tab.Screen name="HOME"  options={{title:"Beranda",headerShown:false}} component={HomeScreen} />
//       <Tab.Screen name="ENTRY" options={{title:"Pembukuan",headerShown:false}} component={EntryScreen} />
//       <Tab.Screen name="PROFILE" options={{title:"Profil",headerShown:false}} component={ProfileScreen} />
//     </Tab.Navigator>
//   );
// };

// export default TabLayout;
