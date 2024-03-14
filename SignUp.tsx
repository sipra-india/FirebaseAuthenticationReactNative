import {SetStateAction, useEffect, useState} from 'react';
import {Text,View,TextInput, TouchableOpacity, Button, StyleSheet, Pressable} from 'react-native';


const SignUp = (props: { login: any; signup: any }) => {

    const { login, signup} = props

    const [em, SetEm] = useState('');
    const [emerr, SetEmerr] = useState('');
    const [pass, SetPass] = useState('');
    const [passerr, SetPasserr] = useState('');
    const [clrem, SetClrem] = useState('grey');
    const [clrpass, SetClrpass] = useState('grey');

    const EmChange = (em: string)=>{
        SetEm(em)
        if (!ValidEmail(em)){
            SetClrem('red')
            SetEmerr("InValid Email")
        }else{
            SetClrem('grey')
            SetEmerr('')
        }
    }

    const PassChange = (pass: string) =>{
        SetPass(pass)
        if (!ValidPassword(pass)){
            SetClrpass('red')
            SetPasserr("Password should be atleast 8 letters and needs to contain one uppercase letter, one lowercase letter, one digit and one symbol.")
        }else {
            SetClrpass('grey')
            SetPasserr('')
        }
    }

    const ValidEmail = (em: string) => {
        const email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return email.test(em);
    }

    const ValidPassword = (pass: string) => {
        return (
            /[a-z]/.test(pass) &&
            /[A-Z]/.test(pass) &&
            /\d/.test(pass) &&
            /\W/.test(pass) &&
            pass.length > 7
          );
    }
    
    return (
        <View style={styles.container}>
            <TextInput style={[styles.input, {borderColor: clrem}]} placeholder='Enter Email' value={em} onChangeText={(em)=> EmChange(em)} ></TextInput>
            <Text style={styles.error}>{emerr}</Text>
            <TextInput style={[styles.input, {borderColor: clrpass}]} placeholder='Enter Password' value={pass} onChangeText={(pass) => PassChange(pass)} ></TextInput>
            <Text style={styles.error}>{passerr}</Text>
            <Pressable style={(!ValidEmail(em) && !ValidPassword(pass)) ? styles.disabedBtn : styles.Btn} disabled={!ValidEmail(em) && !ValidPassword(pass)}  onPress={()=> signup(em,pass)}>
                <Text style={{fontSize: 19,}}>Sign Up</Text>
            </Pressable>
            <TouchableOpacity onPress={login}>
            <Text style={{textAlign: 'center'}}>Already have account? login</Text>
            </TouchableOpacity>
        </View>
    )
}

export default SignUp;

const styles = StyleSheet.create(
    {
        disabedBtn: {
            backgroundColor: 'lightgrey',
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 5,
            padding: 10,
        },
        container: {
            margin: 10,
            marginTop: 50,
        },
        input: {
            backgroundColor: '#EEEEEE',
            borderRadius: 15,
            borderWidth: 1.3,
        },
        error: {
            color: 'red',
            margin: 5,
            marginHorizontal: 10,
            fontSize: 11,
        },
        Btn: {
            backgroundColor: 'light',
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
            margin: 5,
            padding: 10,
        },
    }
)