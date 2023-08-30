import React, { useState } from 'react';
import { View, Text, TextInput, Button, ActivityIndicator, StyleSheet, Image } from 'react-native';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { app_auth } from '../../firebaseConfig';

const Signup = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const auth = app_auth;

    const signUp = async () => {
        setLoading(true);
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            navigation.navigate('Home');

        } catch (error) {
            // console.error(error);
            alert(`Signup failed: user already exist`);
        } finally {
            setLoading(false);
        }
    };

    const goToLogin = () => {
        navigation.navigate('Login');
    };


    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/images/logo2.png')}
                style={styles.logo}
            />
            <Text style={styles.title}>Signup</Text>

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
                    <Button title="Signup" onPress={signUp} color="#3A8EED" />
                    <View style={styles.loginContainer}>
                        <Text>Already have an account?</Text>
                    </View>
                    <Button title="Login" onPress={goToLogin} color="#7FB3D5" />
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
        borderRadius: 10, // increased border radius for a smoother look
        padding: 15, // increased padding for better visual appeal
        marginBottom: 10,
        backgroundColor: '#FFFFFF'
    },
    loginContainer: {
        marginTop: 15,
        marginBottom: 20,
        alignItems: 'center'
    }
});

export default Signup;