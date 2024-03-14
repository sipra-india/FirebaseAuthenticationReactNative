import {useEffect, useState} from 'react';
import {
  Alert,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SignIn from './SignIn';
import SignUp from './SignUp';

function App() {
  const [LoggedIn, SetLoggedIn] = useState(false);
  const [HasAccount, SetHasAccount] = useState(false);

  const HandleLogIn = (em: string,pass: string) => {
    SetHasAccount(true)
    auth().signInWithEmailAndPassword(em,pass).then(()=>{
      Alert.alert('Succesfully Logged In!')
      SetLoggedIn(true);
    }).catch(error => {
      Alert.alert(error.code)
    })
  }

  const HandleSignUp = (em: string,pass: string) => {
    SetHasAccount(false)
    auth()
  .createUserWithEmailAndPassword(em, pass)
  .then(() => {
    Alert.alert('User account created & signed in!');
    SetLoggedIn(true)
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      Alert.alert('That email address is already in use!');
    }

    if (error.code === 'auth/invalid-email') {
      Alert.alert('That email address is invalid!');
    }

    Alert.alert(error.code);
  });
  }

  // useEffect(()=>{
  //   if (auth().currentUser){
  //     SetLoggedIn(true)
  //   }else {
  //     SetLoggedIn(false)
  //   }
  // })
  //sanghaitra@gmail.com = ABcd123==
  return (<View>
    { LoggedIn ? <View>
      <Text>Logged In</Text>
      <Button title='Log Out' onPress={()=> SetLoggedIn(false)} />
       </View> : <View>
      {HasAccount? <SignIn login={HandleLogIn} signup={()=> SetHasAccount(false)} /> :
      <SignUp login={()=> SetHasAccount(true)} signup={HandleSignUp}/>}</View>}
  </View>);
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
