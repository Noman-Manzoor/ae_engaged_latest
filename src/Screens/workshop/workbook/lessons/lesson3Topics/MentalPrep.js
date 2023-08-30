import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import NavigationButtons from '../../../../../components/NavigationButtons';
import { Ionicons } from '@expo/vector-icons';

const MentalPrep = ({ navigation }) => {
  const handleBackPress = () => {
    // Handle the back navigation logic
    navigation.navigate('Lesson 3 Topics');
  };

  const handleForwardPress = () => {
    // Handle the forward navigation logic
    navigation.navigate('Lesson 3 EmotionalPrep');
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

              <Text style={{ fontSize: 10, backgroundColor: 'white', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 15, borderColor: '#ab713c', borderWidth: 1, textAlign: 'left' }}>
                Workbook &gt; Lesson 3 &gt; CT: Mental Prep
              </Text>
            </View>
          </View>

          {/* Content */}
          <ScrollView contentContainerStyle={{ paddingBottom: 16 }}>
            <Image
              source={require('../../../../../../assets/images/lesson3_mental_prep.png')}
              style={{ width: '100%', height: 158, marginBottom: 10 }}
            />

            <Text style={{ fontSize: 16, marginBottom: 10, textAlign: 'center' }}>Lesson 3: Becoming One Through Marital Sexuality</Text>
            <View style={{ width: '100%', borderBottomColor: '#ab713c', borderBottomWidth: 1, marginBottom: 10 }} />
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10 }}>Couple Time: Mental Preparation</Text>
            <View style={{ width: '20%', borderBottomColor: '#90b1c2', borderBottomWidth: 10, marginBottom: 10, marginLeft: 10 }} />


            {/* Additional Questions */}
            <View style={{ paddingLeft: 25, paddingRight: 20 }}>

              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Discussion Questions:{'\n'}</Text>
              <Text>• How did I first learn about sex?</Text>

              <Text style={{ paddingLeft: 30 }}>o What beliefs have I gained about sexuality from home, friends, church, the media, etc.</Text>
              <Text style={{ paddingLeft: 30 }}>o Are there any beliefs that I may need to change or work on?</Text>


              <Text>• What do you think about sexual intentionality and planning times for sex?</Text>
              <Text>• How can we make sure that we have healthy communication about our sexual experiences, preferences, fantasies, boundaries, etc.?</Text>
              <Text>• Discussing our sexuality can sometimes bring to the surface fears, worries, or shame that we have been hiding from ourselves.</Text>
              <Text style={{ paddingLeft: 30 }}>o Am I noticing any new fears or worries about our future sexual relationship?{'\n\n'}</Text>

              <Text>
                (Practice your best listening skills today during Couple Times: while one partner shares, the other should listen and reflect back what s/he is hearing. Don’t feel like you have to resolve anxieties right now. Use this experience as an opportunity to be vulnerable together and to be there for each other.)
              </Text>
            </View>

            <View style={{ width: '50%', alignSelf: 'center', marginBottom: 20, marginTop: 40 }}>
              {/* just to maintain the styling
            /> */}
            </View>
          </ScrollView>
        </View>
      </ScrollView>
      <NavigationButtons onBackPress={handleBackPress} onForwardPress={handleForwardPress} />
    </>
  );
};

export default MentalPrep;
