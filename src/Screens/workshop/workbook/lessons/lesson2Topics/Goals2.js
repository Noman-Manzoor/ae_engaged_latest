import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import NavigationButtons from '../../../../../components/NavigationButtons';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';
import { Linking } from 'react-native';


const Goals2 = ({ navigation }) => {
  const screenName = "Goals2";
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
    navigation.navigate('Lesson 2 principles');
  };

  const handleForwardPress = () => {
    // Handle the forward navigation logic
    navigation.navigate('Workbook Lessons');
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

            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Image
                source={require('../../../../../../assets/images/logo2.png')}
                style={{ width: 50, height: 50, borderRadius: 80, marginLeft: 5, marginRight: 5 }}
              />
            </TouchableOpacity>
            <View style={{ flex: 1 }}>

              <Text style={{ fontSize: 12, backgroundColor: 'white', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 15, borderColor: '#ab713c', borderWidth: 1, textAlign: 'left' }}>
                Workbook &gt; Lesson 2 &gt; Goals
              </Text>
            </View>
          </View>

          {/* Content */}
          <ScrollView contentContainerStyle={{ paddingBottom: 16 }} keyboardShouldPersistTaps='always'>
            <Image
              source={require('../../../../../../assets/images/lesson2_deep_learning.png')}
              style={{ width: '100%', height: 158, marginBottom: 10 }}
            />
            <Text style={{ fontSize: 16, marginBottom: 10, textAlign: 'center' }}>Lesson 2: Becoming One Through Effective Communication</Text>
            <View style={{ width: '100%', borderBottomColor: '#ab713c', borderBottomWidth: 1, marginBottom: 10 }} />
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10 }}>Goals: Effective Communication</Text>
            <View style={{ width: '20%', borderBottomColor: '#90b1c2', borderBottomWidth: 10, marginBottom: 10, marginLeft: 10 }} />

            {/* The provided text */}
            <Text style={{ fontSize: 20, fontWeight: 'bold', marginLeft: 10 }}>This Week{'\n'}</Text>
            <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 10, paddingLeft: 20 }}>

              Decide one specific communication skill (listening deeper, staying on the same team, starting solely) you can work on this week to help you work toward becoming one.

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
              onPress={() => Linking.openURL('https://anxiouslyengaged.byu.edu/00000176-beb9-d800-abf7-ffbf79f80000/ae-lesson-creative-problem-solving')}
            >
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#707070', textAlign: 'center' }}>Creative Problem Solving</Text>
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

export default Goals2;
