import React, {Component} from 'react';
import {Container,Button,Text} from "native-base"
import Header from '../component/Header';
import styles from "../../assets/styles/styles.screen"

export default class alarmScreen extends Component {
  render() {
    return (
      <Container style={styles.background1}>
        <Header name="Alarm"/>
      </Container>
    );
  }
}

