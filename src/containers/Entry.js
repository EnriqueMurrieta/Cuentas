import React, { useEffect, useState } from 'react';
import * as Google from 'expo-auth-session/providers/google';
import firebase from 'firebase';
import { View, StyleSheet } from 'react-native';
import { SocialIcon } from 'react-native-elements';

export default function Entry({navigation}) {

  const [request, response, promptAsync] = Google.useIdTokenAuthRequest(
    {
      clientId: '1078511714887-rl5g97m9fulb7ee9j0u1sfir1t94nf63.apps.googleusercontent.com',
      },
  );

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      const credential = firebase.auth.GoogleAuthProvider.credential(id_token);
      console.log('This should appear every log in');
      firebase.auth().signInWithCredential(credential).then(() => {
        console.log('User signed in')
      })
    }
  }, [response]);

  useEffect(() => {
    navigation.setOptions({
      title: "Cuentas...Bienvenido"
    });
  })

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