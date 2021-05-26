import React, { useEffect, useState } from 'react';
import * as WebBrowser from 'expo-web-browser';
import { ResponseType } from 'expo-auth-session';
import * as Google from 'expo-auth-session/providers/google';
import firebase from 'firebase';
import { Button, View, Text, StyleSheet, Image } from 'react-native';
import { SocialIcon } from 'react-native-elements';

const useForceUpdate = () => {
  const [value, setValue] = useState(0); // integer state
  return () => setValue(value => value + 1); // update the state to force render
}

export default function Entry({navigation}) {

  const forceUpdate = useForceUpdate();

  const [user, onChangeUser] = useState();

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest(
    {
      clientId: '1078511714887-rl5g97m9fulb7ee9j0u1sfir1t94nf63.apps.googleusercontent.com',
      },
  );

  /*let meanWhile = undefined;*/
  /*let user = "";*/
  useEffect(() => {
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
      /*console.log(user)
      onChangeUser(firebase.auth().currentUser); */
      /*meanWhile = firebase.auth().currentUser;*/
      /*onChangeUser(meanWhile)*/
      /*console.log(firebase.auth().currentUser)*/
    }
  }, [response]);

  useEffect(() => {
    navigation.setOptions({
      title: "Cuentas...Bienvenido",
      headerLeft: () => (
        null
      )
  });
  })

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
/*
  const logout = () => {
    firebase.auth().signOut().then(() => {
      console.log('User signed out');
    })
    //onChangeUser({})
  }*/

  const test = () => {
    let meanWhile = firebase.auth().currentUser;
    console.log(meanWhile)
  }


/*
  firebase.auth().currentUser ? onChangeUser(firebase.auth().currentUser) : null ; */

  return (
    <View style={styles.container}>
        <SocialIcon
          title='Iniciar sesión con Google'
          button
          type='google'
          disabled={!request}
          onPress={() => {
            promptAsync();
            }}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  img: {
    width: 65,
    height: 65
  },
  container: {
    marginTop: '50%'
  }
})

/*
{user != null ? 
        <Text>Signed in</Text> :
        <Text>Not signed in</Text> }

*/


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

/*
<Button
          title="Logout"
          onPress={logout}
        />

*/