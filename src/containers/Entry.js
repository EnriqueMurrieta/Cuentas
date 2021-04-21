import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { ResponseType } from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
import firebase from 'firebase';
import { Button, View, Text } from 'react-native';

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp({
    /* Config */
    apiKey: "AIzaSyDU9ktXyHx-aKpt_wm-IZ44AgvDXISujzE",
    authDomain: "portafolio-2bd12.firebaseapp.com",
    projectId: "portafolio-2bd12",
    storageBucket: "portafolio-2bd12.appspot.com",
    messagingSenderId: "1078511714887",
    appId: "1:1078511714887:web:61087d53f1ed5ee2322762",
    measurementId: "G-S1CE7274R3"
  });
}

WebBrowser.maybeCompleteAuthSession();

export default function Entry() {

    const [data, onChangeData] = React.useState();

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest(
    {
      clientId: '1078511714887-rl5g97m9fulb7ee9j0u1sfir1t94nf63.apps.googleusercontent.com',
      },
  );


  /*let user = "";*/
  React.useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      console.log(response);
      /*user = response.user;*/
      const credential = firebase.auth.GoogleAuthProvider.credential(id_token);
      console.log(credential);
      firebase.auth().signInWithCredential(credential);
    }
  }, [response]);

  return (
    <View>
        <Button
        disabled={!request}
        title="Login"
        onPress={() => {
            promptAsync();
            }}
        />
        <Text>Hey, test...test</Text>
    </View>
  );
}