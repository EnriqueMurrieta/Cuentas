import * as React from 'react';
import * as WebBrowser from 'expo-web-browser';
import { ResponseType } from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
import firebase from 'firebase';
import { Button, View, Text, StyleSheet, Image } from 'react-native';

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

  const [user, onChangeUser] = React.useState();

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest(
    {
      clientId: '1078511714887-rl5g97m9fulb7ee9j0u1sfir1t94nf63.apps.googleusercontent.com',
      },
  );

  /*let meanWhile = undefined;*/
  /*let user = "";*/
  React.useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      /*console.log(response);
      user = response.user;*/
      const credential = firebase.auth.GoogleAuthProvider.credential(id_token);
      /*console.log(credential);*/
      console.log('This should appear every log in');
      firebase.auth().signInWithCredential(credential).then(() => {
        console.log('User signed in')
      })
      console.log(user)
      onChangeUser(firebase.auth().currentUser);
      /*meanWhile = firebase.auth().currentUser;*/
      /*onChangeUser(meanWhile)*/
      /*console.log(firebase.auth().currentUser)*/
    }
  }, [response]);
/*
  let user = firebase.auth().currentUser;
  let name, email, photoUrl;

  {user != null ? (
    name = user.displayName,
    email = user.email,
    photoUrl = user.photoURL ) : null }
    */
  /*
  React.useEffect(() => {
    let meanWhile = firebase.auth().currentUser;
    onChangeUser(meanWhile)
  })*/

  const logout = () => {
    firebase.auth().signOut().then(() => {
      console.log('User signed out');
    })
    /*onChangeUser({})*/
  }

  const test = () => {
    let meanWhile = firebase.auth().currentUser;
    console.log(meanWhile)
  }


/*
  firebase.auth().currentUser ? onChangeUser(firebase.auth().currentUser) : null ; */

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
        <Button
          title="Logout"
          onPress={logout}
        />
        <Button
          title="Test"
          onPress={test}
        />
        {user != null ? 
        <Text>Signed in</Text> :
        <Text>Not signed in</Text> }
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 65,
    height: 65
  }
})

/*
{user != null ? 
          <View>
            <Text>{user.displayName}</Text>
            <Text>{user.email}</Text>
            <Image
              style={styles.img}
              source={{uri: user.photoURL}}
            />
          </View> : null }
*/