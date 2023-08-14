import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import NavigationButtons from '../../../../../components/NavigationButtons';
import { Ionicons } from '@expo/vector-icons';

const EmotionalPrep = ({ navigation }) => {
  const handleBackPress = () => {
    // Handle the back navigation logic
    navigation.navigate('Lesson 3 MentalPrep');
  };

  const handleForwardPress = () => {
    // Handle the forward navigation logic
    navigation.navigate('Lesson 3 PhsicalPrep');
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
                workshop &gt; Lesson 3 &gt; Emotional Prep
              </Text>
            </View>
          </View>

          {/* Content */}
          <ScrollView contentContainerStyle={{ padding: 16 }}>
          <Image
                         source={require('../../../../../../assets/images/lesson3_mental_prep.png')}
                            style={{ width: '100%', height: 158, marginBottom: 10 }}
                            resizeMode='contain'
                        />

            <Text style={{ fontSize: 16, marginBottom: 10, textAlign: 'center' }}>Lesson 3: Becoming One Through Marital Sexuality</Text>
            <View style={{ width: '100%', borderBottomColor: '#ab713c', borderBottomWidth: 1, marginBottom: 10 }} />
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10 }}>Couple Time: Emotional Preparation</Text>
            <View style={{ width: '20%', borderBottomColor: '#90b1c2', borderBottomWidth: 10, marginBottom: 10, marginLeft: 10 }} />

          
            {/* Additional Questions */}
            <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 10, marginTop: 10 , marginBottom:30}}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Discussion Questions:{'\n'}</Text>
              • Fill in the blank: “I feel emoonally safe with my
 partner when s/he _________.” {'\n'}
              
              •  How do I currently feel about our emoonal
 connecon as a couple? {'\n'}
 {'  '}o Are there any improvements we could make?{'\n'}

              •  Wedding night anxiees: For many couples, their
 wedding night will be the first me they
 experience sex. {'\n'}
              {'  '}o What anxiees/fears do I have about our first
 me being together sexually?{'\n'}
              •  How would I define “emoonal infidelity?” How can
 we help prevent either of us from becoming
 emoonally unfaithful?{'\n'}
            </Text>
          </ScrollView>
        </View>
      </ScrollView>
      <NavigationButtons onBackPress={handleBackPress} onForwardPress={handleForwardPress} />
    </>
  );
};

export default EmotionalPrep;
