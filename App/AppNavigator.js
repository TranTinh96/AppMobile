import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import homeScreen from "./src/screens/homeScreen"
import tableScreen from "./src/screens/tableScreen"
import alarmScreen from "./src/screens/alarmScreen"
import sign from './src/authentication/sign'
import signin from './src/authentication/signin'
import signup from './src/authentication/signup'


const AppNavigator = createStackNavigator(
  { 
    Sign :sign,
    Signin :signin,
    Signup : signup,
    Home: homeScreen,
    Tables: tableScreen,
    Alarms: alarmScreen,
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
  

export default AppNavigator
