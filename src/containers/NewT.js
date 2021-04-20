import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar, Image, FlatList, TouchableOpacity, Button } from 'react-native';
import Test from './Test';

export default class Home extends Component {
    render(){
        return(
            <ScrollView>
                <Test/>
                <Test/>
                <Test/>
                <Test/>
                <Test/>
                <Test/>
                <Test/>
                <Test/>
                <Test/>
                <Test/>
            </ScrollView>
        );
    }
}