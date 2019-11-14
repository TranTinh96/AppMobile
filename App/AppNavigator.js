import React, {Component} from 'react';
import { createStackNavigator} from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import homeScreen from "./src/screens/homeScreen"
import tableScreen from "./src/screens/tableScreen"
import alarmScreen from "./src/screens/alarmScreen"
import settingScreen from "./src/screens/settingScreen"
import Sign from './src/authentication/sign'
import Signin from './src/authentication/signin'
import Signup from './src/authentication/signup'


const Authentication= createStackNavigator(
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
const AppNavigator = createBottomTabNavigator(
  {
    Homes: {
      screen:homeScreen,
      navigationOptions:{
        tabBarIcon:({focused, horizontal,tintColor})=>(
          <Icon name="home" size={25}  color={tintColor}/>
        )
      }
    },
    Tables: {
      screen:tableScreen,
      navigationOptions:{
        tabBarIcon:({focused, horizontal,tintColor})=>(
          <Icon name="grid-on"  size={23} color={tintColor} />
        )
      }
    },
    Alarms: {
      screen:alarmScreen,
      navigationOptions:{
        tabBarIcon:({focused, horizontal,tintColor})=>(
          <Icon name="notifications-none"  size={26} color={tintColor}/>
        )
      }
    },
    Settings: {
      screen:settingScreen,
      navigationOptions:{
        tabBarIcon:({focused, horizontal,tintColor})=>(
          <Icon name="reorder"  size={25} color={tintColor}/>
        )
      }
    },
  },
  {
    initialRouteName: 'Homes',
    tabBarOptions: {
      activeTintColor:'#405DE6',
      inactiveTintColor:'#AAAAA9',
      navigationOptions:{
      },
      labelStyle: {
        fontSize: 0,
      },
      style: {
        backgroundColor:"white",
        borderColor: '#e6e6e6',
      },
    },
  },
);

export default Authentication;
