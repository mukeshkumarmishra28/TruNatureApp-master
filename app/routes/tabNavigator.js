import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { MainStackNavigator, RequestStackNavigator,SearchStackNavigator,MyIdStackNavigator } from "./stackNavigator";
import {TabIcon} from 'tncomponents/tabBadgeAndIcon'
const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
     screenOptions={({ route }) => ({
         // tabBarVisible: getTabBarVisible(route),
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let type='FontAwesome5'
            if (route.name === 'Home') {
              iconName = 'home'
            } else if(route.name === 'Request') {
              type='MaterialCommunityIcons'
              iconName ='page-next-outline';
            }else if(route.name === 'Search') {
              type="Feather"
              iconName ='search';
            }else if(route.name === 'My ID') {
              type="MaterialCommunityIcons"
              iconName ='account-outline';
            }

            // You can return any component that you like here!
           // return <Ionicons name={iconName} size={size} color={color} />;
           return <TabIcon name={iconName} color={color} type={type} />
          
          },
        })}
        tabBarOptions={{
          activeTintColor: '#0065BB',
          inactiveTintColor: 'gray',
        }}
    >
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="Request" component={RequestStackNavigator} />
      <Tab.Screen name="Search" component={SearchStackNavigator} />
      <Tab.Screen name="My ID" component={MyIdStackNavigator} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;