import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const Completion = ({ navigation }) => {
    const [text, setText] = useState('');

    const handleInputChange = (inputText) => {
        setText(inputText);
    };

    const handleSubmit = () => {
        Alert.alert('Input Text', text);
        setText(''); // Clear the text input after submission
    };

    const handleBackPress = () => {
        // Handle the back navigation logic
        navigation.navigate('Lesson 5 Goals');
    };

    const handleForwardPress = () => {
        // Handle the forward navigation logic
        navigation.navigate('Workbook Lessons');
    };

    return (
        <>
            <ScrollView>
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16, backgroundColor: '#90b1c2' }}>
                        {/* Back Arrow */}
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Ionicons name="ios-arrow-back" size={30} color="white" />
                        </TouchableOpacity>
                        <Image
                            source={require('../../../../../../assets/images/logo2.png')}
                            style={{ width: 50, height: 50, borderRadius: 30, marginRight: 3, marginLeft: 5 }}
                        />
                        <View style={{ flex: 1 }}>
                            <Text style={{ fontSize: 10, backgroundColor: 'white', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 15, borderColor: '#ab713c', borderWidth: 1, textAlign: 'left' }}>
                                Workshop &gt; Completion
                            </Text>
                        </View>
                    </View>

                    {/* Content */}
                    <ScrollView contentContainerStyle={{ paddingBottom: 16 }}>
                        <Image
                            source={require('../../../../../../assets/images/lesson5.png')}
                            style={{ width: '100%', height: 150, marginBottom: 10 }}
                        />


                        <Image
                            source={require('../../../../../../assets/images/completetion.png')}
                            style={{ width: '100%', height: 400, marginBottom: 10 }}
                        />

                        <View style={{ width: '50%', alignSelf: 'center', marginBottom: 20, marginTop: 40 }}>
                            {/* just to maintain design */}
                        </View>
                    </ScrollView>
                </View>
            </ScrollView>
            {/* <NavigationButtons onBackPress={handleBackPress} onForwardPress={handleForwardPress} /> */}
        </>
    );
};

export default Completion;
