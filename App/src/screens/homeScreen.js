import React, {Component} from 'react';
import {Container,Button,Text} from "native-base"


export default class homeScreen extends Component {
  static navigationOptions = {
    title: 'Home',
  };
  render() {
    const {navigation} = this.props;
    return (
      <Container
        style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button primary onPress={() => {
            navigation.navigate('Tables', { name :'Home'});
          }}>
          <Text>Table</Text>
        </Button>
      </Container>
    );
  }
}

