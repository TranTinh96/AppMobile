import React, { Component } from 'react'
import {StyleSheet ,View,Image,ImageBackground} from 'react-native';
import {Button,Text} from "native-base"

export default class signup extends Component {
  render() {
    return (
      <ImageBackground source={require('../../assets/images/112.png')} style={styles.container}>
         <Text>Signup</Text>
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
        fontFamily:"Poppins"
    },
    img:{
        width:90,
        height:90
    },
    button:{
        marginTop: 300,
        width:'100%',
        padding:20
    },
    signup:{
        justifyContent:"center",
        fontFamily:"Poppins",
        backgroundColor:"red",
    },
    login:{
        marginTop: 18,
        justifyContent:"center",
        fontFamily:"Poppins",
    }
})