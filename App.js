import React, { Component } from 'react'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ExpensecComponent from './src/Components/ExpensecComponent'
import SubCategoryComponent from './src/Components/SubCategoryComponent'
const Stack = createStackNavigator();

export default function AppNavigation() {   
  return (
    <NavigationContainer>  
       <Stack.Navigator screenOptions={{ headerShown: false }}>
       <Stack.Screen  name="ExpensecComponent" component={ExpensecComponent} /> 
       <Stack.Screen  name="SubCategoryComponent" component={SubCategoryComponent} /> 
      
      </Stack.Navigator>
    </NavigationContainer>
  );
  
}