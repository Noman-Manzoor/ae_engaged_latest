import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import NavigationButtons from '../../../../../components/NavigationButtons';
import { Ionicons } from '@expo/vector-icons';

const MaritalSupport = ({ navigation }) => {
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
    navigation.navigate('Lesson 5 Magic6Hour');
  };

  const handleForwardPress = () => {
    // Handle the forward navigation logic
    navigation.navigate('Lesson 5 Serving');
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
              style={{ width: 50, height: 50, borderRadius: 30, marginRight: 2, marginLeft: 2 }}
            />
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 10, backgroundColor: 'white', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 15, borderColor: '#ab713c', borderWidth: 1, textAlign: 'left' }}>
                Workshop &gt; Lesson 5 &gt; CT: Marital Support
              </Text>
            </View>
          </View>

          {/* Content */}
          <ScrollView contentContainerStyle={{ paddingBottom: 16 }}>
            <Image
              source={require('../../../../../../assets/images/lesson5.png')}
              style={{ width: '100%', height: 150, marginBottom: 10 }}
            />

            <Text style={{ fontSize: 16, marginBottom: 10, textAlign: 'center' }}>Lesson 5: Becoming One Through Growing Together</Text>
            <View style={{ width: '100%', borderBottomColor: '#ab713c', borderBottomWidth: 1, marginBottom: 10 }} />
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10 }}>Couple Time: Marital Support System</Text>
            <View style={{ width: '20%', borderBottomColor: '#90b1c2', borderBottomWidth: 10, marginBottom: 10, marginLeft: 10 }} />


            {/* Discussion Questions */}
            <View style={{ paddingLeft: 25, paddingRight: 10 }}>
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
                {'\n'}
                • What are some ground rules about how we will talk to others about our marriage?{'\n'}
                • Who are some people that we could include in our “go-to” marriage support system?{'\n'}
                • What do we think about the idea of a marriage mentor?{'\n'}
                • Who is a couple we could consider asking to mentor us?{'\n'}
                • What is one resource from the list we can commit to read or listen to together?{'\n'}
              </Text>
            </View>
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

export default MaritalSupport;
