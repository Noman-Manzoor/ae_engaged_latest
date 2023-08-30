import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ScrollView } from 'react-native';


const CustomButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                width: '90%',
                height: 60,
                borderRadius: 16,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 20,
                borderColor: '#ab713c',
                borderWidth: 1,
                color: '#707070'
            }}
            onPress={onPress}
        >
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#707070' }}>{title}</Text>
        </TouchableOpacity>
    );
};

const HomeScreen = ({ navigation }) => {
    const logout = async () => {
        // Clear user data
        await AsyncStorage.removeItem('userToken');

        navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
        });
    };

    return (
        <View style={{ flex: 1, backgroundColor: '#90b1c2', justifyContent: 'center', alignItems: 'center', paddingTop: 25 }}>
            <TouchableOpacity
                style={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    padding: 10,
                    borderRadius: 20,
                    backgroundColor: 'white',
                    borderColor: '#ab713c',
                    borderWidth: 1,
                }}
                onPress={logout}
            >
                <Text style={{ fontSize: 14, fontWeight: 'bold' }}>Logout</Text>
            </TouchableOpacity>
            <Image
                source={require('../../assets/images/logo2.png')}
                style={{ width: 200, height: 200, borderRadius: 100, marginBottom: 20 }}
            />
            <ScrollView
                contentContainerStyle={{
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
                style={{ width: '100%' }}>
                <CustomButton
                    title="Workshop"
                    onPress={() => navigation.navigate('Workshop')}
                />
                <CustomButton
                    title="Booster"
                    onPress={() => navigation.navigate('Booster')}
                />
                <CustomButton
                    title="About AE"
                    onPress={() => navigation.navigate('About')}
                />
                <CustomButton
                    title="Resources"
                    onPress={() => navigation.navigate('Resources')}
                />
                <CustomButton
                    title="Evaluation"
                    onPress={() => navigation.navigate('Evaluation')}
                />
                <CustomButton
                    title="Settings"
                    onPress={() => navigation.navigate('Settings')}
                />
            </ScrollView>
        </View>
    );
};

export default HomeScreen;