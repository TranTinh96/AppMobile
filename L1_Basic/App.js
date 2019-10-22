import React, {Component} from 'react';
import {Container, Header,Title,Content,Button,Left,Right,Body,Icon,Text,List,ListItem,Thumbnail} from 'native-base';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  render() {
    return (
      <Container>
        <Header>
          <Left>
            <Button transparent>
              <Icon name="menu" />
            </Button>
          </Left>
          <Body>
            <Title>Navigator</Title>
          </Body>
          <Right>
            <Button transparent > 
               <Icon  name="add"/>
            </Button>
          </Right>
        </Header>
        <Content>
         
        </Content>
      </Container>
    );
  }
}


export default App;
