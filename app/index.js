import React, { Component } from "react";
import { Provider } from "react-redux";
import SplashScreen from "react-native-splash-screen";
import { store } from "./configureStore";
import ARKAppRoutes from './routes'

export default class App extends Component {
    constructor(props) {
      super(props);
    }
    
    
    componentDidMount() {
      setTimeout(() => {
        SplashScreen.hide();
      }, 1000);
     
    }
//mukesh
  

    render() {
      console.disableYellowBox = true;
      return (
        <Provider store={store}>
          
            <ARKAppRoutes />
        </Provider>
      );
    }
  }
  