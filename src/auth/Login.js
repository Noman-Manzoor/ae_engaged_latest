import React, { useState } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator, StyleSheet, Image } from 'react-native';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { app_auth } from '../../firebaseConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = app_auth;

    const signIn = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, email, password);
            console.log(response);

            const token = response.user.stsTokenManager.accessToken;

            await AsyncStorage.setItem('userToken', token);

            //  navigation.navigate('Home');
            navigation.reset({
                index: 0,
                routes: [{ name: 'Home' }],
              });
              

        } catch (error) {
            // console.error(error);
            alert(`Sign in failed`);
        } finally {
            setLoading(false);
        }
    };

    const goToSignUp = () => {
        navigation.navigate('Signup');
    };

    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/images/logo.png')}
                style={styles.logo}
            />
            <Text style={styles.title}>Login</Text>

            <TextInput 
                placeholder="Email" 
                value={email} 
                onChangeText={setEmail} 
                style={styles.input}
            />

            <TextInput 
                placeholder="Password" 
                value={password} 
                onChangeText={setPassword} 
                secureTextEntry 
                style={styles.input}
            />

            {loading ? (
                <ActivityIndicator size="large" color="#3A8EED" />
            ) : (
                <>
                    <Button title="Login" onPress={signIn} color="#3A8EED" />
                    <View style={styles.signupContainer}>
                        <Text>Don't have an account?</Text>
                    </View>
                    <Button title="Signup" onPress={goToSignUp} color="#7FB3D5" />
                </>
            )}
            
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#F7F9FC'
    },
    logo: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginBottom: 20,
        borderRadius: 75 // half of width and height for a perfect circle
    },
    title: {
        fontSize: 28,
        marginBottom: 20,
        color: '#34495E',
        textAlign: 'center'
    },
    input: {
        borderWidth: 1,
        borderColor: '#D6DBDF',
        borderRadius: 10,
        padding: 15,
        marginBottom: 10,
        backgroundColor: '#FFFFFF'
    },
    signupContainer: {
        marginTop: 15,
        marginBottom:20,
        alignItems: 'center'
    }
});

export default Login;
