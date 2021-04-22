import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/containers/Home';
import Edit from './src/containers/Edit';
import Test from './src/containers/Test';
import NewT from './src/containers/NewT';
import Entry from './src/containers/Entry';

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Entry">
          <Stack.Screen
            name="Home"
            component={Home}
          />
        <Stack.Screen
            name="Edit"
            component={Edit}
          />
        <Stack.Screen
            name="Test"
            component={Test}
          />
          <Stack.Screen
            name="NewT"
            component={NewT}
          />
          <Stack.Screen
            name="Entry"
            component={Entry}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
