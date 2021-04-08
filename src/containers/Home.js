import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar, Image, FlatList, TouchableOpacity, Button } from 'react-native';

export default class Home extends Component {
    render(){
        return(
            <View>
                <TouchableOpacity>
                    <Button title="Nuevo proyecto" onPress={() => this.props.navigation.navigate('Edit')}/>
                </TouchableOpacity>
                <Text></Text>
            </View>
        );
    }
}