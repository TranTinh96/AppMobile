import React, {Component} from 'react';
import {StyleSheet, View, Image, ImageBackground} from 'react-native';
import {Button, Text, Form, Item, Input,CheckBox,Body,ListItem} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default class signup extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      checked: true
    }
  }

  
  render() {
    return (
      <ImageBackground
        source={require('../../assets/images/112.png')}
        style={styles.container}>
        <Text style={styles.textHeader}>CREATE ACCOUT</Text>
        <View style={styles.form}>
          <Form>
            <Item>
              <Icon name="user" size={23} color={'#2D8DC9'} />
              <Input
                placeholder="User Name"
                style={styles.input}
                autoCompleteType="username"
              />
            </Item>
            <Item style={{marginTop: 25}}>
              <Icon name="envelope" size={23} color={'#2D8DC9'} />
              <Input
                placeholder="Email"
                style={styles.input}
                autoCompleteType="email"
              />
            </Item>
            <Item style={{marginTop: 25}}>
              <Icon name="lock" size={20} color={'#2D8DC9'} />
              <Input
                placeholder="Password"
                style={styles.input}
                autoCompleteType="password"
                secureTextEntry={true}
              />
            </Item>
            <Item style={{marginTop: 25}}>
              <Icon name="unlock" size={20} color={'#2D8DC9'} />
              <Input
                placeholder="Confirm Password"
                style={styles.input}
                autoCompleteType="password"
                secureTextEntry={true}
              />
            </Item>
            <ListItem style={{marginTop:10,borderColor:"white"}}>
              <CheckBox checked={true}/>
              <Body>
                <Text style={styles.checked}> I agree all statements in Terms</Text>
              </Body>
            </ListItem>
          </Form>
          <Button rounded transparent style={styles.login} onPress={() => {}}>
            <Text style={styles.textLogin}>SIGN UP</Text>
          </Button>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    position: 'relative',
    backgroundColor: 'black',
  },
  textHeader: {
    fontSize: 30,
    fontFamily: 'Poppins-Bold',
    color:"#E1306C"
    
  },
  form: {
    marginTop: 30,
    width: '100%',
    padding: 21,
  },
  input:{
    fontFamily: 'Poppins-Medium',
    marginLeft: 10,
    color:"#2D8DC9"

  },
  textLogin:{
    fontFamily: 'Poppins-Bold',
    fontSize:18,
    color:'white'

  },
  login: {
    backgroundColor:"#1DA1F2",
    marginTop: 50,
    justifyContent: 'center',
    alignItems:"center",
    fontFamily: 'Poppins-Medium',
  },
  checked:{
    fontFamily: 'Poppins-Medium',
    color:"#2D8DC9"
  }



});
