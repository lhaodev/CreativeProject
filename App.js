// In App.js in a new project
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './components/HomeScreen';
import AboutMeScreen from './components/AboutMeScreen';
import FindMyRoommateScreen from './components/FindMyRoommateScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';



const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'ios-information-circle'
                : 'ios-list';
            } 
            else if (route.name === 'Find My Roommate') {
              iconName = focused ? 'ios-star' : 'ios-list';
            } 
            else if (route.name === 'About Me') {
              iconName = focused ? 'ios-heart' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#89CFF0',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Find My Roommate" component={FindMyRoommateScreen} />
        <Tab.Screen name="About Me" component={AboutMeScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;


