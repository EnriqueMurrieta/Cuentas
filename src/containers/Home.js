import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar, Image, TextInput, TouchableOpacity, Button } from 'react-native';

import firebase from 'firebase';

export default function Home({navigation, NewT="NewT"}) {

    const [name, onChangeName] = React.useState("");
    const [project, onChangeProject] = React.useState(false);
/*
    useEffect(() => {
        let alele = firebase.auth().currentUser
        console.log(alele)
    }, []);*/

    logout = () => {
        firebase.auth().signOut().then(() => {
          console.log('User signed out');
        })
    }

    return(
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <TouchableOpacity>
                    <Button title="Nuevo Proyecto" onPress={() => onChangeProject(!project)}/>
                </TouchableOpacity>
                {project == true ?
                    <View style={styles.form}>
                        <TextInput value={name} onChangeText={(entry) => onChangeName(entry)} placeholder="Nombre del proyecto" style={styles.input}/>
                        {name != "" ?
                            <Button title="Ir" onPress={() => navigation.navigate(NewT, {name:name})} style={styles.submit}/>
                        : null }
                    </View>
                : null } 
                <Text>LALALALA</Text>
                <Button title="User" onPress={() => console.log(firebase.auth().currentUser)}/>
                <Button title="Sign Out" onPress={() => logout()}/>
            </ScrollView>
        </SafeAreaView>
        
    );
}

/*
 <Button title="Nuevo proyecto" onPress={() => navigation.navigate(NewT)}/>
*/

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    form: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        padding: 15
    },
    input: {
        borderBottomColor: 'black',
        borderBottomWidth: 2,
        textAlign: 'center',
        fontSize: 25,
        width: '80%'
    },
    submit: {
        width: '20%'
    }
})