import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Test from './src/containers/Test';
import NewT from './src/containers/NewT';
import Entry from './src/containers/Entry';
import Lobby from './src/containers/Lobby';
import HomeTest from './src/containers/HomeTest';

import firebase from 'firebase';
import * as WebBrowser from 'expo-web-browser';

if (!firebase.apps.length) {
  firebase.initializeApp({
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
            options={{headerLeft: null}}
          />
          <Stack.Screen
            name="Lobby"
            component={Lobby}
          /> 
          <Stack.Screen
            name="HomeTest"
            component={HomeTest}
            options={{headerLeft: null}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
