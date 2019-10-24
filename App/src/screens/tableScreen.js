import React, { Component } from 'react'
import {Container,Text,Button} from "native-base";

export default class tableScreen extends Component {
  static navigationOptions =({navigation})=>{
    return{
    title: navigation.getParam("name","NO-ID"),
  }
}
  render() {
    const {navigation} = this.props;
    return (
      <Container style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
          <Button  success  onPress={()=>{navigation.navigate("Alarms")}}>
            <Text>Alarm</Text>
          </Button>
          <Text>
              {navigation.getParam('name','default value')}
          </Text>
      </Container>
    );
  }
}
