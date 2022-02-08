import React, {Component} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import DrawerNavigator from './drawerNavigator';
import * as NavigationService from '../utils/NavigationService';

const ARKRoutes = NavigationContainer({
    AppStackRoutes: {screen: DrawerNavigator, path:'app'},
});

class ARKAppRoutes extends Component {
    static propTypes = {
      
    };
  
    constructor(props) {
      super(props)
     
    }
  
    componentWillUnmount() {
    }
  
    componentDidMount() {
      NavigationService.setNavigator(this.navigator)
    }
  
  
    render() {
    
      return (
        <ARKRoutes
          ref={nav => {
            this.navigator = nav;
          }} />
      )
    }
  }
  
  const mapStateToProps = state => ({})
  
  export default connect(
    mapStateToProps,
    {
    },
  )(ARKAppRoutes)