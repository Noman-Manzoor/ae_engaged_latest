import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import NavigationButtons from '../../../../../components/NavigationButtons';
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect } from 'react';

const Magic6Hours = ({ navigation }) => {
  const screenName = "Magic6Hours";
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
    navigation.navigate('Lesson 5 Topics');
  };

  const handleForwardPress = () => {
    // Handle the forward navigation logic
    navigation.navigate('Lesson 5 MaritalSupport');
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
              source={require('../../../../../../assets/images/logo2.png')}
              style={{ width: 50, height: 50, borderRadius: 30, marginRight: 2, marginLeft: 2 }}
            />
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 10, backgroundColor: 'white', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 15, borderColor: '#ab713c', borderWidth: 1, textAlign: 'left' }}>
                Workshop &gt; Lesson 5 &gt; CT: Magic 6 Hours
              </Text>
            </View>
          </View>

          {/* Content */}
          <ScrollView contentContainerStyle={{ paddingBottom: 16 }} keyboardShouldPersistTaps='always'>
            <Image
              source={require('../../../../../../assets/images/lesson5.png')}
              style={{ width: '100%', height: 150, marginBottom: 10 }}
            />

            <Text style={{ fontSize: 16, marginBottom: 10, textAlign: 'center' }}>Lesson 5: Becoming One Through Growing Together</Text>
            <View style={{ width: '100%', borderBottomColor: '#ab713c', borderBottomWidth: 1, marginBottom: 10 }} />
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10 }}>Couple Time: Magic 6 Hours</Text>
            <View style={{ width: '20%', borderBottomColor: '#90b1c2', borderBottomWidth: 10, marginBottom: 10, marginLeft: 10 }} />

            {/* Goman's Magic 6 Hours */}
            <View style={{ paddingLeft: 25, paddingRight: 20 }}>
              <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 10, marginBottom: 20 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Goman's Magic 6 Hours:</Text>
                {'\n'}
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>1 - Parings</Text>
                {'\n'}

                (2-ish minutes per weekday = 10 minutes per week){'\n'}
                Couples should say goodbye before they leave each other in the morning and find out one thing that is happening in their partner’s life that day – lunch plans, important meeting, etc.{'\n'}
                {'\n'}
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>2 - Reunions</Text>
                {'\n'}

                (20-ish minutes per day = 1 hour, 40 minutes per week){'\n'}
                Couples should greet each other with a hug and kiss that lasts at least 6 seconds – yes, 6 seconds, not 5 seconds. So, this means that our greetings are more than just a peck on the cheek and a side hug. This creates a physiological reaction in our bodies.{'\n\n'}  In addition, couples should have a stress-reducing conversation that lasts about 20 minutes (e.g., don’t talk about the argument you had the night before!). This conversation is meant as a time of reconnection before getting lost in the rest of the day’s happenings. 3 - Admiration and Appreciation (5-ish minutes per day = 35 minutes per week) Spend at least five minutes each day communicating genuine appreciation for your spouse. Try to be a little creative and not always say the same, “thanks for doing the dishes.” It is important that we directly express our admiration and appreciation for our partner and not just assume he or she already knows it. (Our admiration and appreciation don’t necessarily have to be about something that happened that day but can include our whole relationship.) Regular expressions of appreciation are one of the strongest predictors of a healthy, loving relationship.{'\n'}
                {'\n'}
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>3 - Affection</Text>{'\n'}
                (5-ish minutes per day = 35 minutes per week){'\n'}
                Couples should be showing each other physical affection daily. Not only does it feel good in the moment, physical affection releases oxytocin in our brains which increases feelings of connection. Physical affection also helps us express desire for our spouse.{'\n'}
                {'\n'}
                <Text style={{ fontSize: 15, fontWeight: 'bold' }}>4 - Weekly Date</Text>{'\n'}
                (2-ish hours per week){'\n'}
                Successful couples devote about two hours per week spending one-on-one time together on a date. Prioritize dates that allow for talking together as friends (not just talking about relationship difficulties). Couples should also try to mix up what they do on their weekly dates and not just do the same routine week after week. Trying to figure out a weekly date can become more complicated over time as schedules become busier and kids are added to the family, but it is incredibly important to intentionally make time for weekly dates. 6 - State of the Union Meeting (1 hour per week) Finally, couples should spend about an hour a week counseling together about how they are doing in their marriage and how they are doing in their shared efforts. This includes doing a relationship check-in (What went right this week? What went wrong? What are our plans for the upcoming week? Long-term future plans? How is our communication? How are things going sexually? How are we prioritizing “we over me?”) It should also include time to address any relationship concerns and to express partner appreciation.
              </Text>

              {/* Discussion Questions */}
              <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 10, marginTop: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Discussion Questions:</Text>
                {'\n'}
                • How can we make time each week for the “Magic 6 Hours”?{'\n'}
                • How can we make pairings and reunions more special?{'\n'}
                {'  '}o What does a “stress-reducing conversation” look like to me?{'\n'}
                {'  '}o Do I like to talk about work/school right when I get home? Wait until later?{'\n'}
                • What are some ways I could best show love, appreciation, and affection to you?{'\n'}
                • What are some dates we’ve been on in the past that you’d like to repeat?{'\n'}
                • What are some new date ideas we’d like to try?{'\n'}
                • How do we feel about the idea of a “State of the Union” meeting?{'\n'}
                {'  '}o What do we think about starting that now, before we get married?{'\n'}
              </Text>
            </View>
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

export default Magic6Hours;
