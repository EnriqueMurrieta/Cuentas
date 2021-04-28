import React, { Component } from 'react';
import * as Google from 'expo-auth-session/providers/google';
import firebase from 'firebase';
import { Button, View, Text, StyleSheet, Image } from 'react-native';

// GOOGLE.USEIDTOKENAUTHREQUEST IS A HOOK? ***********************************************

let res = undefined;

export default class EntryTest extends Component {
    
    

    render(){

        /*const [request, response, promptAsync] = Google.useIdTokenAuthRequest(
            {
              clientId: '1078511714887-rl5g97m9fulb7ee9j0u1sfir1t94nf63.apps.googleusercontent.com',
              },
        );*/

        what = () => {

            const [request, response, promptAsync] = Google.useIdTokenAuthRequest(
                {
                  clientId: '1078511714887-rl5g97m9fulb7ee9j0u1sfir1t94nf63.apps.googleusercontent.com',
                  },
            );
    
            promptAsync();  
    
            res = response;
            paramount(res);
        }

        paramount = ((res) => {
            if (res?.type === 'success') {
                const { id_token } = res.params;
                const credential = firebase.auth.GoogleAuthProvider.credential(id_token);
                console.log('This should appear every log in');
                firebase.auth().signInWithCredential(credential).then(() => {
                  console.log('User signed in')
                  console.log('meanWhile')  
                  let meanWhile = firebase.auth().currentUser;
                      
                })
            }
        }, [res]);

        const test = () => {
            /*let meanWhile = firebase.auth().currentUser;
            console.log(meanWhile)*/
          }

        return(
            <View>
                <Button
                /*disabled={!request}*/
                title="Login Test"
                /*onPress={what}*/
                onPress={() => {
                    what();
                    }}
                />
                <Text>Hey, test...test</Text>
                <Button
                title="Test Test"
                onPress={test}
                />
            </View>
        );
    }
}