import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import NavigationButtons from './../../../../../components/NavigationButtons';
import { Ionicons } from '@expo/vector-icons';


const Goals = ({ navigation }) => {

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
        navigation.navigate('Lesson 1 Topic Principles');
    };

    const handleForwardPress = () => {
        // Handle the forward navigation logic
        navigation.navigate('Workbook Lessons');
    };

    return (
        <>
            <ScrollView >
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16, backgroundColor: '#90b1c2' }}>
                        {/* Back Arrow */}
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Ionicons name="ios-arrow-back" size={30} color="white" />
                        </TouchableOpacity>

                        <Image
                            source={require('../../../../../../assets/images/logo2.png')}
                            style={{ width: 60, height: 60, borderRadius: 30, marginRight: 16, marginLeft: 5 }}
                        />
                        <View style={{ flex: 1 }}>

                            <Text style={{ fontSize: 12, backgroundColor: 'white', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 15, borderColor: '#ab713c', borderWidth: 1, textAlign: 'center' }}>
                                Workbook &gt; Lesson 1 &gt; Goals
                            </Text>
                        </View>
                    </View>
                    <View >
                        <Image
                            source={require('../../../../../../assets/images/workbook_les1_ct_ciardi_poem.png')}
                            style={{ width: '100%', height: 158, marginBottom: 10 }}
                        />
                        <Text style={{ fontSize: 16, marginBottom: 10, textAlign: 'center' }}>Lesson 1: Becoming One in Marriage</Text>
                        <View style={{ width: '100%', borderBottomColor: '#ab713c', borderBottomWidth: 1, marginBottom: 10 }} />
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10 }}>Goals: Becoming One in Marriage
                        </Text>
                        <View style={{ width: '20%', borderBottomColor: '#90b1c2', borderBottomWidth: 10, marginBottom: 10, marginLeft: 10 }} />

                        <Text style={{ fontSize: 16, textAlign: 'center', fontWeight: '900', marginBottom: 10 }}>Priorizing "We Over Me"
                        </Text>
                        <Text style={{ fontSize: 16, paddingLeft: 25, paddingRight: 20, }}>
                            Choose one way you can priorize "we over me"
                            and work on it this week.
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
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10 }}>Goals: Becoming One in Marriage
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
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#707070', textAlign: 'center' }}>Getting a Spiritual Confirmation to Marry</Text>
                        </TouchableOpacity>



                        <View style={{ width: '50%', alignSelf: 'center', marginBottom: 20, marginTop: 40 }}>
                            {/* <Button
              title="Add Note"
              onPress={handleSubmit}
              color="blue"
              accessibilityLabel="Add a new note"
            /> */}
                        </View>
                    </View>

                </View >
            </ScrollView>
            <NavigationButtons onBackPress={handleBackPress} onForwardPress={handleForwardPress} />
        </>
    );
};

export default Goals;
