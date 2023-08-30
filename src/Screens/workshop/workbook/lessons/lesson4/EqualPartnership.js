import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import NavigationButtons from '../../../../../components/NavigationButtons';
import { Ionicons } from '@expo/vector-icons';

const Divorce = ({ navigation }) => {

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
    navigation.navigate('Lesson 4 EqualPartnership');
  };

  const handleForwardPress = () => {
    // Handle the forward navigation logic
    navigation.navigate('Lesson 4 Divorce');
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
              style={{ width: 50, height: 50, borderRadius: 30, marginRight: 3, marginLeft: 5 }}
            />
            <View style={{ flex: 1 }}>

              <Text style={{ color: '#707070', fontSize: 10, backgroundColor: 'white', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 15, borderColor: '#ab713c', borderWidth: 1 }}>
                Workshop &gt; Lesson 4 &gt; CT:Equal Partnership
              </Text>
            </View>

          </View>

          {/* Content */}
          <ScrollView contentContainerStyle={{ paddingBottom: 16 }}>
            <Image
              source={require('../../../../../../assets/images/lesson4.png')}
              style={{ width: '100%', height: 140, marginBottom: 10 }}
            />

            <Text style={{ fontSize: 16, marginBottom: 10, textAlign: 'center' }}>Lesson 4: Becoming One Through Equal Partnership & Complete Commitment</Text>
            <View style={{ width: '100%', borderBottomColor: '#ab713c', borderBottomWidth: 1, marginBottom: 10 }} />
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10 }}>Couple Time: Equal Partnership</Text>
            <View style={{ width: '20%', borderBottomColor: '#90b1c2', borderBottomWidth: 10, marginBottom: 10, marginLeft: 10 }} />

            <View style={{ paddingLeft: 25, paddingRight: 20 }}>
              <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 10, marginTop: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Discussion Questions:{'\n'}</Text>
                • What did I see growing up in my family (and/or in other married couples that I was close to) in terms of an equal partnership?{'\n'}
                • Do I hold any beliefs that don’t view men and women as equal? If so, how can I work on overcoming those beliefs?{'\n'}
                • What is my vision of an equal partnership? What do I want in our marriage? (Both general and specific.){'\n'}
                • Talk through the following scenario to practice how you might handle a decision as equal partners. You don’t need to actually make these decisions but rather think through HOW you will make these decisions.{'\n'}
                <Text>o The car you brought to the marriage has died and you need to purchase a new one. How will the two of us decide on a budget? financing? what kind of car? what features? insurance?{'\n'}</Text>
              </Text>
            </View>
          </ScrollView>
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10, marginTop: 10 }}>Notes :</Text>
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
        </View>
      </ScrollView>
      <NavigationButtons onBackPress={handleBackPress} onForwardPress={handleForwardPress} />
    </>
  );
};

export default Divorce;
