import {StyleSheet, Modal} from 'react-native';

const styles = StyleSheet.create({
  background: {
    backgroundColor:'#ffffff',
    paddingTop: 8,
    paddingBottom: 2,
    flex: 1,
    width:"100%",
    height:"100%"
  },
  background2: {
    backgroundColor:'white',
    paddingTop: 0,
    paddingBottom: 0,
    flex:1,
    width:"100%",
    height:"100%"
  },
  background3: {
    backgroundColor: '#fafafa',
    paddingTop: 0,
    paddingBottom: 0,
    flex:1,
    width:"100%",
    height:"100%"
   
  },
  /*----------------Table---------------*/
  colorTabs: {
    backgroundColor: 'white',
  },
  header: {height: 50, backgroundColor: '#FAF2D3'},
  text: {textAlign: 'center', fontSize: 14, fontFamily: 'Poppins-Medium'},
  dataWrapper: {marginTop: 1},
  row: {height: 40, backgroundColor:'#fff'},
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
     height:140,
     width:"100%",
   },
  //Scrooll View Horizontal
    scroollViewHome:{
      justifyContent:"center",
      marginTop:20,
    },
    horizontalHome:{
      width:"100%",

    },
    tabHome1:{
        height:100,
        width:220,
        marginLeft:20,
        justifyContent:"center",
        borderRadius:5,
        /*
        shadowColor: "black",
        shadowOffset: {
          width:0,
          height:3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        */
        elevation: 3
        
    },
    tabHome2:{
        height:100,
        width:220,
        justifyContent:"center",
        marginLeft:20,
        borderRadius:5,
        /*
        shadowColor: "black",
        shadowOffset: {
          width:0,
          height:3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        */
        elevation: 10,
    },
    tabHome3:{
        height:100,
        width:220,
        justifyContent:"center",
        marginLeft:20,
        borderRadius:5,
        /*
        shadowColor: "black",
        shadowOffset: {
          width:0,
          height:10,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        */
        elevation: 3,

    },
    tabHome4:{
        height:100,
        width:220,
        justifyContent:"center",
        marginLeft:20,
        marginRight:20,
        borderRadius:5,
        /*
        shadowColor: "black",
        shadowOffset: {
          width:0,
          height:3,
        },
        shadowOpacity: 0.5,
        shadowRadius: 10,
        */
        elevation: 10,
    },
    //
    contentHome :{
      backgroundColor:"#fff",
      height:70,
      marginTop:20,
      marginLeft:20,
      marginRight: 20,
      borderRadius:5,
      /*
      shadowColor: "#1DA1F2",
      shadowOffset: {
        height:0.1,
      },
      shadowOpacity: 0.5,
      shadowRadius: 10,
      */
      elevation: 1,
      flexDirection: 'row',
      alignItems:"center",
      
    },
    image:{
        width:50,
        height:50,
        marginLeft:10,
        borderRadius:200
        
    },
    contentView:{
      marginLeft:10,
    },
    chart:{
      height:300,
      marginTop:20,
      marginLeft: 20,
      marginRight: 20,
      borderRadius:5,
      /*
      shadowColor: "#1DA1F2",
      shadowOffset: {
        width:0,
        height:1,
      },
      shadowOpacity: 0.1,
      shadowRadius: 10,
        */
      elevation: 3,
    },
    //Chartjs
    chartHome:{
      height:300,
      marginTop:20,
      marginLeft: 20,
      marginRight: 20,
      borderRadius:5,
      
    }
 
});


export default styles;
