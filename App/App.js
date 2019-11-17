import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation';
import AppNavigator from "./AppNavigator";
import axios from 'axios';

const AppContainer = createAppContainer(AppNavigator);


axios.defaults.baseURL="http://192.168.137.1:3000/"
export default class App extends Component {
  render() {
    return <AppContainer/>
  }
}
