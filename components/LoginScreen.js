import * as React from 'react';
import { Button,StatusBar, View, Text, StyleSheet , TextInput, Alert, Image} from 'react-native';
import  { useState, useEffect } from "react";
import ScreenTemplate from '../containers/ScreenTemplate';


const Header = () => {
  return (
    <View  >
      <Text style={{fontSize:20, textAlign:'center'}} >Welcome to Make a Cocktail Website</Text>
    </View>
  
)}


export default function LoginScreen() {
    
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    return (

      <ScreenTemplate
      header={<Header />}
      footer={<Text  style={{fontSize:20, textAlign:'center'}}>© Lu Hao Copyright 2021</Text>}>

       <View style={{ backgroundColor: "#f1f3f4",flex: 1, alignItems: 'center', justifyContent: 'center' }}>
           <Image source={require('../assets/logo4.png')} style={{width:'50%',height:'50%'}} />
          <StatusBar/>
    
       

      </View>
      
     </ScreenTemplate>

    );
  }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
       
      },

  inputView: {
    backgroundColor: "#c1e1ec",
    borderRadius: 30,
    width: "100%",
    height: 45,
    marginBottom: 20,
  },

  text: {
    backgroundColor: "#c1e1ec",
    height: 18,
    textAlign:"center"
  },

  TextInput: {
    height: 50,
    flex: 1,
    padding: 10, 
  },

  button: {
    // height: 30,
    marginBottom: 10,
    alignItems: "center",
  },

});