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
          source={require('../../../../../../assets/images/logo.png')}
          style={{ width: 60, height: 60, borderRadius: 30, marginRight: 16, marginLeft: 5 }}
        />
        <View style={{ flex: 1 }}>

          <Text style={{ fontSize: 12, backgroundColor: 'white', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 15, borderColor: '#ab713c', borderWidth: 1, textAlign: 'center' }}>
            workshop &gt; Lesson 1 &gt; Goals
          </Text>
        </View>
      </View>
                    <View >
                    <Image
                         source={require('../../../../../../assets/images/workbook_les1_ct_ciardi_poem.png')}
                            style={{ width: '100%', height: 158, marginBottom: 10 }}
                            resizeMode='contain'
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

                        <Text style={{ fontSize: 16, textAlign: 'center', fontWeight: '900', marginBottom: 10 }}>Priorizing We Over Me
                        </Text>


                        <Text style={{ fontSize: 16, paddingLeft: 25, paddingRight: 20, }}>

                            {'\u2022'} Moving from “me” to “we” can
                            be an adjustment.{"\n"}
                            {'\u2022'}  This change in thinking usually takes
                            intenonal selflessness and sacrifice,
                            and it takes pracce.{"\n"}
                        </Text>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10, marginTop: 20 }}>Notes :</Text>
                        <TextInput
                            style={{ height: 100, borderColor: '#ab713c', borderWidth: 1, marginBottom: 10, paddingHorizontal: 10, marginLeft: 15, marginRight: 15, borderRadius: 20 }}
                            onChangeText={handleInputChange}
                            value={text}
                            placeholder="Enter text"
                        />
                        <View style={{ width: '50%', alignSelf: 'center', marginBottom: 20 }}>
                            <Button
                                title="Add Note"
                                onPress={handleSubmit}
                                color="blue"
                                accessibilityLabel="Add a new note"
                            />
                        </View>


                    </View>
                </View >
            </ScrollView>
            {/* <NavigationButtons onBackPress={handleBackPress} onForwardPress={handleForwardPress} /> */}
        </>
    );
};

export default Goals;
