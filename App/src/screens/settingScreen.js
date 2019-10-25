import React, {Component} from 'react';
import {View} from "react-native"
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Content, Button, ListItem, Text, Left, Body, Right, Switch,List,Thumbnail, Image } from 'native-base';
import Header from '../screen.library/Header';
import styles from "../../assets/styles/styles.screen"


export default class settingScreen extends Component {
  render() {
    return (
      <Container style={styles.background3}>
        <Content>
          <Header name="Setting"/>
          <View style={styles.avatar}>
              <Thumbnail  source={require("../../assets/images/nhu.jpg")} style={styles.avatarImg}/> 
              <View style={styles.avatarView}>
                <Text style={styles.avatarText}>Le Quynh Nhu</Text>
                <Text note style={styles.avatarNoteText}>I love you Tran Tinh</Text> 
              </View>
          </View>
          <View style={styles.settings}>
            <ListItem icon style={styles.icons}>
              <Left>
                <Button style={{ backgroundColor: "#007AFF" }}>
                  <Icon active name="lock" size={18}  color={'white'}/>
                </Button>
              </Left>
              <Body>
                <Text style={styles.textIcon}>Privacy</Text>
              </Body>
            </ListItem>
            <ListItem icon style={styles.icons}>
              <Left>
                <Button style={{ backgroundColor: "#007AFF" }}>
                  <Icon active name="beenhere" size={18}  color={'white'} />
                </Button>
              </Left>
              <Body>
                <Text style={styles.textIcon}>Account and Security</Text>
              </Body>
            </ListItem>
            <ListItem icon style={styles.icons}>
              <Left>
                <Button style={{ backgroundColor: "#007AFF" }}>
                  <Icon active name="info" size={18}  color={'white'} />
                </Button>
              </Left>
              <Body>
                <Text style={styles.textIcon}>Information Apps</Text>
              </Body>
            </ListItem>
            <ListItem icon style={styles.icons}>
              <Left>
                <Button style={{ backgroundColor: "#007AFF" }}>
                  <Icon active name="trending-flat" size={18}  color={'white'} />
                </Button>
              </Left>
              <Body>
                <Text style={styles.textIcon}>Logout</Text>
              </Body>
            </ListItem>
          </View>
        </Content>
      </Container>
    );
  }
}

