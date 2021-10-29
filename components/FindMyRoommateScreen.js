
import React, { useState, useEffect } from "react";
import {Button, Text, TextInput, View,StatusBar, StyleSheet, FlatList, SafeAreaView } from "react-native";


const FindMyRoommateScreen = (props) => {
  const [loading,setLoading] = useState(true);
  const [gender, setGender] = useState('');
  const [text, setText] = useState('');
  const [data,setData] = useState([]);
  

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=25&nat=us&gender='+gender)
      .then((response) => response.json())
      .then((response) => {
        setData(response.results)
        console.log(response.results)
        })
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, [gender]);



  const renderItem = ({item}) => {
    return (
      <View style={styles.renderItem}>
        <Text style={{flex:1,textAlign:'center'}}>{item.name.first + " "+ item.name.last}</Text>
        <Text style={{flex:1,textAlign:'center'}}>{item.gender}</Text>
        <Text style={{flex:1,textAlign:'center'}}>{item.dob.age}</Text>
        <Text style={{flex:1,textAlign:'center'}}>{item.location.city +", "+ item.location.state}</Text>
        
     </View>
  )}
  
  const DATA = data.map((x) => {
    x.id = x.login.uuid
    return(x)
  })


  return (
    <SafeAreaView style={styles.container}>
    {/* <View style={{flex:1}}>
      <View style={styles.filter}>
        <Text style={{fontSize:20}}>Filter by    
     
        <TextInput
          style={{height: 40}}
          placeholder=" male or female"
          onChangeText={text => {setText(text)}}
        />
        </Text>

        <Button
        onPress={() => {
        setGender(text)
        }}
        title="Check"
        />
      </View>
    </View> */}

    <View style={{ flex:8}}>
      <View style={{flexDirection:'row'}}>
        <Text style={styles.title}>Name</Text>
        <Text style={styles.title}>Gender</Text>
        <Text style={styles.title}>Age</Text>
        <Text style={styles.title}>Location</Text>
     </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.login.uuid}
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
    flexDirection:'row',
  },
  renderItem: {
    flex:4,
    backgroundColor: '#FFFFCC',
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

export default FindMyRoommateScreen;
