import React, { Component } from 'react'
import {StyleSheet ,View,Text,Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/MaterialIcons';
export default class Header extends Component {
  render() {
    return (
        <View style={styles.container}>
            <LinearGradient start={{x: 0, y: 0}} end={{x: 1, y: 0}} colors={['#2DA1F2','#405DE6']} style={styles.linearGradient}>
                <View style={styles.col}>
                    <Image  source={require("../../assets/images/menu.png")}/>
                    <View style={styles.searchBell}>
                         <Icon name={'search'}  size={24} color={'white'} style={styles.icon} />
                         <Icon name={'notifications-none'}  size={24} color={'white'} style={styles.icon}/>
                    </View>
                </View>
            </LinearGradient>
        </View>
    
    );
  }
}

const styles = StyleSheet.create({
    container :{
        height:60,
    },
    linearGradient:{
        height:"100%",
        justifyContent:"center",
        alignContent:"center",
    },
    col:{
        paddingLeft:10,
        paddingRight:10,
        flexDirection: "row",
        justifyContent:"space-between"
    },
    searchBell:{
        flexDirection: "row",
    },
    name:{
        fontFamily:"Poppins-Bold",
        fontSize:18,
        color:'white',
       
    },
    icon:{
        padding:8,
        backgroundColor:"#5851DB",
        marginLeft: 10,
        borderRadius: 100,
    }
    
})