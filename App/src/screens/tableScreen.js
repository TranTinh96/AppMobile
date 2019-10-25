import React, { Component } from 'react'
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';

import Chiet from "../table/table.bonchiet";
import soCap from "../table/table.soCap";
import thuCap from "../table/table.thuCap";

const tableScreen = createMaterialTopTabNavigator(
  {
    Chiet,
    soCap,
    thuCap,
  },
  {
    initialRouteName: 'Chiet',
    tabBarOptions: {
      navigationOptions: {},
      labelStyle: {
        fontSize: 14,
        fontFamily:"Poppins-Bold"
      },
      style: {
        borderColor: '#e6e6e6',
        color:"black",
        backgroundColor:"#35A7FF"
      },
    },
  },
);

export default createAppContainer(tableScreen);