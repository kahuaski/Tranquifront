import React from "react";

import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  primary: {
    flex: 1,
    position: "relative",
    flexDirection: "column",
   // flexWrap: "wrap",
    justifyContent: "center",
    marginTop:50 ,
    marginHorizontal:5,
   
  },
  containerCompras: {
   position: "relative",
    justifyContent: "center",
    alignItems:"center",
    margin:5,
    padding:5
   
  },
  containerC: {
    position: "relative",
     justifyContent: "center",
     alignItems:"center",
     
     padding:10
    
   },

   containerAgregar:{
    flex:1,
    borderRadius:120,
    position:"absolute",
    flexDirection:"row",
    paddingHorizontal:5,
    paddingVertical:20,
    backgroundColor:"#F80000",
    borderWidth:0.5,
    elevation:5,
    margin:10,
    left:1,
    top:110
    

   },

   containercompr:{
    flex:1,
    borderRadius:80,
    position:"absolute",
    flexDirection:"row",
    paddingHorizontal:20,
    paddingVertical:20,
    backgroundColor:"#F80000",
    borderWidth:0.5,
    elevation:5,
    margin:10,
    right:1,
    top:110,
    textShadowColor:"red"
   },

   textoA:{
paddingHorizontal:90,
fontSize:50,
left:10,
top:60,
color:"#F80000",
opacity:0.5
   },
   textoT:{
    margin:4,
    paddingHorizontal:80,
    fontSize:30,
    right:45,
    top:120,
    color:"#F80000",
    opacity:0.5
       },

  textoC:{
fontSize:18
  },
  containerSecond: {
     //  justifyContent:"center",
    //alignSelf: "baseline",
    //alignItems: "center",
    flexDirection: "row",
    gap: 80,
    borderColor:"black",
    elevation:1,
    marginHorizontal:5,
    paddingHorizontal:10
  },

  containerBuss: {
    flex:1,
   //position:"relative",
    gap: 5,
    marginTop: 1,
    justifyContent:"center",
    alignItems:"center",
   
  },

  containeraddress: {
   flexDirection:"row",
   alignItems:"baseline",
   justifyContent:"space-between",
  
   padding:5
  },


  row: {
    flex: 1, // Divide verticalmente en dos filas
    flexDirection: "row", 
    //justifyContent:"flex-end"// Alineación horizontal
  },
  column: {
    flex: 1, // Divide horizontalmente en dos columnas
    justifyContent: "center", // Centra verticalmente
    alignItems: "center", // Centra horizontalmente

  },

  containerSlider: {
   // flex:1,
    justifyContent:"center",
    //alignSelf: "baseline",
   // alignItems: "center",
  flexDirection: "row",
    //gap: 10,
   margin:1,
  
   maxHeight:400,
    
    padding:10,
    height:180
  },
  containersearch: {
    //flex:0.5,
   // position:"relative",
    alignSelf: "center",
    alignItems: "center",
    //flexDirection: "row",
  borderRadius:20,
    marginTop: 10,
    borderColor:"green",
    borderWidth:0.5,
    padding:5
    },

  TextAddress: {
    fontSize: 16,
    fontWeight: "900",
  },
  textinput: {
    fontSize: 14,
    fontWeight: "300",
    borderRadius: 20,
    shadowColor: "#fff99f",
    padding: 5,
    elevation: 1,
  },
  user: {
  //flex:1,
 // position:"relative",
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    shadowRadius: 5,
    width: "10%",
    height: 20,
   
  },
  icon: {
   flex:1,    //shadowColor: "black",
    width:"50%",
    height:"50%"
  },

  imgserver: {
    margin: 5,
    width: 30,
    height: 30,
    borderRadius: 50,

    //shadowColor: "black",
  },
  menu: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    top: 1,
    borderRadius: 80,
    margin: 20,
    gap: 10,
    elevation: 5,
    shadowColor: "black",
    backgroundColor: "orange",
  },
  corntainerMenu: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "white",
  },
  titleArticule: {
    fontSize: 14,
    fontStyle: "italic",
    textAlign: "center",
  },

  InputS: {
    backgroundColor: "white",
    fontSize: 15,
    fontStyle: "italic",
    textAlign: "center",
    borderRadius: 20,
    margin: 2,
    padding: 10,
  },
  

  containermodal: {
    flex: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    borderStyle: "solid",
    backgroundColor: "white",
    padding: 10,
  },

 
  
 
  productLista: {
   
   flex: 1,
    position:"relative",
    justifyContent:"center",
    flexDirection:"row"
   
  },
  imgListaP: {
   // flex:1,
    justifyContent:"center",
    width: 300,
    height: 250,
    borderRadius: 20,
   
  },

  imgLista: {
    // flex:1,
     justifyContent:"center",
     width: 200,
     height: 140,
     borderRadius: 20,
    
   },

  detalles: {
  //flex:1,
   alignItems:"baseline",
   flexDirection:"column",
    justifyContent:"center",
    margin: 10,
    //textAlign:"center"
  },
//boton flotante

floatingButton: {
  position: "absolute",
  bottom: 10,
  right: 16,
  backgroundColor: "#f80000",
  borderRadius: 50,
  width: 60,
  height: 60,
  alignItems: "center",
  justifyContent: "center",
},
buttonText: {
  color: "white",
  fontSize: 12,
},
imagebuss:{
  width:100,
height:100
},

});

export default styles;
