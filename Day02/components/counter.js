import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import { useState } from 'react';

 const Counter = () => {
  const[count, setCount]=useState(0)
  const[count1, setCount1]=useState(0)
  const[count2, setCount2]=useState(0)
  return (
    <View style={styles.container}>
      <Text ><strong>Prix Panier 1: {count}</strong></Text>
      <Text ><strong>Prix Panier 2: {count1}</strong></Text>
      <Text ><strong>Prix Panier 3: {count2}</strong></Text>
      
      
      <Text ><strong>Nombre de chaise dans votre panier 1: {(count/16)}</strong></Text>
      <Text ><strong>Nombre de chaise dans votre panier 2: {(count1/10)}</strong></Text>
      <Text ><strong>Nombre de chaise dans votre panier 3: {(count2/64)}</strong></Text>
      <Text ><strong>Nombre Totale de Chaise que j'ai choisie: {(count2/64)+(count1/10)+(count/16)}</strong></Text>
      
     <View>
        <View style={styles.ChaiseBerka}>
          <Button title='Chaise berka' onPress ={() => setCount(count +16 )}></Button></View> 
          <View style={styles.ChaiseAtlas}>
          <Button title='Chaise Atlas' onPress ={() => setCount1(count1 +10)}></Button></View>
          <View style={styles.ChaiseLinux}>
          <Button title='Chaise Linux' onPress ={() => setCount2(count2 +64 )}></Button></View> 
      </View> 
     
      <View style={styles.BtnReset}>
          <Button title='reset' onPress ={() => setCount(0)}>
      </Button>
      </View>


      <StatusBar style="auto" />
      </View>
      )}; 
export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ChaiseBerka:{
      width:'180px',
      height:'50px',
      backgroundColor:'yellow',
      justifyContent:'center',
      textAlign:'center',
      marginTop:'90px',
      marginleft:'20px',
  },

  ChaiseAtlas:{
    width:'180px',
    height:'50px',
    backgroundColor:'yellow',
    justifyContent:'center',
    textAlign:'center',
    marginTop:'50px',
    marginleft:'20px', 
},
ChaiseLinux:{
  width:'180px',
  height:'50px',
  backgroundColor:'yellow',
  justifyContent:'center',
  textAlign:'center',
  marginTop:'20px',
  marginleft:'20px', 
},
BtnReset:{
  textAlign:'center',
  marginTop:'20px',
  width:'130px',
  height:'50px',
  justifyContent:'center',
  backgroundColor:'green',
  fontSize:'40px',
  marginTop:'150px',
},

  Texte:{
    textAlign:'center',
    marginTop:'30px',
    marginLeft:'240px',
    width:'100px',
    height:'50px',
    justifyContent:'center',
    backgroundColor:'blue',
    fontSize:'40px'
  },
});
