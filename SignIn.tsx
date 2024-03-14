import {useEffect, useState} from 'react';
import {Text,View,TextInput, TouchableOpacity, Button, StyleSheet} from 'react-native';

const SignIn = (props: { login: any; signup: any }) => {

    const { login, signup} = props
    const [pass, SetPass] = useState('');
    const [em, SetEm] = useState('');
    
    return (
        <View style={styles.container}>
            <TextInput style={styles.input} placeholder='Enter Email' value={em} onChangeText={(em)=> SetEm(em)} ></TextInput>
            <TextInput style={styles.input} placeholder='Enter Password' value={pass} onChangeText={(pass) => SetPass(pass)} ></TextInput>
            <Button title='Log In' disabled={em == '' && pass == ''} onPress={()=> login(em,pass)}/>
            <TouchableOpacity onPress={signup}>
            <Text>Don't have account? Sign Up</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SignIn;

const styles = StyleSheet.create(
    {
        disabedBtn: {
            backgroundColor: 'lightblue',
        },
        container: {
            backgroundColor: 'lightpink',
        },
        input: {
            backgroundColor: 'lightpink',
        }
    }
)