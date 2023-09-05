import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import NavigationButtons from '../../../components/NavigationButtons'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

const B_Lesson5_Goals = ({ navigation }) => {
    const screenName = "B_Lesson5_Goals";
    const [text, setText] = useState('');
    const [allNotes, setAllNotes] = useState([]);
    const [editingIndex, setEditingIndex] = useState(null); // new state for editing

    useEffect(() => {
        const loadNotes = async () => {
            const notes = await fetchNotes();
            setAllNotes(notes);
        };

        loadNotes();
    }, []);

    const fetchNotes = async () => {
        try {
            const existingNotes = await AsyncStorage.getItem(`@all_notes_${screenName}`);
            return existingNotes !== null ? JSON.parse(existingNotes) : [];
        } catch (error) {
            console.error("Couldn't fetch notes", error);
        }
    };

    const handleSubmit = async () => {
        try {
            let newNotes = [];
            if (editingIndex !== null) {
                newNotes = [...allNotes];
                newNotes[editingIndex] = text;
            } else {
                newNotes = [...allNotes, text];
            }

            await AsyncStorage.setItem(`@all_notes_${screenName}`, JSON.stringify(newNotes));
            setAllNotes(newNotes);
            setText('');
            setEditingIndex(null); // Reset editing index
        } catch (error) {
            Alert.alert('Error', 'Something went wrong while saving the note.');
        }
    };

    const deleteNote = async (index) => {
        try {
            const newNotes = allNotes.filter((_, noteIndex) => noteIndex !== index);
            await AsyncStorage.setItem('@all_notes', JSON.stringify(newNotes));
            setAllNotes(newNotes);
        } catch (error) {
            Alert.alert('Error', 'Something went wrong while deleting the note.');
        }
    };

    const editNote = (index) => {
        setText(allNotes[index]);
        setEditingIndex(index);
    };

    const handleInputChange = (inputText) => {
        setText(inputText);
    };

    const handleBackPress = () => {
        // Handle the back navigation logic
        navigation.navigate('Booster Lesson5 CP_Time');
    };

    const handleForwardPress = () => {
        // Handle the forward navigation logic
        navigation.navigate('Booster Completion');
    };

    return (
        <>
            <ScrollView keyboardShouldPersistTaps='always'>
                <View style={{ flex: 1 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16, backgroundColor: '#90b1c2' }}>
                        {/* Back Arrow */}
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Ionicons name="ios-arrow-back" size={30} color="white" />
                        </TouchableOpacity>

                        <Image
                            source={require('../../../../assets/images/logo2.png')}
                            style={{ width: 50, height: 50, borderRadius: 30, marginRight: 3, marginLeft: 5 }}
                        />
                        <View style={{ flex: 1 }}>

                            <Text style={{ fontSize: 9, backgroundColor: 'white', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 15, borderColor: '#ab713c', borderWidth: 1, textAlign: 'left' }}>
                                Booster Workbook &gt; Lesson 5 &gt; Goals
                            </Text>
                        </View>
                    </View>
                    <View >
                        <Image
                            source={require('../../../../assets/images/lesson5.png')}
                            style={{ width: '100%', height: 158, marginBottom: 10 }}

                        />
                        <Text style={{ fontSize: 12, marginBottom: 10, textAlign: 'center' }}>Lesson 5: Becoming One Through Growing Together</Text>
                        <View style={{ width: '100%', borderBottomColor: '#ab713c', borderBottomWidth: 1, marginBottom: 10 }} />
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10 }}>Goals</Text>
                        <View style={{ width: '20%', borderBottomColor: '#90b1c2', borderBottomWidth: 10, marginBottom: 10, marginLeft: 10 }} />

                        <Text style={{ fontSize: 16, paddingLeft: 25, fontWeight: '900', marginBottom: 10 }}>This Week
                        </Text>
                        <Text style={{ fontSize: 14, paddingLeft: 25, paddingRight: 20 }}>What is one way you can intenonally nurture your
                            relaonship this week?{"\n"}
                        </Text>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginLeft: 10, marginRight: 15, marginTop: 20, marginBottom: 10 }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10 }}>Notes :</Text>
                            <TouchableOpacity onPress={handleSubmit} style={{ backgroundColor: '#007bff', padding: 10, borderRadius: 5 }}>
                                <Text style={{ color: 'white' }}>{editingIndex !== null ? 'Update Note' : 'Add Note'}</Text>
                            </TouchableOpacity>

                        </View>
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

                        {
                            allNotes.map((note, index) => (
                                <View key={index} style={{ marginVertical: 10 }}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Text style={{ fontSize: 16, paddingLeft: 10, fontWeight: 'bold' }}>Note {index + 1}:</Text>
                                        <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 10 }}>
                                            <TouchableOpacity onPress={() => editNote(index)} style={{ backgroundColor: '#4CAF50', padding: 10, margin: 5, borderRadius: 5 }}>
                                                <Text style={{ color: 'white' }}>Edit</Text>
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => deleteNote(index)} style={{ backgroundColor: '#f44336', padding: 10, margin: 5, borderRadius: 5 }}>
                                                <Text style={{ color: 'white' }}>Delete</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <Text style={{ fontSize: 16, marginLeft: 10 }}>{note}</Text>
                                </View>
                            ))
                        }

                        {/* add note button should be here */}
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10 }}>Feedback: (1 minute)
                        </Text>
                        {/* Button */}
                        <TouchableOpacity
                            style={{


                                width: '85%',
                                borderRadius: 19,
                                marginLeft: 25,

                                backgroundColor: '#C98849',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginBottom: 20,
                                borderColor: '#ab713c',
                                borderWidth: 1,
                                color: '#707070',
                                padding: 10
                            }}
                            onPress={() => console.log("Button pressed!")} // Replace with your function to handle button press
                        >
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#707070', textAlign: 'center' }}>Link to Survey</Text>
                        </TouchableOpacity>

                        <View style={{ width: '50%', alignSelf: 'center', marginBottom: 20, marginTop: 40 }}>
                            {/* just to maintain design */}
                        </View>
                    </View>

                </View >
            </ScrollView>
            <NavigationButtons onBackPress={handleBackPress} onForwardPress={handleForwardPress} />

        </>
    );
};

export default B_Lesson5_Goals;
