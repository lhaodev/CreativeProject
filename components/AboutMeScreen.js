import * as React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, SafeAreaView, SectionList, StatusBar  } from 'react-native';



const DATA = [
  {
    title: "Gender",
    data: ["Female"]
  },
  {
    title: "Age",
    data: ["25"]
  },
  {
    title: "Location",
    data: ["Waltham, MA"]
  },

  {
    title: "Habit",
    data: ["Reading", "Hiking", "Watching TV"]
  },
 
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const AboutMeScreen = () => {
  return (
<SafeAreaView style={[styles.container, {
    flexDirection: "column"
  }]}>
    <View style= {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
  <Text style={styles.title}>Personal Information</Text>
  </View>
   <View style= {{ flex: 8}}>
    <View style= {{flexDirection:'row', flex: 5}}>
        <View style= {{flex: 5, alignItems: 'flex-start', justifyContent: 'flex-start'}}>
            <Image  source={{uri:'https://avatars.githubusercontent.com/u/71423804?v=4'}}
                 style={{width:'50%',height:'50%'}}/>
        </View>
        <View style= {{flex:3 , alignItems: 'flex-start', justifyContent: 'flex-start'}}>
        <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <Text style={styles.header}>{title}</Text>
      )}
    />
        </View>
      
    </View>
  </View>
  </SafeAreaView>
    );
};
const styles = StyleSheet.create({
container: {
  flex: 1,
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
title: {
  fontSize: 24,
  fontFamily: 'ShadowsIntoLight-Regular'
}
});

export default AboutMeScreen;
