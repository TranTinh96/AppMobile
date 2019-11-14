import React, {Component} from 'react';
import {StyleSheet, View, Image, ImageBackground} from 'react-native';
import {Button, Text, Form, Item, Input,CheckBox,Body,ListItem} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
import axios from "axios"

export default class Signup extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      checked: false,
       name :" ",
       email : " ",
       password :" ",
       confirm :" ",
       error_creact :false
    }
  }

  handelSignup = e =>{
     const {checked,name,email,password,confirm} = this.state
     console.log(name + email + password + confirm + checked)

     if(name && email && password && (password===confirm) && checked)
     {
      axios
        .post('/auth/register', {
          name: name,
          email: email,
          password: password,
        })
        .then(res => {
          console.log(res.data);
          if (res.data.status) {
            this.props.navigation.navigate('Signin')
          } else {
            this.setState({error_creact: true});
          }
        })
        .catch(err => {
          this.setState({error_creact: true});
          console.log(err)
        });

     }else{
        console.log("ERROR")
        this.setState({error_creact: true})
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
                onChangeText ={(name)=>{
                    this.setState({name})
                }}
               
              />
            </Item>
            <Item style={{marginTop: 25}}>
              <Icon name="envelope" size={23} color={'#2D8DC9'} />
              <Input
                placeholder="Email"
                style={styles.input}
                autoCompleteType="email"
                onChangeText ={(email)=>{
                  this.setState({email})
              }}
             
              />
            </Item>
            <Item style={{marginTop: 25}}>
              <Icon name="lock" size={20} color={'#2D8DC9'} />
              <Input
                placeholder="Password"
                style={styles.input}
                autoCompleteType="password"
                secureTextEntry={true}
                onChangeText ={(password)=>{
                  this.setState({password})
              }}
               
              />
            </Item>
            <Item style={{marginTop: 25}}>
              <Icon name="unlock" size={20} color={'#2D8DC9'} />
              <Input
                placeholder="Confirm Password"
                style={styles.input}
                autoCompleteType="password"
                secureTextEntry={true}
                onChangeText ={(confirm)=>{
                  this.setState({confirm})
              }}
               
              />
            </Item>
            <ListItem style={{marginTop:10,borderColor:"white"}}>
              <CheckBox checked={this.state.checked} onPress={()=>{
                 this.setState( {checked : !this.state.checked})
              }}/>
              <Body>
                <Text style={styles.checked}> I agree all statements in Terms</Text>
              </Body>
            </ListItem>
          </Form>
          <Text style={this.state.error_creact? styles.loginRed: styles.loginWhite}>Email already exists or is incorrect</Text>
          <Button rounded transparent style={styles.login} onPress={this.handelSignup}>
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
    marginTop: 10,
    justifyContent: 'center',
    alignItems:"center",
    fontFamily: 'Poppins-Medium',
  },
  checked:{
    fontFamily: 'Poppins-Medium',
    color:"#2D8DC9"
  },
  loginRed:{
    marginTop: 30,
    color:"red",
    fontFamily: 'Poppins-Medium',
  },
  loginWhite:{
    marginTop: 30,
    color:"white",
    fontFamily: 'Poppins-Medium',
  }



});
