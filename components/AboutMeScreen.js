import * as React from 'react';
import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TextInput, Button, SafeAreaView, SectionList, StatusBar  } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AboutMeScreen = () => {
const [info, setInfo] = useState({gender:'',age:'', 
city:'',stateGeo:'', habit:'',});
const [gender, setGender] = useState('');
const [age,setAge] = useState('');
const [city, setCity] = useState('');
const [stateGeo,setStateGeo] = useState('');
const [habit,setHabit] = useState('');

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
      setGender(data.gender)
      setAge(data.age)
      setCity(data.city)
      setStateGeo(data.stateGeo)
      setHabit(data.habit)
      console.log('just set Info')
    } else {
      console.log('just read a null value from Storage')
      setInfo({})
      setGender("")
      setAge("")
      setCity("")
      setStateGeo("")
      setHabit("")
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
  {/* header */}
    <View style= {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
       <Text style={styles.title}>Personal Information</Text>
    </View>
  {/* photo */}
    <View style= {{ flex: 8}}>
        <View style= {{flexDirection:'row', flex: 5}}>
            <View style= {{flex: 5, alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                <Image  source={{uri:'https://avatars.githubusercontent.com/u/71423804?v=4'}}
                 style={{width:'50%',height:'50%'}}/>
            </View>


          {/* put in data */}
            <View style= {{flex:3 , alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                <View style= {{flex:3 , alignItems: 'flex-start', justifyContent: 'flex-start'}}>
                <View style={styles.inputView}>
                    <TextInput
                    style={styles.textinput}
                    placeholder="gender"
                    onChangeText={text => {
                      setGender(text)
                    }}
                    value={gender}
                    />
                    </View>
                    <View style={styles.inputView}>
                    <TextInput
                    style={styles.textinput}
                    placeholder="age"
                    onChangeText={text => {setAge(text)}}
                    value={age}
                    />
                    </View>
                    <View style={styles.inputView}>
                    <TextInput
                    style={styles.textinput}
                    placeholder="city"
                    onChangeText={text => {setCity(text)}}
                    value={city}
                    />
                    </View>
                    <View style={styles.inputView}>
                    <TextInput
                    style={styles.textinput}
                    placeholder="state"
                    onChangeText={text => {setStateGeo(text)}}
                    value={stateGeo}
                    />
                    </View>
                    <View style={styles.inputView}>
                    <TextInput
                    style={styles.textinput}
                    placeholder="habit"
                    onChangeText={text => {setHabit(text)}}
                    value={habit}
                    />
                    </View>
                <View/>
               
               <View>
                <View style={styles.button}>
                  <Button
                    title='Save Profile to Memory'
                    onPress = {() => {
                         console.log("saving profile");
                         const theInfo = {gender:gender,age:age, 
                         city:city,stateGeo:stateGeo, habit:habit} 
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
                  title='Load Profile from Memory'
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
</SafeAreaView>

);
};





const styles = StyleSheet.create({
container: {
  flex: 1,
  flexDirection:'column',
  padding: 10,
},
item: {
  backgroundColor: "#f9c2ff",
  padding: 5,
  marginVertical: 5
},
header: {
  fontSize: 32,
},
inputView: {
  backgroundColor: "#FFC0CB",
  borderRadius: 30,
  width: "50%",
  height: 45,
  marginBottom: 20,
},
textinput: {
  height: 50,
  flex: 1,
  padding: 10,
  
},
button: {
  height: 30,
  marginBottom: 30,
  alignItems: "center",
},
title: {
  fontSize: 24,
  fontFamily: 'ShadowsIntoLight-Regular'
}
});


export default AboutMeScreen;
