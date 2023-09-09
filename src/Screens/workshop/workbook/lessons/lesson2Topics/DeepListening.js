import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import NavigationButtons from '../../../../../components/NavigationButtons';
import { Ionicons } from '@expo/vector-icons';

const DeepListening = ({ navigation }) => {
  const handleBackPress = () => {
    navigation.navigate('Lesson 2 Topics');
  };

  const handleForwardPress = () => {
    navigation.navigate('Lesson 2 soft start');
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
            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Image
                source={require('../../../../../../assets/images/logo2.png')}
                style={{ width: 50, height: 50, borderRadius: 80, marginLeft: 5, marginRight: 5 }}
              />
            </TouchableOpacity>
            <View style={{ flex: 1 }}>

              <Text style={{ color: '#707070', fontSize: 12, backgroundColor: 'white', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 15, borderColor: '#ab713c', borderWidth: 1, textAlign: 'center' }}>
                Workbook &gt; Lesson 2 &gt; Deep Listening
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
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10 }}>Couple Time: The Deep Listening
            </Text>
            <View style={{ width: '20%', borderBottomColor: '#90b1c2', borderBottomWidth: 10, marginBottom: 10, marginLeft: 10 }} />

            <View style={{ paddingLeft: 25 }}>
              {/* Listening Skills */}
              <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10 }}>Listening Skills:</Text>
              <Text style={{ fontSize: 16, paddingLeft: 25, paddingRight: 20 }}>
                As your partner shares his/her experience, practice deep listening with the skills below.
                When your partner is finished speaking, check off the skills you practiced while you were listening.{'\n'}
              </Text>
              <View style={{ paddingLeft: 23, paddingRight: 16 }}>
                <Text>1. Turn on silent mode – your turn to listen{'\n'}</Text>
                <Text>2. Be a focused listener</Text>
                <Text style={{ paddingLeft: 15 }}>
                  • Eliminate distractions{'\n'}
                  • Physically turn toward your partner{'\n'}
                  • Make frequent eye contact{'\n'}
                  • Sometimes reach out to physically touch your partner{'\n'}
                </Text>

                <Text>3. Be an active listener</Text>
                <Text style={{ paddingLeft: 15 }}>• Could you repeat back what your partner just said?</Text>
                <Text style={{ paddingLeft: 15 }}>• Occasionally ask clarifying questions{'\n'}</Text>

                <Text>4. Be a patient listener – give your partner time and don’t interrupt</Text>


              </View>

              {/* Speaker Skills */}
              <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10, marginTop: 20 }}>Speaker Skills:</Text>
              <Text style={{ fontSize: 16, paddingLeft: 25, paddingRight: 20 }}>
                Think of a recent time when you were really excited about something (an achievement at work, an interesting school project, a family or roommate experience, etc.).
                Take 4 minutes to talk to your partner about that. When you are finished speaking, check the box if you completed the skill below.
              </Text>
              <View style={{ paddingLeft: 23, paddingRight: 16, marginTop: 5 }}>
                <Text>1. Don’t go on and on and on.</Text>
                <Text style={{ paddingLeft: 15 }}>• Pause to allow your partner time to clarify, express support, etc.</Text>
              </View>
            </View>
            {/* Notes Section */}
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10, marginTop: 20 }}>Notes Section:</Text>
            {/* Add any additional notes or information here */}
          </ScrollView>
        </View>
      </ScrollView>
      <NavigationButtons onBackPress={handleBackPress} onForwardPress={handleForwardPress} />
    </>
  );
};

export default DeepListening;
