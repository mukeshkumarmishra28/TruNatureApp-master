
import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import { RequestStackNavigator,MyIdStackNavigator,NewsStackNavigator ,SurveyStackNavigator ,MainStackNavigator} from "./stackNavigator";
import TabNavigator from "./tabNavigator";
import DrawerCustomComponent from 'tncomponents/drawerComponent'
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
    drawerContent={(props) => <DrawerCustomComponent {...props} />}>
    
      <Drawer.Screen name="Home" component={MainStackNavigator}  />
      <Drawer.Screen name="Request" component={RequestStackNavigator} />
      <Drawer.Screen name="Profile" component={MyIdStackNavigator} />
      <Drawer.Screen name="News" component={NewsStackNavigator} />
      <Drawer.Screen name="Survey" component={SurveyStackNavigator} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;