import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import NavigationButtons from '../../../../../components/NavigationButtons';
import { Ionicons } from '@expo/vector-icons';

const Magic6Hours = ({ navigation }) => {
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
      <ScrollView>
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
                workshop &gt; Lesson 5 &gt; CT: Magic 6 Hours 
              </Text>
            </View>
          </View>

          {/* Content */}
          <ScrollView contentContainerStyle={{ padding: 16 }}>
          <Image
                         source={require('../../../../../../assets/images/lesson5.png')}
                            style={{ width: '100%', height: 150, marginBottom: 10 }}
                            resizeMode='contain'
                        />

            <Text style={{ fontSize: 16, marginBottom: 10, textAlign: 'center' }}>Lesson 5: Becoming One Through Growing Together</Text>
            <View style={{ width: '100%', borderBottomColor: '#ab713c', borderBottomWidth: 1, marginBottom: 10 }} />
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10 }}>Couple Time: Magic 6 Hours</Text>
            <View style={{ width: '20%', borderBottomColor: '#90b1c2', borderBottomWidth: 10, marginBottom: 10, marginLeft: 10 }} />

            {/* Goman's Magic 6 Hours */}
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
              Couples should greet each other with a hug and kiss that lasts at least 6 seconds – yes, 6 seconds, not 5 seconds. So, this means that our greetings are more than just a peck on the cheek and a side hug. This creates a physiological reaction in our bodies. In addition, couples should have a stress-reducing conversation that lasts about 20 minutes (e.g., don’t talk about the argument you had the night before!).{'\n'}
              {'\n'}
              <Text style={{ fontSize: 15, fontWeight: 'bold' }}>3 - Affection</Text>{'\n'}
              (5-ish minutes per day = 35 minutes per week){'\n'}
              Couples should be showing each other physical affection daily. Not only does it feel good in the moment, physical affection releases oxytocin in our brains which increases feelings of connection. Physical affection also helps us express desire for our spouse.{'\n'}
              {'\n'}
              <Text style={{ fontSize: 15, fontWeight: 'bold' }}>4 - Weekly Date</Text>{'\n'}
              (2-ish hours per week){'\n'}
              Successful couples devote about two hours per week spending one-on-one time together on a date. Prioritize dates that allow for talking together as friends (not just talking about relationship difficulties). Couples should also try to mix up what they do on their weekly dates and not just do the same routine week after week. Trying to figure out a weekly date can become more complicated over time as schedules become busier and kids are added to the family.
            </Text>

            {/* Discussion Questions */}
            <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 10, marginTop: 10, marginBottom: 30 }}>
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
          </ScrollView>
        </View>
      </ScrollView>
      <NavigationButtons onBackPress={handleBackPress} onForwardPress={handleForwardPress} />
    </>
  );
};

export default Magic6Hours;
