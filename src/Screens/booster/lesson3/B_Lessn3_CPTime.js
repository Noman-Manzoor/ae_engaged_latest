import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const B_Lessn3_CPTime = ({ navigation }) => {
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
    navigation.navigate('Booster Lesson1 Topics');
  };

  const handleForwardPress = () => {
    // Handle the forward navigation logic
    navigation.navigate('Lesson 1 Topic CT_CiardiPoem2');
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
              source={require('../../../../assets/images/logo2.png')}
              style={{ width: 50, height: 50, borderRadius: 30, marginRight: 3, marginLeft: 5 }}
            />
            <View style={{ flex: 1 }}>

              <Text style={{ fontSize: 9, backgroundColor: 'white', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 15, borderColor: '#ab713c', borderWidth: 1, textAlign: 'left' }}>
                Booster Workbook &gt; Lesson 3 &gt; Couple Time
              </Text>
            </View>
          </View>
          <View >
            <Image
              source={require('../../../../assets/images/lesson3_mental_prep.png')}
              style={{ width: '100%', height: 158, marginBottom: 10 }}

            />
            <Text style={{ fontSize: 12, marginBottom: 10, textAlign: 'center' }}>Lesson 3: Becoming One Through Marital Sexuality</Text>
            <View style={{ width: '100%', borderBottomColor: '#ab713c', borderBottomWidth: 1, marginBottom: 10 }} />
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10 }}>Couple Time</Text>
            <View style={{ width: '20%', borderBottomColor: '#90b1c2', borderBottomWidth: 10, marginBottom: 10, marginLeft: 10 }} />

            <Text style={{ fontSize: 16, fontWeight: '900', marginBottom: 10, paddingLeft: 25 }}>Discussion Questions:
            </Text>
            <Text style={{ fontSize: 16, paddingLeft: 25, paddingRight: 20 }}>Take 10-15 minutes to discuss these quesons together. {"\n"}
            </Text>
            <Text style={{ fontSize: 16, paddingLeft: 25, paddingRight: 20, }}>
              {'\u2022'}  Mental: How well do you feel that we are
              communicang about our sexual experiences, fears or
              worries, preferences, fantasies, boundaries, etc.?{"\n"}
              {'\u2022'} Emoonal: What is something that I do that helps you
              feel emoonally safe? Are there any improvements I
              could make? {"\n"}
              {'\u2022'} Physical: Has our sexual relaonship raised any new
              quesons for you about sex? Are you feeling sexually
              sasfied in our relaonship? {"\n"}
              {'\u2022'} Spiritual: Does our sexual relaonship help me feel
              uplied and unified? {"\n"}
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

            <View style={{ width: '50%', alignSelf: 'center', marginBottom: 20, marginTop: 40 }}>
              {/* just to maintain design */}
            </View>
          </View>
        </View >
      </ScrollView>
      {/* <NavigationButtons onBackPress={handleBackPress} onForwardPress={handleForwardPress} /> */}

    </>
  );
};

export default B_Lessn3_CPTime;
