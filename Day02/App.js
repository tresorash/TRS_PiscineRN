















import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
//import Counter from './components/hello';
import Counter from './components/counter';
export default function App() {
  return (
   <Counter/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
 

});





























/*import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import { useState } from 'react';

 const Counter = () => {
  const[count, setCount]=useState(1)
 
  return (
    <View style={styles.container}>
      <Text ><strong>Prix Panier: {count}</strong></Text>
      <Text ><strong>Nombre de chaise choisie se trouvant  dans votre panier: {count/1}</strong></Text>
      <View style={styles.Button}>
          <Button title='+1' onPress ={() => setCount(count +12 )}></Button>

         
      </View>
     <View style={styles.Button}>
         <Button title='-1' onPress ={() => setCount(count-1)} >
      </Button>
      </View>
      <View style={styles.ButtonR}>
          <Button title='Achetter' onPress ={() => setCount(0)}></Button>
      </View>
      <View style={styles.ButtonR}>
          <Button title='reset' onPress ={() => setCount(0)}></Button>
      </View>
      <StatusBar style="auto" />
      </View>
      )};




export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  Button:{
      width:'30%',
      height:'50px',
      backgroundColor:'yellow',
      justifyContent:'center',
      textAlign:'center',
      marginTop:'220px',
      marginleft:'20px',

  },
  ButtonR:{
    textAlign:'center',
    marginTop:'20px',
    width:'21%',
    height:'50px',
    justifyContent:'center',
    backgroundColor:'red',
    fontSize:'40px',
    
  },
  Texte:{
    textAlign:'center',
    marginTop:'30px',
    marginLeft:'240px',
   
    justifyContent:'center',
   
    fontSize:'40px'
  },


});*/