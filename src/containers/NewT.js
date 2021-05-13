import React, { Component, useEffect, useLayoutEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar, Image, FlatList, TouchableOpacity, Button } from 'react-native';
import { roundToNearestPixel } from 'react-native/Libraries/Utilities/PixelRatio';
import Test from './Test';

import * as firebase from 'firebase'
import 'firebase/firestore';

export default function Home ({route, navigation}) {
    const {name, data} = route.params;

    const [suma1, sumaCambio1] = React.useState();
    const [cuenta1, onChangeCuenta1] = React.useState("");
    const [number1, onChangeNumber1] = React.useState([]);

    const [suma2, sumaCambio2] = React.useState();
    const [cuenta2, onChangeCuenta2] = React.useState("");
    const [number2, onChangeNumber2] = React.useState([]);

    const [suma3, sumaCambio3] = React.useState();
    const [cuenta3, onChangeCuenta3] = React.useState("");
    const [number3, onChangeNumber3] = React.useState([]);

    const [suma4, sumaCambio4] = React.useState();
    const [cuenta4, onChangeCuenta4] = React.useState("");
    const [number4, onChangeNumber4] = React.useState([]);

    const [suma5, sumaCambio5] = React.useState();
    const [cuenta5, onChangeCuenta5] = React.useState("");
    const [number5, onChangeNumber5] = React.useState([]);

    const [suma6, sumaCambio6] = React.useState();
    const [cuenta6, onChangeCuenta6] = React.useState("");
    const [number6, onChangeNumber6] = React.useState([]);

    const [suma7, sumaCambio7] = React.useState();
    const [cuenta7, onChangeCuenta7] = React.useState("");
    const [number7, onChangeNumber7] = React.useState([]);

    const [suma8, sumaCambio8] = React.useState();
    const [cuenta8, onChangeCuenta8] = React.useState("");
    const [number8, onChangeNumber8] = React.useState([]);

    const [suma9, sumaCambio9] = React.useState();
    const [cuenta9, onChangeCuenta9] = React.useState("");
    const [number9, onChangeNumber9] = React.useState([]);

    const [suma10, sumaCambio10] = React.useState();
    const [cuenta10, onChangeCuenta10] = React.useState("");
    const [number10, onChangeNumber10] = React.useState([]);

    const setArrToFirestore = (arr, newArr) => {
        arr.forEach((number, index) => {
            {number != undefined ? newArr[index] = number : newArr[index] = 0}
        });
    }

    const setSumaToFirestore = (int) => {
        let newSuma;
        {int != undefined ? newSuma = int : newSuma = 0}
        return newSuma;
    }

    const setNumberToClientEach = (cuenta, loadedArr) => {
        cuenta.number.forEach((number, index) => {
            {number != 0 ? loadedArr[index] = number : loadedArr[index] = undefined}
        })
    }

    const setNumberToClient = () => {
        let loadedArr1 = [];
        let loadedArr2 = [];
        let loadedArr3 = [];
        let loadedArr4 = [];
        let loadedArr5 = [];
        let loadedArr6 = [];
        let loadedArr7 = [];
        let loadedArr8 = [];
        let loadedArr9 = [];
        let loadedArr10 = [];
        setNumberToClientEach(data.cuenta1, loadedArr1)
        setNumberToClientEach(data.cuenta2, loadedArr2)
        setNumberToClientEach(data.cuenta3, loadedArr3)
        setNumberToClientEach(data.cuenta4, loadedArr4)
        setNumberToClientEach(data.cuenta5, loadedArr5)
        setNumberToClientEach(data.cuenta6, loadedArr6)
        setNumberToClientEach(data.cuenta7, loadedArr7)
        setNumberToClientEach(data.cuenta8, loadedArr8)
        setNumberToClientEach(data.cuenta9, loadedArr9)
        setNumberToClientEach(data.cuenta10, loadedArr10)
        onChangeNumber1(loadedArr1)
        onChangeNumber2(loadedArr2)
        onChangeNumber3(loadedArr3)
        onChangeNumber4(loadedArr4)
        onChangeNumber5(loadedArr5)
        onChangeNumber6(loadedArr6)
        onChangeNumber7(loadedArr7)
        onChangeNumber8(loadedArr8)
        onChangeNumber9(loadedArr9)
        onChangeNumber10(loadedArr10)
    }

    setNameToClient = () => {
        onChangeCuenta1(data.cuenta1.cuenta)
        onChangeCuenta2(data.cuenta2.cuenta)
        onChangeCuenta3(data.cuenta3.cuenta)
        onChangeCuenta4(data.cuenta4.cuenta)
        onChangeCuenta5(data.cuenta5.cuenta)
        onChangeCuenta6(data.cuenta6.cuenta)
        onChangeCuenta7(data.cuenta7.cuenta)
        onChangeCuenta8(data.cuenta8.cuenta)
        onChangeCuenta9(data.cuenta9.cuenta)
        onChangeCuenta10(data.cuenta10.cuenta)
    }

    setSumaToClient = () => {
        sumaCambio1(data.cuenta1.suma)
        sumaCambio2(data.cuenta2.suma)
        sumaCambio3(data.cuenta3.suma)
        sumaCambio4(data.cuenta4.suma)
        sumaCambio5(data.cuenta5.suma)
        sumaCambio6(data.cuenta6.suma)
        sumaCambio7(data.cuenta7.suma)
        sumaCambio8(data.cuenta8.suma)
        sumaCambio9(data.cuenta9.suma)
        sumaCambio10(data.cuenta10.suma)
    }

    setClientLoad = () => {
        setNameToClient(),
        setSumaToClient(),
        setNumberToClient()
    }

    useEffect(() => {
        data ? 
            setClientLoad()    
        : null
    },[data])

    const guardar = () => {
        let newArr1 = [];
        let newArr2 = [];
        let newArr3 = [];
        let newArr4 = [];
        let newArr5 = [];
        let newArr6 = [];
        let newArr7 = [];
        let newArr8 = [];
        let newArr9 = [];
        let newArr10 = [];
        setArrToFirestore(number1, newArr1);
        setArrToFirestore(number2, newArr2);
        setArrToFirestore(number3, newArr3);
        setArrToFirestore(number4, newArr4);
        setArrToFirestore(number5, newArr5);
        setArrToFirestore(number6, newArr6);
        setArrToFirestore(number7, newArr7);
        setArrToFirestore(number8, newArr8);
        setArrToFirestore(number9, newArr9);
        setArrToFirestore(number10, newArr10);
        const newSuma1 = setSumaToFirestore(suma1);
        const newSuma2 = setSumaToFirestore(suma2);
        const newSuma3 = setSumaToFirestore(suma3);
        const newSuma4 = setSumaToFirestore(suma4);
        const newSuma5 = setSumaToFirestore(suma5);
        const newSuma6 = setSumaToFirestore(suma6);
        const newSuma7 = setSumaToFirestore(suma7);
        const newSuma8 = setSumaToFirestore(suma8);
        const newSuma9 = setSumaToFirestore(suma9);
        const newSuma10 = setSumaToFirestore(suma10);
        let user = firebase.auth().currentUser;
        const dbh = firebase.firestore();
        dbh.collection("users").doc(user.uid).collection("projects").doc(name).set({
            name: name,
            cuenta1: {
                suma: newSuma1,
                cuenta: cuenta1,
                number: newArr1
            },
            cuenta2: {
                suma: newSuma2,
                cuenta: cuenta2,
                number: newArr2
            },
            cuenta3: {
                suma: newSuma3,
                cuenta: cuenta3,
                number: newArr3
            },
            cuenta4: {
                suma: newSuma4,
                cuenta: cuenta4,
                number: newArr4
            },
            cuenta5: {
                suma: newSuma5,
                cuenta: cuenta5,
                number: newArr5
            },
            cuenta6: {
                suma: newSuma6,
                cuenta: cuenta6,
                number: newArr6
            },
            cuenta7: {
                suma: newSuma7,
                cuenta: cuenta7,
                number: newArr7
            },
            cuenta8: {
                suma: newSuma8,
                cuenta: cuenta8,
                number: newArr8
            },
            cuenta9: {
                suma: newSuma9,
                cuenta: cuenta9,
                number: newArr9
            },
            cuenta10: {
                suma: newSuma10,
                cuenta: cuenta10,
                number: newArr10
            }
        }).catch((error) =>{
            console.log("Error writing document: ", error);
        })
    }

    return(
        <ScrollView>
            <Button title="Guardar" onPress={() => guardar()}/>
            <Test suma={suma1} sumaCambio={sumaCambio1} cuenta={cuenta1} onChangeCuenta={onChangeCuenta1} number={number1} onChangeNumber={onChangeNumber1}/>
            <Test suma={suma2} sumaCambio={sumaCambio2} cuenta={cuenta2} onChangeCuenta={onChangeCuenta2} number={number2} onChangeNumber={onChangeNumber2}/>
            <Test suma={suma3} sumaCambio={sumaCambio3} cuenta={cuenta3} onChangeCuenta={onChangeCuenta3} number={number3} onChangeNumber={onChangeNumber3}/>
            <Test suma={suma4} sumaCambio={sumaCambio4} cuenta={cuenta4} onChangeCuenta={onChangeCuenta4} number={number4} onChangeNumber={onChangeNumber4}/>
            <Test suma={suma5} sumaCambio={sumaCambio5} cuenta={cuenta5} onChangeCuenta={onChangeCuenta5} number={number5} onChangeNumber={onChangeNumber5}/>
            <Test suma={suma6} sumaCambio={sumaCambio6} cuenta={cuenta6} onChangeCuenta={onChangeCuenta6} number={number6} onChangeNumber={onChangeNumber6}/>
            <Test suma={suma7} sumaCambio={sumaCambio7} cuenta={cuenta7} onChangeCuenta={onChangeCuenta7} number={number7} onChangeNumber={onChangeNumber7}/>
            <Test suma={suma8} sumaCambio={sumaCambio8} cuenta={cuenta8} onChangeCuenta={onChangeCuenta8} number={number8} onChangeNumber={onChangeNumber8}/>
            <Test suma={suma9} sumaCambio={sumaCambio9} cuenta={cuenta9} onChangeCuenta={onChangeCuenta9} number={number9} onChangeNumber={onChangeNumber9}/>
            <Test suma={suma10} sumaCambio={sumaCambio10} cuenta={cuenta10} onChangeCuenta={onChangeCuenta10} number={number10} onChangeNumber={onChangeNumber10}/>
        </ScrollView>
    );
}

/*
<Test/>
            <Test/>
            <Test/>
            <Test/>
            <Test/>
            <Test/>
            <Test/>
            <Test/>
            <Test/>

*/