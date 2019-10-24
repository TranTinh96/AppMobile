import React, {Component} from 'react';
import {Container,Button,Text} from "native-base"


export default class homeScreen extends Component {
  render() {
    return (
      <Container
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Home</Text>
      </Container>
    );
  }
}

