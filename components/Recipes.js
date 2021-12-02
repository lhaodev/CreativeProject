
import React, { useState, useEffect} from "react";
import {Button, Text, TextInput, View,StatusBar, StyleSheet, FlatList, SafeAreaView, ScrollView, KeyboardAvoidingView } from "react-native";


const Recipes = (props) => {
 
  const [text, setText] = useState('');
  const [data,setData] = useState([]);
 
  const [query, setQuery] = useState("");
  
  const [ingredients, setIngredients] = useState('');

  useEffect(() => {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s='+ingredients)
      .then((response) => response.json())
      .then((response) => {
        setData(response.drinks)
        console.log(response.drinks)
        })
      .catch((error) => console.error(error))
     
  }, [ingredients]);



  const renderItem = ({item}) => {
    return (
      <View style={styles.renderItem}>
        <Text style={{flex:1,textAlign:'center'}}>{item.strDrink}</Text>
        {/* <Text style={{flex:1,textAlign:'center'}}>{item.strInstructions}</Text> */}
        <Text style={{flex:4,textAlign:'center'}}>{item.strIngredient1}    {} {item.strIngredient2}    {} {item.strIngredient3}{}    {item.strIngredient4}</Text>  
        <Text style={{flex:3,textAlign:'center'}}>{item.strInstructions}</Text>
     </View>
  )}



  return (
    
    <SafeAreaView style={styles.container}>
 
    <View style={{flex:1}}>
      {/* <View style={styles.filter}> */}
      
        <Text style={{fontSize:20}}>Search by name:   
        </Text> 
        
        <View style={{flexDirection:'row'}}>
        
        <TextInput
          style={{marginHorizontal:10,height: 40}}
          placeholder="Drink Name"
          onChangeText={text => {setText(text)}}
        />
        <Button onPress={() => {setIngredients(text)}}title="Check"/>
        </View>

     
      {/* </View> */}
    </View>

    <View style={{ flex:8}}>
      <View style={{flexDirection:'row'}}>
      <View style={styles.title}>
        <Text style={{flex:1,textAlign:'center',fontSize: 18,
    fontStyle:'italic',}}>Drink</Text>
        <Text style={{flex:4,textAlign:'center',fontSize: 18,
    fontStyle:'italic',}}>Ingredients</Text>
        <Text style={{flex:3,textAlign:'center',fontSize: 18,
    fontStyle:'italic',}}>Instruction</Text>
     </View>
     </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.name}
      />
    </View>
  
    </SafeAreaView>
   
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    margin: 15,
    flexDirection:'column',
  },
  renderItem: {
    flex:1,
    backgroundColor: '#c1e1ec',
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection:'row',
  },
  title: {
    fontSize: 20,
    fontStyle:'italic',
    flexDirection:'row',
    flex:1,
    textAlign:'center',
    margin:3
  },
  filter:{
    margin:3,
    fontSize:30,
    flexDirection:'column', 
    justifyContent: 'space-around',

  },

  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
});

export default Recipes;
