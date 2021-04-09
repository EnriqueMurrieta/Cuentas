import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar, Image, FlatList, TouchableOpacity, Button, TextInput } from 'react-native';

export default function Test() {
    
    const [number, onChangeNumber] = React.useState([]);
    const [text, onChangeText] = React.useState("");

    const addNumber = (entry, name) => {
        let newArr = [...number];
        const send = "$ " + entry
        /*console.log(newArr[0])*/
        {newArr[0] == undefined ? (
                newArr[0] = send, 
                onChangeNumber(newArr) 
            ) : (
                    newArr[0] = entry, 
                    onChangeNumber(newArr) 
                )
        } 
    }
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.account}>
                    <TextInput name={0} value={text} onChangeText={(entry, name) => onChangeText(entry)} placeholder="Nombre Cuenta" style={styles.input}/>
                    <View style={styles.debeHaber}>
                        <View style={styles.debe}>
                            <TextInput onChangeText={(entry) => addNumber(entry)} value={number[0]} placeholder="1.- $$" keyboardType='number-pad' style={styles.renglon}></TextInput>
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