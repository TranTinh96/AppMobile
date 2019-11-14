import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation';
import AppNavigator from "./AppNavigator";
import axios from 'axios';

const AppContainer = createAppContainer(AppNavigator);


//axios.defaults.url=" 192.168.137.1:5000"
export default class App extends Component {
  render() {
    return <AppContainer/>
  }
}
