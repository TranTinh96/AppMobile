import React, {Component} from 'react';
import { Dimensions,View ,ScrollView,Text} from 'react-native';
import {Container,Button} from "native-base"
import LinearGradient from 'react-native-linear-gradient';
import styles from "../../assets/styles/styles.screen"
import Header from '../screen.library/Header';

export default class homeScreen extends Component {
  render() {
    return (
      <Container style={styles.background3}>
        <Header name="Home"/>
        <ScrollView>
          <LinearGradient
            start={{x: 0, y: 0}}
            end={{x: 1, y: 0}}
            colors={['#2DA1F2', '#405DE6']}
            style={styles.containerHome}>
            <View style={styles.scroollViewHome}>
              <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={styles.horizontalHome}>
                <View style={styles.tabHome1}></View>
                <View style={styles.tabHome2}></View>
                <View style={styles.tabHome3}></View>
                <View style={styles.tabHome4}></View>
              </ScrollView>
            </View>
          </LinearGradient>
          <View style={styles.contentHome}>

          </View>
          <View style={styles.contentHome}>

          </View>
          <View style={styles.contentHome}>

          </View>
          <View style={styles.chartHome}>

          </View>
          <View style={styles.chartHome}>

          </View>
          <View style={{marginTop: 20}}></View>
        </ScrollView>
      </Container>
    );
  }
}

