import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class alarmScreen extends Component {
  static navigationOptions = {
    title: 'Alarm',
  };
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Alarm</Text>
      </View>
    );
  }
}
