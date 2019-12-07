import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation';
import AppNavigator from "./AppNavigator";
import axios from 'axios';

const AppContainer = createAppContainer(AppNavigator);


axios.defaults.baseURL="192.168.1.124:5000/"
export default class App extends Component {
  render() {
    return <AppContainer/>
  }
}
