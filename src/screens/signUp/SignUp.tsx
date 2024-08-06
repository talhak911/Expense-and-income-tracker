import {Button, Text, TextInput, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {useSignUp} from './useSignUp';

import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { useFocusEffect } from '@react-navigation/native';
import React from 'react';

export const SignUp = () => {
  
  const {
    onRegisterPress,
    onSignInPress,
    setEmail,
    setName,
    setPassword,
    signInWithGoogle,
    password,
    email,
    name,
    loading,
  } = useSignUp();
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'white',
        paddingTop: 30,
      }}>
      <KeyboardAwareScrollView
        style={{flex: 1, width: '100%'}}
        keyboardShouldPersistTaps="always">
        <TextInput
          style={styles.input}
          placeholder="Name"
          placeholderTextColor="#aaaaaa"
          onChangeText={text => setName(text)}
          value={name}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#aaaaaa"
          onChangeText={text => setEmail(text)}
          value={email}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          placeholder="Password"
          onChangeText={text => setPassword(text)}
          value={password}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
        />
       {loading?<Text
       style={{alignSelf:"center",fontSize:20,fontWeight:"bold"}}
       >Loading</Text>:
     <>
        <TouchableOpacity
        disabled={loading}
        style={styles.button}
        onPress={() => onRegisterPress()}>
        <Text style={styles.buttonTitle}>Sign Up</Text>
        {loading && <Text>Loading</Text>}
      </TouchableOpacity>
      <TouchableOpacity
        disabled={loading}
        style={styles.button}
        onPress={() => signInWithGoogle()}>
        <Text style={styles.buttonTitle}>Sign in with google</Text>
        {loading && <Text>Loading</Text>}
      </TouchableOpacity>
     </>
       }
        <View style={styles.footerView}>
          <View style={styles.footerContainer}>
            <Text style={styles.footerText}>Already got an account?</Text>
            <TouchableOpacity onPress={onSignInPress}>
              <Text style={styles.footerLink}>Log in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};
