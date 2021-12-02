import * as React from 'react';
import { useState, useEffect, useContext } from "react";
import { StyleSheet, Text, View, Image, TextInput, Button, SafeAreaView, SectionList, ScrollView,RefreshControl  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import FunctionContextComponent from './FunctionContextComponent';
import { ThemeProvider } from './ThemeContext';
const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

const GroceryList = () => {


const [info, setInfo] = useState({drink:'',ingredients:'', occasion:'',notes:''});
const [drink, setDrink] = useState('');
const [ingredients,setIngredients] = useState('');
const [occasion, setOccasion] = useState('');
const [notes,setNotes] = useState('');
// const [habit,setHabit] = useState('');
const [refreshing, setRefreshing] = React.useState(false);

const onRefresh = React.useCallback(() => {
  setRefreshing(true);
  wait(2000).then(() => setRefreshing(false));
}, []);



useEffect(() => {getData()}
,[])




const getData = async () => {
  try {
    // the '@profile_info' can be any string
    //change name
    const jsonValue = await AsyncStorage.getItem('@profile_info')
    let data = null
    if (jsonValue!=null) {
      data = JSON.parse(jsonValue)
      setInfo(data)
      setDrink(data.drink)
      setIngredients(data.ingredients)
      setOccasion(data.occasion)
      setNotes(data.notes)
      console.log('just set Info')
    } else {
      console.log('just read a null value from Storage')
      setInfo({})
      setDrink("")
      setIngredients("")
      setOccasion("")
      setNotes("")
    }
  } catch(e) {
    console.log("error in getData ")
    console.dir(e)
    // error reading value
  }
}

  // storeData converts the value stored in the info variable to a string
  // which is then writes into local storage using AsyncStorage.setItem.
  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value)
      //update name
      await AsyncStorage.setItem('@profile_info', jsonValue)
      console.log('just stored '+jsonValue)
    } catch (e) {
      console.log("error in storeData ")
      console.dir(e)
      // saving error
    }
}


  // clearAll calls AsyncStorate.clear to remove all local storage for this app
  // we could be more selective and only remove the profile_info, but for
  // debugging it is good to remove everything
  //no function
  const clearAll = async () => {
    try {
      console.log('in clearData')
      await AsyncStorage.clear()
    } catch(e) {
      console.log("error in clearData ")
      console.dir(e)
      // clear error
    }
}

// const Item = ({ title }) => (
//   <View style={styles.item}>
//     <Text style={styles.title}>{title}</Text>
//   </View>
// );


  return (
 <SafeAreaView style={[styles.container, {flexDirection: "column"}]}>
         <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
   <ThemeProvider>
     <FunctionContextComponent/>
  {/* header */}
    <View style= {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
       <Text style={styles.title}>Add to your grocery list</Text>
    </View>

    <View style= {{ flex: 8}}>
        <View style= {{marginTop:40,justifyContent: 'center', alignItems: 'center'}}>

            <View style= {{ alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                <View style= {{alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                <View style={styles.titleinput}>
                    <TextInput
                    multiline
                    style={styles.textinput}
                    placeholder="drink"
                    onChangeText={text => {
                      setDrink(text)
                    }}
                    value={drink}
                    />
                    </View>
                    <View style={styles.inputView}>
                    <TextInput
                    multiline
                    style={styles.textinput}
                    placeholder="ingredients"
                    onChangeText={text => {setIngredients(text)}}
                    value={ingredients}
                    />
                    </View>
                    <View style={styles.inputView}>
                    <TextInput
                    multiline
                    style={styles.textinput}
                    placeholder="occasion"
                    onChangeText={text => {setOccasion(text)}}
                    value={occasion}
                    />
                    </View>
                    <View style={styles.inputView}>
                    <TextInput
                    multiline
                    style={styles.textinput}
                    placeholder="notes"
                    onChangeText={text => {setNotes(text)}}
                    value={notes}
                    />
                    </View>
                <View/>
               
               <View>
                <View style={styles.button}>
                  <Button
                    title='Save Profile to Memory'
                    onPress = {() => {
                         console.log("saving profile");
                         const theInfo = {drink:drink,ingredients:ingredients, 
                         occasion:occasion,notes:notes} 
                         console.log(`theInfo=${theInfo}`)
                         setInfo(theInfo)
                         console.log('data='+JSON.stringify(theInfo))
                         //storeData!!!
                         storeData(theInfo)
                       }}
                  />
                 </View>


                 <View style={styles.button}>
                  <Button
                   title='Clear memory'
                  onPress = {() => {
                        console.log('clearing memory');
                        clearAll()
                      }}
                  />
                 </View>
                 <View style={styles.button}>
                  <Button
                  title='Load list from Memory'
                  onPress = {() => {
                        console.log('loading profile');
                        //getdata from useeffect, no this function
                        getData()
                      }}
                  />
                <View/>
                </View>

             </View>           
        </View>  
    </View>
  </View>
</View>
</ThemeProvider>
</ScrollView>
</SafeAreaView>

);
};





const styles = StyleSheet.create(
  {
container: {
  flex: 1,
  flexDirection:'column',
  justifyContent:'center',
  padding: 10,
},
item: {
  backgroundColor: "#c1e1ec",
  padding: 5,
  marginVertical: 5
},
header: {
  fontSize: 32,
},
inputView: {
  backgroundColor: "#c1e1ec",
  borderRadius: 30,
  width: "100%",
  height: 100,
  marginBottom: 20,
},
textinput: {
  height: 50,
  flex: 1,
  padding: 10,
},
titleinput: {
  backgroundColor: "#c1e1ec",
  borderRadius: 30,
  width: "100%",
  height: 40,
  marginBottom: 20,
},
button: {
  // height: 10,
  marginBottom: 10,
  alignItems: "center",
},
title: {
  fontSize: 24,

}


}

);


export default GroceryList;
