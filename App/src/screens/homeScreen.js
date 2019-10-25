import React, {Component} from 'react';
import { Dimensions } from 'react-native';
import {Container,Button,Text} from "native-base"
import styles from "../../assets/styles/styles.screen"
import Header from '../screen.library/Header';

export default class homeScreen extends Component {
  render() {
    return (
      <Container style={styles.background3}>
        <Header name="Home"/>

      </Container>
    );
  }
}

