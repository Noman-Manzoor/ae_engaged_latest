import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import NavigationButtons from '../../../../../components/NavigationButtons';
import { Ionicons } from '@expo/vector-icons';

const Goal3 = ({ navigation }) => {
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
        navigation.navigate('Lesson 3 Resources');
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
                                Workbook &gt; Lesson 3 &gt; Goals
                            </Text>
                        </View>
                    </View>

                    {/* Content */}
                    <ScrollView contentContainerStyle={{ paddingBottom: 16 }}>
                        <Image
                            source={require('../../../../../../assets/images/lesson2_deep_learning.png')}
                            style={{ width: '100%', height: 158, marginBottom: 10 }}
                        />
                        <Text style={{ fontSize: 16, marginBottom: 10, textAlign: 'center' }}>Lesson 3: Becoming One Through Marital Sexuality</Text>
                        <View style={{ width: '100%', borderBottomColor: '#ab713c', borderBottomWidth: 1, marginBottom: 10 }} />
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10 }}>Goals: Marital Sexuality</Text>
                        <View style={{ width: '20%', borderBottomColor: '#90b1c2', borderBottomWidth: 10, marginBottom: 10, marginLeft: 10 }} />

                        {/* The provided text */}
                        <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10 }}>This Week{'\n'}</Text>
                        <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 10, paddingLeft: 20 }}>

                            This week, choose a book/podcast/talk/article from the resource list and make a plan to read/listen to it together.
                        </Text>


                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10, marginTop: 20 }}>Notes :</Text>
                        <TextInput
                            style={{
                                height: 150,
                                borderColor: '#ab713c',
                                borderWidth: 1,
                                marginBottom: 10,
                                paddingHorizontal: 10,
                                marginLeft: 15,
                                marginRight: 15,
                                borderRadius: 10,
                                paddingTop: 10
                            }}
                            onChangeText={handleInputChange}
                            value={text}
                            placeholder="Enter text"
                            multiline={true} // Allow multiple lines
                            numberOfLines={5} // Android only: set the number of lines to show (not a limit)
                            textAlignVertical="top"
                        />
                        {/* add note button should be here */}
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10 }}>Relevant Supplemental Lessons:
                        </Text>
                        {/* Button */}
                        <TouchableOpacity
                            style={{


                                width: '90%',
                                borderRadius: 19,
                                marginLeft: 25,

                                backgroundColor: '#C98849',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginBottom: 20,
                                borderColor: '#ab713c',
                                borderWidth: 1,
                                color: '#707070',
                                padding: 15
                            }}
                            onPress={() => console.log("Button pressed!")} // Replace with your function to handle button press
                        >
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#707070', textAlign: 'center' }}>Marriage and Mental Heath</Text>
                        </TouchableOpacity>



                        <View style={{ width: '50%', alignSelf: 'center', marginBottom: 20, marginTop: 40 }}>
                            {/* just to maintain design */}
                        </View>
                    </ScrollView>
                </View>
            </ScrollView>
            <NavigationButtons onBackPress={handleBackPress} onForwardPress={handleForwardPress} />
        </>
    );
};

export default Goal3;
