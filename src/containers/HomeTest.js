import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar, Image, TextInput, TouchableOpacity, Button } from 'react-native';

import * as firebase from 'firebase'
import 'firebase/firestore';



export default class Home extends Component {
    constructor (props) {
        super(props)
        this.state = {
            project: false,
            name: ""
        }
    }
/*
    useEffect(() => {
        let alele = firebase.auth().currentUser
        console.log(alele)
    }, []);*/

    componentDidMount() {
        let user = firebase.auth().currentUser;
        console.log(user);
        const dbh = firebase.firestore();
        dbh.collection("users").doc(user.uid).set({
            name: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
        })
    }

    render(){
        
        logout = () => {
            firebase.auth().signOut().then(() => {
              console.log('User signed out');
            })
        }

        nuevoProyecto = () => {
            this.setState({project:true})
        }

        nombreProyecto = (entry) => {
            this.setState({name:entry})
        }

        navegar = () => {
            this.props.navigation.navigate('NewT', {name:this.state.name})
        }

        return(
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <TouchableOpacity>
                        <Button title="Nuevo Proyecto" onPress={() => nuevoProyecto()}/>
                    </TouchableOpacity>
                    {this.state.project == true ?
                        <View style={styles.form}>
                            <TextInput value={this.state.name} onChangeText={(entry)=> nombreProyecto(entry)} placeholder="Nombre del proyecto" style={styles.input}/>
                            {this.state.name != "" ?
                                <Button title="Ir" onPress={() => navegar()} style={styles.submit}/>
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
}

/*

*/


/*

*/

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