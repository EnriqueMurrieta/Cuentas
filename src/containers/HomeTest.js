import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, StatusBar, Image, TextInput, TouchableOpacity, Button } from 'react-native';

import * as firebase from 'firebase'
import 'firebase/firestore';

export default class Home extends Component {
    constructor (props) {
        super(props)
        this.state = {
            project: false,
            name: "",
            show: false,
            data: []
        }
    }
/*
    useEffect(() => {
        let alele = firebase.auth().currentUser
        console.log(alele)
    }, []);*/


    componentDidMount() {
        let user = firebase.auth().currentUser;
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
                    /*console.log(doc.data())*/
                    
                    /*info[index] = doc.data()*/
                    /*console.log(info[index])*/
                })
                /*console.log(info)
                console.log(info[1])*/
                this.setState({data:info, show:true})
                /*console.log(info)
                info.forEach(item =>{
                    console.log(item)
                })
                this.setState({informacion: info})*/
                /*this.setState( (state) => {
                    const informacion = info.map(item => item)
                    return{
                        informacion
                    } 
                })*/
            }
        })
    }

    render(){

        firebaseTest = () => {
            const db = firebase.firestore();
            db.collection("users").doc(firebase.auth().currentUser.uid).collection("projects").get().then((querySnapshot) => {
                if (!querySnapshot.empty){
                    querySnapshot.forEach((doc) => {
                        console.log(doc.data().name)
                    })
                } else {
                    console.log("No projects")
                }
            })
        }

        firebaseRender = () => {
            const db = firebase.firestore();
            db.collection("users").doc(firebase.auth().currentUser.uid).collection("projects").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    return <Text>{doc.data().name}</Text>
                })
            })
        }

       /* loadProjects = () => {
            const db = firebase.firestore();
            db.collection("users").doc(firebase.auth().currentUser.uid).collection("projects").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) =>{
                    <Text>{doc.data().name}</Text>
                })
            })
        }*/

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

        checkFirebase = (nombre) => {
            console.log("Hey dude")
            this.state.data.map(project => {
                project.name == nombre ? (
                    /*console.log(project),*/
                    this.props.navigation.navigate('NewT', {name:nombre, data:project}) 
                ) : null
            })
            
        }

        return(
            <SafeAreaView style={styles.container}>
                <ScrollView>
                    <View style={styles.top}>
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
                        <Button title="Firebase test" onPress={() => firebaseTest()}/>
                    </View>
                    {this.state.show ?
                        <View>
                            <Text style={styles.subtitle}>Projects</Text> 
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
                        <Text style={styles.subtitle}>No Projects...</Text>
                    }
                </ScrollView>
            </SafeAreaView>
            
        );
    }
}

/*
<Button title={this.state.data[1]}/>
                                <Button title={this.state.data[0]}/>
*/

/*
<View>
                        {db.collection("users").doc(firebase.auth().currentUser.uid).collection("projects").get().then((querySnapshot) => {
                            querySnapshot.forEach((doc) =>{
                                console.log(doc.data())
                            })
                        })}
                    </View>
*/


/*

*/

/*
 <Button title="Nuevo proyecto" onPress={() => navigation.navigate(NewT)}/>
*/

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
    }
})