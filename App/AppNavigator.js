import React, {Component} from 'react';
import { createStackNavigator,createBottomTabNavigator } from 'react-navigation';

import homeScreen from "./src/screens/homeScreen"
import tableScreen from "./src/screens/tableScreen"
import alarmScreen from "./src/screens/alarmScreen"
import Sign from './src/authentication/sign'
import Signin from './src/authentication/signin'
import Signup from './src/authentication/signup'

/*
const AppNavigator = createStackNavigator(
  { 
    Sign , Signin , Signup 
  },
  {
    initialRouteName: 'Sign',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#3b5998',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    },
  }
);
*/
  
const TabNavigator = createBottomTabNavigator({
  homeScreen,tableScreen,alarmScreen

});

export default TabNavigator
