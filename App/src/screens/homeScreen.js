import React, {Component} from 'react';
import {Container,Button,Text} from "native-base"
import styles from "../../assets/styles/styles.screen"
import Header from '../screen.library/Header';

export default class homeScreen extends Component {
  render() {
    return (
      <Container style={styles.background2}>
        <Header name="Home"/>
      </Container>
    );
  }
}

