import * as React from 'react';
import { Button,StatusBar, View, Text, StyleSheet , TextInput, Alert, Image} from 'react-native';
import  { useState, useEffect } from "react";


export default function HomeScreen() {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    return (
<View style={{ backgroundColor: "white",flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        
    <View style={styles.container}>
       <Image source={require('../assets/logo2.png')} style={{width:'100%',height:'20%'}} />

      <StatusBar/>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>



      <View style={styles.button}>
        <Button
         title="Login"
         onPress={() => Alert.alert('Login')}
        />
      </View>


      <View style={styles.button}>
        <Button 
         title="Forgot Passowrd?"
         onPress={() => Alert.alert('Reset')}
        />
      </View>
      
 
   
   
    </View>



</View>
    );
  }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        marginHorizontal: 16,
       
      },


  inputView: {
    backgroundColor: "#FFC0CB",
    borderRadius: 30,
    width: "100%",
    height: 45,
    marginBottom: 20,
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