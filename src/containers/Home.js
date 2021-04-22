import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar, Image, FlatList, TouchableOpacity, Button } from 'react-native';

import firebase from 'firebase';

export default class Home extends Component {

    logout = () => {
        firebase.auth().signOut().then(() => {
          console.log('User signed out');
        })
    }

    render(){
        return(
            <View>
                <TouchableOpacity>
                    <Button title="Nuevo proyecto" onPress={() => this.props.navigation.navigate('NewT')}/>
                </TouchableOpacity>
                <Text></Text>
                <Button title="Sign Out" onPress={() => firebase.auth().signOut()}/>
            </View>
        );
    }
}