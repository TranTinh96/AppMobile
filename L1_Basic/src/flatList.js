import React, {Component} from 'react';
import {FlatList, StyleSheet,Alert} from 'react-native';
import {
  Container,
  Header,
  Title,
  Content,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  List,
  ListItem,
  Thumbnail
} from 'native-base';
import Swipeout from 'react-native-swipeout';
import Users from '../data/users';


class FlatListItem extends Component {
constructor(props) {
    super(props)

    this.state = {
         activeRowkey:null
    }
}


  render() {
      const swipeSetting = {
        autoClose: true,
        onClose: (secID, rowID, direction) => {
          if (this.state.activeRowkey != null) {
            this.setState({
              activeRowkey: null,
            });
          }
        },
        onOpen: (secID, rowID, direction) => {
          this.setState({activeRowkey: this.props.item.id});
        },
        right: [
          {
            onPress: () => {
              const deletingRow = this.state.activeRowkey;
              Alert.alert(
                'Alert',
                'Are you sure want to delete !',
                [
                  {
                    text: 'No',
                    onPress: () => console.log('Cancel Pressed'),
                    style: 'cancel',
                  },
                  {
                    text: 'Yes',
                    onPress: () => {
                      Users.splice(this.props.index, 1);
                      //Refresh FlatList
                      this.props.parentFlatlist.refresherFlatlist(deletingRow);
                    },
                  },
                ],
                {cancelable: true},
              );
            },
            text: 'Delete',
            type: 'delete',
          },
        ],
        rowID: this.props.index,
        secID: 1,
      };
    return (
      <Swipeout {...swipeSetting}>
        <ListItem avatar>
          <Left>
             <Thumbnail source={{uri: this.props.item.uri }} />
          </Left>
          <Body>
             <Text>{this.props.item.name}</Text>
             <Text note>Hot girl</Text>
          </Body>
        </ListItem>
      </Swipeout>
    );
  }
}

class flatListBasic extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deleteRowkey: null,
    };
  }
  refresherFlatlist = deleteKey => {
    this.setState(prevState => {
      return {
        deleteRowkey: deleteKey,
      };
    });
  };
  //Cập nhật giao diện khi state thay đổi nào đó
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
            <Title>FlatList</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          <List>
            <FlatList
              data={Users}
              renderItem={({item, index}) => (
                <FlatListItem item={item} index={index} parentFlatlist={this} />
              )}
            />
          </List>
        </Content>
      </Container>
    );
  }
}

const styles = StyleSheet.create({});

export default flatListBasic;
