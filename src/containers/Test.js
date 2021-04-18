import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar, Image, FlatList, TouchableOpacity, Button, TextInput } from 'react-native';
/*
let sum = 0;
let dato = [];
*/



export default function Test() {
    
    const [number, onChangeNumber] = React.useState([]);
    const [text, onChangeText] = React.useState("");
    const [total, onTotalChange] = React.useState();

/*
INSIDE ADDNUMBER CALL THE FUNCTION THAT SUMS THE ENTIRE STATE ARRAY
*/ 
    const totalSum = (newArr) => {
        /*sum = newArr[0]
        console.log(sum)*/
        let temp = 0
        parseInt(temp)
        let newSum = 0
        parseInt(newSum)
        newArr.forEach((element, index) => {
            {element == undefined ? 
                null
             : 
                index < 10 ? (
                    newSum = parseInt(element),
                    temp += newSum
                    ) : (
                    newSum = parseInt(element),
                    temp -= newSum 
                    )
            }
        })
        onTotalChange(temp)
        /*
        sum = parseInt(temp)
        console.log(parseInt(sum))
        */
        /*const resultado = newArr.reduce((acc, el) => acc + el, 0)
        console.log(resultado)*/
        /*const reducer = (accumulator, currentValue) => accumulator + currentValue;
        newArr.*/
    }

    const addNumber = (entry, id) => {
        let newArr = [...number];
        newArr[id] = entry
        /*console.log(newArr[id])*/
        onChangeNumber(newArr)
        /*const send = "$ " + entry
        {newArr[id] == undefined ? (
                newArr[id] = send,
                dato[id] = entry, 
                onChangeNumber(newArr) 
            ) : (
                    newArr[id] = entry,
                    dato[id] = entry, 
                    onChangeNumber(newArr) 
                )
        }*/
        totalSum(newArr);
    }
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.account}>
                    <TextInput value={text} onChangeText={(entry, name) => onChangeText(entry)} placeholder="Nombre Cuenta" style={styles.input}/>
                    <View style={styles.debeHaber}>
                        <View style={styles.debe}>
                            <View style={styles.renglonContainer}>
                                <Text style={styles.contained1}>$</Text>
                                <TextInput onChangeText={(entry) => addNumber(entry, 0)} value={number[0]} placeholder=" --" keyboardType='number-pad' style={styles.renglon}/>
                            </View>
                            <View style={styles.renglonContainer}>
                                <Text style={styles.contained1}>$</Text>
                                <TextInput onChangeText={(entry) => addNumber(entry, 1)} value={number[1]} placeholder=" --" keyboardType='number-pad' style={styles.renglon}/>
                            </View>
                            <View style={styles.renglonContainer}>
                                <Text style={styles.contained1}>$</Text>
                                <TextInput onChangeText={(entry) => addNumber(entry, 2)} value={number[2]} placeholder=" --" keyboardType='number-pad' style={styles.renglon}/>
                            </View>
                            <View style={styles.renglonContainer}>
                                <Text style={styles.contained1}>$</Text>
                                <TextInput onChangeText={(entry) => addNumber(entry, 3)} value={number[3]} placeholder=" --" keyboardType='number-pad' style={styles.renglon}/>
                            </View>
                            <View style={styles.renglonContainer}>
                                <Text style={styles.contained1}>$</Text>
                                <TextInput onChangeText={(entry) => addNumber(entry, 4)} value={number[4]} placeholder=" --" keyboardType='number-pad' style={styles.renglon}/>
                            </View>
                            <View style={styles.renglonContainer}>
                                <Text style={styles.contained1}>$</Text>
                                <TextInput onChangeText={(entry) => addNumber(entry, 5)} value={number[5]} placeholder=" --" keyboardType='number-pad' style={styles.renglon}/>
                            </View>
                            <View style={styles.renglonContainer}>
                                <Text style={styles.contained1}>$</Text>
                                <TextInput onChangeText={(entry) => addNumber(entry, 6)} value={number[6]} placeholder=" --" keyboardType='number-pad' style={styles.renglon}/>
                            </View>
                            <View style={styles.renglonContainer}>
                                <Text style={styles.contained1}>$</Text>
                                <TextInput onChangeText={(entry) => addNumber(entry, 7)} value={number[7]} placeholder=" --" keyboardType='number-pad' style={styles.renglon}/>
                            </View>
                            <View style={styles.renglonContainer}>
                                <Text style={styles.contained1}>$</Text>
                                <TextInput onChangeText={(entry) => addNumber(entry, 8)} value={number[8]} placeholder=" --" keyboardType='number-pad' style={styles.renglon}/>
                            </View>
                            <View style={styles.renglonContainer}>
                                <Text style={styles.contained1}>$</Text>
                                <TextInput onChangeText={(entry) => addNumber(entry, 9)} value={number[9]} placeholder=" --" keyboardType='number-pad' style={styles.renglon}/>
                            </View>  
                        </View>
                        <View style={styles.haber}>
                            <View style={styles.renglonContainer}>
                                <Text style={styles.contained1}>$</Text>
                                <TextInput onChangeText={(entry) => addNumber(entry, 10)} value={number[10]} placeholder=" --" keyboardType='number-pad' style={styles.renglon}/>
                            </View>
                            <View style={styles.renglonContainer}>
                                <Text style={styles.contained1}>$</Text>
                                <TextInput onChangeText={(entry) => addNumber(entry, 11)} value={number[11]} placeholder=" --" keyboardType='number-pad' style={styles.renglon}/>
                            </View>
                            <View style={styles.renglonContainer}>
                                <Text style={styles.contained1}>$</Text>
                                <TextInput onChangeText={(entry) => addNumber(entry, 12)} value={number[12]} placeholder=" --" keyboardType='number-pad' style={styles.renglon}/>
                            </View>
                            <View style={styles.renglonContainer}>
                                <Text style={styles.contained1}>$</Text>
                                <TextInput onChangeText={(entry) => addNumber(entry, 13)} value={number[13]} placeholder=" --" keyboardType='number-pad' style={styles.renglon}/>
                            </View>
                            <View style={styles.renglonContainer}>
                                <Text style={styles.contained1}>$</Text>
                                <TextInput onChangeText={(entry) => addNumber(entry, 14)} value={number[14]} placeholder=" --" keyboardType='number-pad' style={styles.renglon}/>
                            </View>
                            <View style={styles.renglonContainer}>
                                <Text style={styles.contained1}>$</Text>
                                <TextInput onChangeText={(entry) => addNumber(entry, 15)} value={number[15]} placeholder=" --" keyboardType='number-pad' style={styles.renglon}/>
                            </View>
                            <View style={styles.renglonContainer}>
                                <Text style={styles.contained1}>$</Text>
                                <TextInput onChangeText={(entry) => addNumber(entry, 16)} value={number[16]} placeholder=" --" keyboardType='number-pad' style={styles.renglon}/>
                            </View>
                            <View style={styles.renglonContainer}>
                                <Text style={styles.contained1}>$</Text>
                                <TextInput onChangeText={(entry) => addNumber(entry, 17)} value={number[17]} placeholder=" --" keyboardType='number-pad' style={styles.renglon}/>
                            </View>
                            <View style={styles.renglonContainer}>
                                <Text style={styles.contained1}>$</Text>
                                <TextInput onChangeText={(entry) => addNumber(entry, 18)} value={number[18]} placeholder=" --" keyboardType='number-pad' style={styles.renglon}/>
                            </View>
                            <View style={styles.renglonContainer}>
                                <Text style={styles.contained1}>$</Text>
                                <TextInput onChangeText={(entry) => addNumber(entry, 19)} value={number[19]} placeholder=" --" keyboardType='number-pad' style={styles.renglon}/>
                            </View>
                        </View>
                    </View>
                </View>
                <Text style={styles.total}>{total}</Text>
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
    total: {
        borderWidth: 2,
        marginLeft: 15,
        borderColor: 'green',
        width: '50%'
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
        borderRightWidth: 1
    },
    renglonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        /*justifyContent: 'space-between',*/
        alignItems: 'flex-start',
        marginLeft: 5
    },
    contained1: {
        width: '10%',
        marginTop: 6.5
    },
    /*contained2: {
        width: '90%'
    },*/
    haber: {
        width: '50%',
        borderLeftWidth: 1
    },
    renglon: {
        borderBottomWidth: 0.5,
        height: 30,
        width: '90%'
    }
  });