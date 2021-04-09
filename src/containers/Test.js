import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar, Image, FlatList, TouchableOpacity, Button, TextInput } from 'react-native';

export default function Test() {
    
    const [number, onChangeNumber] = React.useState([]);
    const [text, onChangeText] = React.useState("");

    const addNumber = (entry, id) => {
        let newArr = [...number];
        const send = "$ " + entry
        {newArr[id] == undefined ? (
                newArr[id] = send, 
                onChangeNumber(newArr) 
            ) : (
                    newArr[id] = entry, 
                    onChangeNumber(newArr) 
                )
        } 
    }
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.account}>
                    <TextInput value={text} onChangeText={(entry, name) => onChangeText(entry)} placeholder="Nombre Cuenta" style={styles.input}/>
                    <View style={styles.debeHaber}>
                        <View style={styles.debe}>
                            <TextInput onChangeText={(entry) => addNumber(entry, 0)} value={number[0]} placeholder=" $$" keyboardType='number-pad' style={styles.renglon}/>
                            <TextInput onChangeText={(entry) => addNumber(entry, 1)} value={number[1]} placeholder=" $$" keyboardType='number-pad' style={styles.renglon}/>
                            <TextInput onChangeText={(entry) => addNumber(entry, 2)} value={number[2]} placeholder=" $$" keyboardType='number-pad' style={styles.renglon}/>
                            <TextInput onChangeText={(entry) => addNumber(entry, 3)} value={number[3]} placeholder=" $$" keyboardType='number-pad' style={styles.renglon}/>
                            <TextInput onChangeText={(entry) => addNumber(entry, 4)} value={number[4]} placeholder=" $$" keyboardType='number-pad' style={styles.renglon}/>
                            <TextInput onChangeText={(entry) => addNumber(entry, 5)} value={number[5]} placeholder=" $$" keyboardType='number-pad' style={styles.renglon}/>
                            <TextInput onChangeText={(entry) => addNumber(entry, 6)} value={number[6]} placeholder=" $$" keyboardType='number-pad' style={styles.renglon}/>
                            <TextInput onChangeText={(entry) => addNumber(entry, 7)} value={number[7]} placeholder=" $$" keyboardType='number-pad' style={styles.renglon}/>
                            <TextInput onChangeText={(entry) => addNumber(entry, 8)} value={number[8]} placeholder=" $$" keyboardType='number-pad' style={styles.renglon}/>
                            <TextInput onChangeText={(entry) => addNumber(entry, 9)} value={number[9]} placeholder=" $$" keyboardType='number-pad' style={styles.renglon}/>
                        </View>
                        <View style={styles.haber}>
                            <TextInput onChangeText={(entry) => addNumber(entry, 10)} value={number[10]} placeholder=" $$" keyboardType='number-pad' style={styles.renglon}/>
                            <TextInput onChangeText={(entry) => addNumber(entry, 11)} value={number[11]} placeholder=" $$" keyboardType='number-pad' style={styles.renglon}/>
                            <TextInput onChangeText={(entry) => addNumber(entry, 12)} value={number[12]} placeholder=" $$" keyboardType='number-pad' style={styles.renglon}/>
                            <TextInput onChangeText={(entry) => addNumber(entry, 13)} value={number[13]} placeholder=" $$" keyboardType='number-pad' style={styles.renglon}/>
                            <TextInput onChangeText={(entry) => addNumber(entry, 14)} value={number[14]} placeholder=" $$" keyboardType='number-pad' style={styles.renglon}/>
                            <TextInput onChangeText={(entry) => addNumber(entry, 15)} value={number[15]} placeholder=" $$" keyboardType='number-pad' style={styles.renglon}/>
                            <TextInput onChangeText={(entry) => addNumber(entry, 16)} value={number[16]} placeholder=" $$" keyboardType='number-pad' style={styles.renglon}/>
                            <TextInput onChangeText={(entry) => addNumber(entry, 17)} value={number[17]} placeholder=" $$" keyboardType='number-pad' style={styles.renglon}/>
                            <TextInput onChangeText={(entry) => addNumber(entry, 18)} value={number[18]} placeholder=" $$" keyboardType='number-pad' style={styles.renglon}/>
                            <TextInput onChangeText={(entry) => addNumber(entry, 19)} value={number[19]} placeholder=" $$" keyboardType='number-pad' style={styles.renglon}/>
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