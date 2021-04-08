import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar, Image, FlatList, TouchableOpacity, Button, TextInput } from 'react-native';

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
          nombre: "",
          numero: ""
        };
    }
    changeNumbers = (number) => {
        this.setState({
            numero: ("$" + {text}) 
        })
    }
    render(){
        return(
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View style={styles.account}>
                        <TextInput value={this.state.nombre} onChange={(text) => this.setState({ nombre: text })} placeholder="Nombre Cuenta" style={styles.input}/>
                        <View style={styles.debeHaber}>
                            <View style={styles.debe}>
                                <TextInput value={this.state.numero} placeholder="1.- $$" onChange={(number) => this.setState({ numero: number })} keyboardType='number-pad' style={styles.renglon}></TextInput>
                                <TextInput keyboardType='number-pad' style={styles.renglon}></TextInput>
                                <TextInput keyboardType='number-pad' style={styles.renglon}></TextInput>
                                <TextInput keyboardType='number-pad' style={styles.renglon}></TextInput>
                                <TextInput keyboardType='number-pad' style={styles.renglon}></TextInput>
                            </View>
                            <View style={styles.haber}>
                                <TextInput keyboardType='number-pad' style={styles.renglon}></TextInput>
                                <TextInput keyboardType='number-pad' style={styles.renglon}></TextInput>
                                <TextInput keyboardType='number-pad' style={styles.renglon}></TextInput>
                                <TextInput keyboardType='number-pad' style={styles.renglon}></TextInput>
                                <TextInput keyboardType='number-pad' style={styles.renglon}></TextInput>
                            </View>
                    </View>

                    </View>
                    
                </ScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      /*alignItems: 'center',*/
      justifyContent: 'center',
    },
    account:{
        padding: 15
    },
    input: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        textAlign: 'center',
        fontSize: 25
    },
    debeHaber: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start'
    },
    debe: {
        width: '50%',
        borderRightWidth: 1,
    },
    haber: {
        width: '50%',
        borderLeftWidth: 1
    },
    renglon: {
        borderBottomWidth: 0.5,
        height: 30
    }
  });