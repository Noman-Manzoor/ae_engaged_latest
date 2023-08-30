import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import NavigationButtons from '../../../../../components/NavigationButtons';
import { Ionicons } from '@expo/vector-icons';

const SoftStart = ({ navigation }) => {
  const [text, setText] = useState('');

  const handleInputChange = (inputText) => {
    setText(inputText);
  };

  const handleSubmit = () => {
    Alert.alert('Input Text', text);
    setText(''); // Clear the text input after submission
  };

  const handleBackPress = () => {
    navigation.navigate('Lesson 2 deep listening');
  };

  const handleForwardPress = () => {
    navigation.navigate('Lesson 2 warn signs');
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
              style={{ width: 50, height: 50, borderRadius: 30, marginRight: 2, marginLeft: 5 }}
            />
            <View style={{ flex: 1 }}>

              <Text style={{
                color: '#707070', fontSize: 12, backgroundColor: 'white', paddingVertical: 5, paddingHorizontal: 10,
                borderRadius: 15, borderColor: '#ab713c', borderWidth: 1, textAlign: 'left'
              }}>
                Workbook &gt; Lesson 2 &gt; Soft Start
              </Text>
            </View>
          </View>

          {/* Content */}
          <ScrollView contentContainerStyle={{ paddingBottom: 16 }}>
            <Image
              source={require('../../../../../../assets/images/lesson2_deep_learning.png')}
              style={{ width: '100%', height: 158, marginBottom: 10 }}
            />
            <Text style={{ fontSize: 16, marginBottom: 10, textAlign: 'center', color: '#707070' }}>Lesson 2: Becoming One Through Effective Communication</Text>
            <View style={{ width: '100%', borderBottomColor: '#ab713c', borderBottomWidth: 1, marginBottom: 10 }} />
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10 }}>Couple Time: Soft Start
            </Text>
            <View style={{ width: '20%', borderBottomColor: '#90b1c2', borderBottomWidth: 10, marginBottom: 10, marginLeft: 10 }} />

            <View style={{ paddingLeft: 20, paddingRight: 20 }}>

              {/* Listening Skills */}
              <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10, marginRight: 10 }}>Discussion Questions:</Text>

              <Text style={{ marginLeft: 10, marginRight: 10 }}>
                1. Thinking about the examples we just discussed as a group, how do we feel we are doing with regards to starting and responding solely?{'\n'}
              </Text>
              <Text style={{ marginLeft: 10, marginRight: 10 }}>
                2. How do we feel that we could improve?{'\n'}
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

          </ScrollView>
        </View>
        <View style={{ width: '50%', alignSelf: 'center', marginBottom: 20, marginTop: 40 }}>
          {/* just to maintain styling  */}
        </View>
      </ScrollView>
      <NavigationButtons onBackPress={handleBackPress} onForwardPress={handleForwardPress} />
    </>
  );
};

export default SoftStart;
