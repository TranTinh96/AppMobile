import React, {Component} from 'react';
import {StyleSheet, View, Image, ImageBackground} from 'react-native';
import {Button, Text, Form, Item, Input} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome5';
export default class signin extends Component {
  render() {
    return (
      <ImageBackground
        source={require('../../assets/images/112.png')}
        style={styles.container}>
        <Text style={styles.textHeader}>LOGIN</Text>
        <View style={styles.form}>
          <Form>
            <Item>
              <Icon name="envelope" size={23} color={"#2D8DC9"} />
              <Input placeholder="Email" style={styles.input} />
            </Item>
            <Item style={{marginTop: 30}} >
              <Icon name="lock" size={20}  color={"#2D8DC9"}/>
              <Input placeholder="Password" style={styles.input} autoCompleteType="password"/>
            </Item>
          </Form>
          <View>
            <Button transparent style={styles.forgot} onPress={() => {alert("tr")}}>
              <Text style={styles.textForgot}>Forgot Password ?</Text>
            </Button>
          </View>
          <Button rounded transparent style={styles.login} onPress={() => {}}>
            <Text style={styles.textLogin}>LOGIN</Text>
          </Button>
          <View style={styles.or}>
              <Text style={styles.or}>OR CONNECT WITH</Text>
          </View>
          <View style={styles.btnFaceGoogle} >
            <Button rounded transparent style={styles.face} onPress={() => {}}>
              <Icon name='facebook' size={20} color="white"/>
              <Text style={styles.textFace}>Facebook</Text>
            </Button>
            <Button rounded transparent style={styles.google} onPress={() => {}}>
              <Icon name="google" size={20} color="white"/>
              <Text style={styles.textGoogle}>Google</Text>
            </Button>
          </View>
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
    
  },
  form: {
    marginTop: 20,
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
    backgroundColor:"#E1306C",
    marginTop: 40,
    justifyContent: 'center',
    alignItems:"center",
    fontFamily: 'Poppins-Medium',
    textShadowOffset:{width: 0, height: 0},
  },
  btnFaceGoogle:{
    flexDirection: 'row',
    width:'100%',
    marginTop: 30,
    justifyContent:"space-between"
  },
  face:{
     width:"45%",
     backgroundColor:"#3B5998",
     justifyContent:"center",
     
  },
  google:{
    backgroundColor:"#DB4437",
    width:"45%",
    justifyContent:"center",
  },
  textFace:{
    textTransform:"capitalize",
    fontFamily: 'Poppins-Medium',
    fontSize:16,
    color:'white'

  },
  textGoogle:{
    textTransform:"capitalize",
    fontFamily: 'Poppins-Medium',
    fontSize:16,
    color:'white'

  },
  or:{
    marginTop: 20,
    justifyContent:"center",
    alignItems:"center",
    fontFamily:"Poppins-Medium",
    fontSize:15
  },
  forgot:{
    width:"100%",
    alignItems:"flex-end",
    justifyContent:"flex-end",
    marginTop: 10,
  },
  textForgot:{
    color:"red",
    textTransform:"capitalize",
    fontFamily:"Poppins-Regular",
    fontSize:16
  }



});
