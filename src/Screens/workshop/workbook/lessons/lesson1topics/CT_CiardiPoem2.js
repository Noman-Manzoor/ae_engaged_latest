import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, TextInput, Button, Alert, ScrollView } from 'react-native';
import NavigationButtons from './../../../../../components/NavigationButtons';
import { Ionicons } from '@expo/vector-icons';


const CT_CiardiPoem2 = ({ navigation }) => {
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
    navigation.navigate('Lesson 1 Topic CT_CiardiPoem');
  };

  const handleForwardPress = () => {
    // Handle the forward navigation logic
    navigation.navigate('Lesson 1 Topic CT_WeOverMe');
  };
  return (
    <View style={{ flex: 1 }}>
      <ScrollView>
        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16, backgroundColor: '#90b1c2' }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="ios-arrow-back" size={30} color="white" />
          </TouchableOpacity>
          <Image
            source={require('../../../../../../assets/images/logo2.png')}
            style={{ width: 50, height: 50, borderRadius: 30, marginRight: 2, marginLeft: 5 }}
          />
          <View style={{ flex: 1 }}>
            <Text style={{ color: '#707070', fontSize: 12, backgroundColor: 'white', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 15, borderColor: '#ab713c', borderWidth: 1, textAlign: 'center' }}>
              Workbook &gt; Lesson 1 &gt; CT: Ciardi Poem
            </Text>
          </View>
        </View>

        <View>
          <Image
            source={require('../../../../../../assets/images/workbook_les1_ct_ciardi_poem.png')}
            style={{ width: '100%', height: 158, marginBottom: 10 }}
          />
          <Text style={{ fontSize: 16, marginBottom: 10, textAlign: 'center' }}>Lesson 1: Becoming One in Marriage</Text>
          <View style={{ width: '100%', borderBottomColor: '#ab713c', borderBottomWidth: 1, marginBottom: 10 }} />
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10, color: '#707070' }}>Couple Time: Ciardi Poem</Text>
          <View style={{ width: '20%', borderBottomColor: '#90b1c2', borderBottomWidth: 10, marginBottom: 10, marginLeft: 10 }} />

          <Text style={{ fontSize: 18, textAlign: 'left', fontWeight: '900', marginBottom: 10, marginLeft: 25 }}>Discussion Questions:</Text>
          <Text style={{ fontSize: 16, paddingLeft: 25, paddingRight: 20, color: '#707070' }}>
            The poet Ciardi compares a marriage to an arch.{"\n"}
            {'\u2022'} What jumps out at you about this?{"\n"}
            {'\u2022'} How are we as a couple doing with “leaning/falling in?”
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
            {/* <Button
              title="Add Note"
              onPress={handleSubmit}
              color="blue"
              accessibilityLabel="Add a new note"
            /> */}
          </View>

        </View>
      </ScrollView>
      <NavigationButtons onBackPress={handleBackPress} onForwardPress={handleForwardPress} />
    </View>
  );
};

export default CT_CiardiPoem2;
