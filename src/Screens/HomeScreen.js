import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const CustomButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                width: '80%',
                height: 50,
                borderRadius: 40,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 20,
                borderColor: '#ab713c',
                borderWidth: 1,
            }}
            onPress={onPress}
        >
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{title}</Text>
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
        <View style={{ flex: 1, backgroundColor: '#90b1c2', justifyContent: 'center', alignItems: 'center' }}>
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
                source={require('../../assets/images/logo.png')}
                style={{ width: 200, height: 200, borderRadius: 100, marginBottom: 20 }}
            />
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
        </View>
    );
};

export default HomeScreen;