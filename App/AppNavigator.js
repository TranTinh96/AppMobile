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

const Homes =createStackNavigator({homeScreen});
const Tables =createStackNavigator({tableScreen});
const Alarms =createStackNavigator({alarmScreen});
const Settings =createStackNavigator({settingScreen});



const AppNavigator = createBottomTabNavigator(
  {
    Homes: {
      screen:Homes,
      navigationOptions:{
        tabBarIcon:({tincolor})=>(
          <Icon name="home" size={25}  color={'#1DA1F2'}/>
        )
      }
    },
    Tables: {
      screen:tableScreen,
      navigationOptions:{
        tabBarIcon:({tincolor})=>(
          <Icon name="grid-on"  size={23} color={'#1DA1F2'} />
        )
      }
    },
    Alarms: {
      screen:Alarms,
      navigationOptions:{
        tabBarIcon:({tincolor})=>(
          <Icon name="access-alarms"  size={25} color={'#1DA1F2'}/>
        )
      }
    },
    Settings: {
      screen:Settings,
      navigationOptions:{
        tabBarIcon:({tincolor})=>(
          <Icon name="reorder"  size={25} color={'#1DA1F2'}/>
        )
      }
    },
  },
  {
    initialRouteName: 'Homes',
    tabBarOptions: {
      activeBackgroundColor:"#F5F8FA",
      inactiveBackgroundColor:"white",
      navigationOptions:{
      },
      labelStyle: {
        fontSize: 0,
      },
      style: {
        backgroundColor: 'white',
        borderColor: '#e6e6e6',
      },
    },
  },
);

export default AppNavigator
