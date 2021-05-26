import React, { Component } from 'react';
import { Text } from 'react-native';

import firebase from 'firebase';

export default class Lobby extends Component {

    componentDidMount(){
        this.checkIfLoggedIn();
    }

    checkIfLoggedIn = () => {
        firebase.auth().onAuthStateChanged(user => {
            user ? this.props.navigation.navigate('HomeTest') : this.props.navigation.navigate('Entry')
        })
    }

    render(){
        return(
            <Text>Welcome to lobby</Text>
        );
    }
}