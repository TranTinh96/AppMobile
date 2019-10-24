import React, { Component } from 'react'
import {StyleSheet ,View,Image,ImageBackground} from 'react-native';
import {Button,Text} from "native-base"

export default class sign extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <ImageBackground source={require('../../assets/images/111.png')} style={styles.container}>
        <View style={styles.button}>
          <Button rounded transparent style={styles.signup}  onPress={() => {
            navigation.navigate('Signup', { name :'Signup'});
          }}>
            <Text style={styles.textSignup}>SIGN UP</Text>
          </Button>
          <Button rounded transparent style={styles.login} onPress={() => {
            navigation.navigate('Signin', { name :'Home'});
          }}>
            <Text style={styles.textFace}>LOGIN</Text>
          </Button>
        </View>
      </ImageBackground>
    );
  }
}



const styles = StyleSheet.create({
    container :{
        flex:1,
        backgroundColor:"white",
        justifyContent:"center",
        alignItems:"center",
        padding:10,
        position:"relative",
        backgroundColor:"black",
        fontFamily:"Poppins-Regular"
    },
    button:{
        marginTop: 350,
        width:'100%',
        padding:20
    },
    signup:{
        justifyContent:"center",
        backgroundColor:"#E1306C",
    },
    textSignup:{
      fontFamily:"Poppins-Bold",
      fontSize:16,
      color:'white'
    },
    login:{
        marginTop: 18,
        justifyContent:"center",
        fontFamily:"Poppins-Regular",
        backgroundColor:"#3b5998",
    },
    textFace:{
      fontFamily:"Poppins-Bold",
      fontSize:16,
      color:'white'
    }
})