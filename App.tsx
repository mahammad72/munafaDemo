// In App.js in a new project

import * as React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from './src/screens/HomeScreen';
import Productlist from './src/screens/Productlist';
import ProfileScreen from './src/screens/ProfileScreen';
import PaymentHistory from './src/screens/PaymentHistory';

const Tab = createMaterialBottomTabNavigator();
const HomeStackNavigator = createNativeStackNavigator();
function HomeStack (){
  return(

    <HomeStackNavigator.Navigator>
        <HomeStackNavigator.Screen options={{
          headerShown:false
        }} name="Home" component={HomeScreen} />
        <HomeStackNavigator.Screen 
        options={{
          headerShown:false
        }} name="History" component={PaymentHistory} />
      </HomeStackNavigator.Navigator>
        )
}


function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="HomeStack"
      activeColor="#fff"
      barStyle={{ backgroundColor: '#3eb049' }}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Product"
        component={Productlist}
        options={{
          tabBarLabel: 'Product list',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="clipboard-list" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="account" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}


const Stack = createNativeStackNavigator();


function App() {
  return (
    <SafeAreaView style={{flex:1}}>

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{
          headerShown:false
        }} name="tab" component={MyTabs} />
        {/* <Stack.Screen name="Details" component={DetailsScreen} /> */}
      </Stack.Navigator>
    </NavigationContainer>
        </SafeAreaView>
  );
}

export default App;