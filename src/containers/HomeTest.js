import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image, TextInput, TouchableOpacity, Button } from 'react-native';
import { FAB } from 'react-native-elements';

import * as firebase from 'firebase'
import 'firebase/firestore';

import { CommonActions } from '@react-navigation/native';

export default class Home extends Component {
    constructor (props) {
        super(props)
        this.state = {
            project: false,
            name: "",
            show: false,
            data: [],
            userPhoto: ""
        }
    }

    componentDidMount() {
        let user = firebase.auth().currentUser;
        this.props.navigation.setOptions({ title: user.displayName })
        console.log(user.uid);
        const dbh = firebase.firestore();
        dbh.collection("users").doc(user.uid).set({
            name: user.displayName,
            email: user.email,
            photoURL: user.photoURL,
        })
        const db = firebase.firestore();
        db.collection("users").doc(firebase.auth().currentUser.uid).collection("projects").get().then((querySnapshot) => {
            if (!querySnapshot.empty){
                let info = []
                querySnapshot.forEach((doc) => {
                    info.push(doc.data())
                })
                this.setState({data:info, show:true, userPhoto: user.photoURL})
            } else {
                this.setState({userPhoto: user.photoURL})
            }
        })
        this.props.navigation.setOptions({
            headerRight: () => (
              <Button onPress={() => logout()} title="Cerrar sesión" />
            ),
        });
    }

    render(){

        logout = () => {
            firebase.auth().signOut().then(() => {
                this.props.navigation.dispatch(
                    CommonActions.reset({
                      index: 0,
                      routes: [
                        { name: 'Lobby' },
                      ],
                    })
                );
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

        checkFirebase = (nombre) => {
            this.state.data.map(project => {
                project.name == nombre ? (
                    this.props.navigation.navigate('NewT', {name:nombre, data:project}) 
                ) : null
            })
            
        }

        return(
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View style={styles.top}>
                        {this.state.userPhoto == "" ?
                            null
                        : <Image style={styles.userImg} source={{uri: this.state.userPhoto}}/>
                        }
                        <TouchableOpacity>
                            <FAB title="Nuevo Proyecto" size='small' color='blue' onPress={() => nuevoProyecto()}/>
                        </TouchableOpacity>
                        {this.state.project == true ?
                            <View style={styles.form}>
                                <TextInput value={this.state.name} onChangeText={(entry)=> nombreProyecto(entry)} placeholder="Nombre del proyecto" style={styles.input}/>
                                {this.state.name != "" ?
                                    <Button title="Ir" onPress={() => navegar()} style={styles.submit}/>
                                : null }
                            </View>
                        : null } 
                    </View>
                    {this.state.show ?
                        <View>
                            <Text style={styles.subtitle}>Proyectos</Text> 
                            <View style={styles.projects}>
                                {this.state.data.map((project) => {
                                    return(
                                        <View key={project.name}>
                                            <Button onPress={() => checkFirebase(project.name)} title={project.name}/>
                                        </View>
                                    )
                                })}
                                 
                            </View>
                        </View>
                    : 
                        <Text style={styles.subtitle}>No hay proyectos aún...</Text>
                    }
                </ScrollView>
            </SafeAreaView>
            
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    top: {
        backgroundColor: '#d3d3d3'
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
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 25,
        marginTop: 15
    },
    projects: {
        alignItems: 'flex-start'
    },
    userImg: {
        alignSelf: 'flex-start',
        margin: 10,
        width: 75,
        height: 75,
        borderRadius: 37.5
    },
    signOut: {
        alignItems: 'flex-start',
    },
    nuevoProyecto: {
        alignItems: "center"
    }
})