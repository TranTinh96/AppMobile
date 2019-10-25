import React, {Component} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Content, Button, ListItem, Text, Left, Body, Right, Switch,List,Thumbnail } from 'native-base';
import styles from "../../assets/styles/styles.screen"

export default class settingScreen extends Component {
  render() {
    return (
      <Container style={styles.background}>
        <Content>
          <List style={styles.avatar}>
            <ListItem avatar >
              <Left>
                <Thumbnail source={require("../../assets/images/nhu.jpg")} />
              </Left>
              <Body>
                <Text style={styles.avatarText}>Le Quynh Nhu</Text>
                <Text note >Crush Tran Ngoc Tinh</Text>
              </Body>
            </ListItem>
          </List>
          <ListItem icon>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                 <Icon active name="lock" size={18}  color={'white'}/>
              </Button>
            </Left>
            <Body>
              <Text style={styles.textIcon}>Privacy</Text>
            </Body>
          </ListItem>
          <ListItem icon style={{marginTop: 18}}>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="beenhere" size={18}  color={'white'} />
              </Button>
            </Left>
            <Body>
              <Text style={styles.textIcon}>Account and Security</Text>
            </Body>
          </ListItem>
          <ListItem icon style={{marginTop: 18}}>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="info" size={18}  color={'white'} />
              </Button>
            </Left>
            <Body>
              <Text style={styles.textIcon}>Information Apps</Text>
            </Body>
          </ListItem>
          <ListItem icon style={{marginTop: 18}}>
            <Left>
              <Button style={{ backgroundColor: "#007AFF" }}>
                <Icon active name="trending-flat" size={18}  color={'white'} />
              </Button>
            </Left>
            <Body>
              <Text style={styles.textIcon}>Logout</Text>
            </Body>
          </ListItem>
          
        </Content>
      </Container>
    );
  }
}

