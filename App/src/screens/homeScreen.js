import React, {Component} from 'react';
import Carousel, { ParallaxImage } from 'react-native-snap-carousel';
import { Dimensions } from 'react-native';
import {Container,Button,Text} from "native-base"
import styles from "../../assets/styles/styles.screen"
import Header from '../screen.library/Header';


const { width: screenWidth } = Dimensions.get('window')
export default class homeScreen extends Component {
  _renderItem ({item, index}, parallaxProps) {
    return (
        <View style={styles.item}>
            <ParallaxImage
                source={{ uri: item.thumbnail }}
                containerStyle={styles.imageContainer}
                style={styles.image}
                parallaxFactor={0.4}
                {...parallaxProps}
            />
            <Text style={styles.title} numberOfLines={2}>
                { item.title }
            </Text>
        </View>
    );
}
  render() {
    return (
      <Container style={styles.background2}>
        <Header name="Home"/>

      </Container>
    );
  }
}

