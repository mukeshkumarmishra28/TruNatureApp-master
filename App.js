import React, { Component } from "react";
import { Provider } from "react-redux";
import SplashScreen from "react-native-splash-screen";
import { store } from "./app/configureStore";
//import ARKAppRoutes from './routes' amit kumar mukesh
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './app/routes/drawerNavigator';
const App = () => {
  return (
    <Provider store={store}>
     <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
    </Provider>
   
  );
};
export default App;