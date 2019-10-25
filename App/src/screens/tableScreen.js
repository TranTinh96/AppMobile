import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import bonChiet from "../table/table.bonchiet";
import soCap from "../table/table.soCap";
import thuCap from "../table/table.thuCap";

const tableScreen = createMaterialTopTabNavigator(
  {
    bonChiet,
    soCap,
    thuCap,
  },
  {
    initialRouteName: 'bonChiet',
    tabBarOptions: {
      activeBackgroundColor: '#F5F8FA',
      inactiveBackgroundColor: 'white',
      navigationOptions: {},
      labelStyle: {
        fontSize: 10,
      },
      style: {
        borderColor: '#e6e6e6',
        color:"black"
      },
    },
  },
);

export default createAppContainer(tableScreen);