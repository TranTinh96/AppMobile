import React, { Component } from 'react'
import { View,Text,FlatList,StyleSheet,Image} from "react-native";
import Users from '../data/users';


class flatListItem extends Component {
    render() {
        return (
           <View> 
            <Image  source={{uri:this.props.item.uri}} style={{height:70 , width: 70,}} />
               <View> 
                </View>
            </View>
        )
    }
}



export default class flatList extends Component {
    render() {
        return (
            <View style={styles.container}> 
                <FlatList 
                    data={Users}
                    renderItem={({item,index})=> <flatListItem  item={item} index={index} />}
                
                
                />
            </View> 
        )
    }
}


const styles=StyleSheet.create({
    container  :{
        flex:1
    }
})