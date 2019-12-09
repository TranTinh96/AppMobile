import React, {Component} from 'react';
import { Dimensions,View ,ScrollView,Text,ImageBackground,Image} from 'react-native';
import {Container,Button} from "native-base"
import LinearGradient from 'react-native-linear-gradient';
import styles from "../../assets/styles/styles.screen"
import Header from '../component/Header';
import Chart from "../component/Home/homeChart"

export default class homeScreen extends Component {
  render() {
    return (
      <Container style={styles.background3}>
        <Header name="Home" />
        <ScrollView>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#2DA1F2', '#405DE6']}
            style={styles.containerHome}>
            <View style={styles.scroollViewHome}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}style={styles.horizontalHome}>
                <ImageBackground source={require("../../assets/images/factory/1.jpg")} style={styles.tabHome1}>

                </ImageBackground>
                <ImageBackground source={require("../../assets/images/factory/2.jpg")} style={styles.tabHome2}>

                </ImageBackground>
                <ImageBackground source={require("../../assets/images/factory/3.jpg")} style={styles.tabHome3}>

                </ImageBackground>
                <ImageBackground source={require("../../assets/images/factory/4.jpg")} style={styles.tabHome4}>

                </ImageBackground>
               
              </ScrollView>
            </View>
          </LinearGradient>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['white', 'white']}
            style={styles.contentHome}>
              <Image  source={require("../../assets/images/icon/nhietdo.png")}  style={styles.image} />
              <View style={styles.contentView}>
                <Text>Temperature</Text>
              </View>
          </LinearGradient>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['white', 'white']}
            style={styles.chart}>
            <View style={styles.scroollViewHome}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}style={styles.horizontalHome}>
                <View style={styles.chartHome}>
                  <Chart/>
                </View>
              </ScrollView>
            </View>
          </LinearGradient>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['white', 'white']}
            style={styles.chart}>
            <View style={styles.scroollViewHome}>
              <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}style={styles.horizontalHome}>
                <View style={styles.chartHome}>
                  <Chart/>
                </View>
              </ScrollView>
            </View>
          </LinearGradient>
          <View style={{marginTop: 20}}></View>
        </ScrollView>
      </Container>
    );
  }
}

