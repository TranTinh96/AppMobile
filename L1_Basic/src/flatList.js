import React, { Component } from 'react'
import { View,Text,FlatList,StyleSheet,Image,Alert} from "react-native";
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
        <View style={styles.view}>
          <Image
            source={{uri: this.props.item.uri}}
            style={{height: 70, width: 70}}
          />
          <View style={styles.text}>
            <Text>{this.props.item.name}</Text>
          </View>
        </View>
      </Swipeout>
    );
  }
}



 class flatListBasic extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        deleteRowkey:null
     }
   }
   refresherFlatlist=(deleteKey)=>{
      this.setState((prevState)=>{
        return{
          deleteRowkey:deleteKey
        }
      });
   }
   
  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={Users}
          renderItem={({item, index}) => (
            <FlatListItem item={item} index={index}  parentFlatlist={this}/>
          )}
        />
      </View>
    );
  }
}


const styles=StyleSheet.create({
    container  :{
        flex:1
    },
    view:{
        borderBottomColor:"#93D0FE",
        borderBottomWidth: 1,
        flexDirection:"row"
    },
    text:{
        justifyContent:"center",
        marginLeft:10
    }
})

export default flatListBasic;