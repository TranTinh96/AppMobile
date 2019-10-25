import {StyleSheet, Modal} from 'react-native';

const styles = StyleSheet.create({
  background: {
    backgroundColor:'white',
    paddingTop: 8,
    paddingBottom: 2,
  },
  background2: {
    backgroundColor: 'white',
    paddingTop: 0,
    paddingBottom: 0,
  },
  background3: {
    backgroundColor: '#fafafa',
    paddingTop: 0,
    paddingBottom: 0,
   
  },
  /*----------------Table---------------*/
  colorTabs: {
    backgroundColor: 'white',
  },
  header: {height: 50, backgroundColor: '#FAF2D3'},
  text: {textAlign: 'center', fontSize: 14, fontFamily: 'Poppins-Medium'},
  dataWrapper: {marginTop: -1},
  row: {height: 40, backgroundColor:'#fafafa'},
  /*-------------Screen Setting------------*/
  avatar:{
     width:"100%",
     height:70,
     backgroundColor:"white",
     marginBottom: 25,
      alignItems:"center",
     flexDirection: 'row',
     paddingLeft:15,
     marginTop:25
  },
  avatarImg:{
      width:50,
      height:50
  },
  avatarView:{
    marginLeft: 20,
  },
  avatarText:{
    fontFamily: 'Poppins-Medium',
    fontSize:17,
    color:"#5851DB"
  },
  avatarNoteText:{
    fontFamily: 'Poppins-Medium',
  },
  textIcon:{
    fontFamily: 'Poppins-Regular',
    fontSize:16
  },
   settings:{
      backgroundColor:"white"
   },
   icons:{
     marginTop: 15,
   },
   /*----------------Home-----------------*/
   containerHome:{
     paddingTop: 15,
     flex:1,
     width:"100%",
     height:"100%"
   },
  //Scrooll View Horizontal
    scroollViewHome:{
      backgroundColor:"white",
      borderColor:"#e6e6e6",
      //  borderWidth:1
    },
    horizontalHome:{
      width:"100%"
    }
 
});


export default styles;
