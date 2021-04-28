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
import Lobby from './src/containers/Lobby';
import EntryTest from './src/containers/EntryTest';
import HomeTest from './src/containers/HomeTest';

import firebase from 'firebase';
import * as WebBrowser from 'expo-web-browser';

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp({
    /* Config */
    apiKey: "AIzaSyDU9ktXyHx-aKpt_wm-IZ44AgvDXISujzE",
    authDomain: "portafolio-2bd12.firebaseapp.com",
    projectId: "portafolio-2bd12",
    storageBucket: "portafolio-2bd12.appspot.com",
    messagingSenderId: "1078511714887",
    appId: "1:1078511714887:web:61087d53f1ed5ee2322762",
    measurementId: "G-S1CE7274R3"
  });
}

WebBrowser.maybeCompleteAuthSession();

const Stack = createStackNavigator();

export default class App extends Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Lobby">
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
          <Stack.Screen
            name="Lobby"
            component={Lobby}
          />
          <Stack.Screen
            name="EntryTest"
            component={EntryTest}
          />
          <Stack.Screen
            name="HomeTest"
            component={HomeTest}
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
