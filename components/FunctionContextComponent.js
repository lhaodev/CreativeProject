import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button,} from 'react-native';

import {useTheme, useThemeUpdate} from './ThemeContext'

export default function FunctionContextComponent(){
    const darkTheme = useTheme()
    const toggleTheme = useThemeUpdate()
    const themeStyles={
        backgroundColor: darkTheme? '#333':'#CCC',
        color: darkTheme? '#CCC': '#333',
        padding:'2rem',
        margin:'2rem'
      }

 return (
     <View>
         <Button onPress={toggleTheme} title='toggle to change theme'/>
     </View>
 )


}

// const styles = StyleSheet.create(
//     {
//   theme: {
//     backgroundColor: darkTheme? '#333':'#CCC',
//     color: darkTheme? '#CCC': '#333',
//     padding:'2rem',
//     margin:'2rem'
//   },

//   }
  
//   );
  