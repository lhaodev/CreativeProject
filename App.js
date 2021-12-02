// In App.js in a new project
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './components/LoginScreen';
import GroceryList from './components/GroceryList';
import Recipes from './components/Recipes';
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
            else if (route.name === 'CocktailDB') {
              iconName = focused ? 'ios-star' : 'ios-list';
            } 
            else if (route.name === 'Grocery List') {
              iconName = focused ? 'ios-heart' : 'ios-list';
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#89CFF0',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Home" component={LoginScreen} />
        {/* <Tab.Screen name="Find My Roommate" component={FindMyRoommateScreen} /> */}
        <Tab.Screen name="CocktailDB" component={Recipes} />
        <Tab.Screen name="Grocery List" component={GroceryList} />
      </Tab.Navigator>
      
    </NavigationContainer>
  );
}

export default App;


