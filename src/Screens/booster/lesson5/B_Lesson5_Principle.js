import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import NavigationButtons from '../../../components/NavigationButtons'

const B_Lesson5_Principle = ({ navigation }) => {
  const handleBackPress = () => {
    // Handle the back navigation logic
    navigation.navigate('Booster Lesson5 Topics');
  };

  const handleForwardPress = () => {
    // Handle the forward navigation logic
    navigation.navigate('Booster Lesson5 Topics');
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

            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Image
                source={require('../../../../assets/images/logo2.png')}
                style={{ width: 50, height: 50, borderRadius: 80, marginLeft: 5, marginRight: 5 }}
              />
            </TouchableOpacity>

            <View style={{ flex: 1 }}>

              <Text style={{ fontSize: 9, backgroundColor: 'white', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 15, borderColor: '#ab713c', borderWidth: 1, textAlign: 'left' }}>
                Booster Workbook &gt; Lesson 5 &gt; Principle
              </Text>
            </View>
          </View>
          <View >
            <Image
              source={require('../../../../assets/images/lesson5.png')}
              style={{ width: '100%', height: 158, marginBottom: 10 }}

            />
            <Text style={{ fontSize: 12, marginBottom: 10, textAlign: 'center' }}>Lesson 5: Becoming One Through Growing Together</Text>
            <View style={{ width: '100%', borderBottomColor: '#ab713c', borderBottomWidth: 1, marginBottom: 10 }} />
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10 }}>Principle</Text>
            <View style={{ width: '20%', borderBottomColor: '#90b1c2', borderBottomWidth: 10, marginBottom: 10, marginLeft: 10 }} />

            <Text style={{ fontSize: 14, paddingLeft: 25, paddingRight: 20, }}>
              Have you ever watched older couples interact
              with each other? Oen they’re so caring and
              sweet to each other. President Hinckley oen
              taught, “In the marriage companionship
              there is neither inferiority nor superiority.
              The woman does not walk ahead of the man;
              neither does the man walk ahead of the
              woman. They walk side by side as a son and
              daughter of God on an eternal journey.”*
              Likewise, research shows benefits to having
              an equal partnership, like happier
              relaonships and beer individual well-being.
              And marital decision making is beer when a
              marriage is founded on equal partnership.{'\n'}
            </Text>
            <Text style={{ fontSize: 14, paddingLeft: 25, paddingRight: 20, }}>
              *“Personal Worthiness to Exercise the Priesthood,” General Conference, April 2002
            </Text>

            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 30, marginLeft: 10, marginTop: 20 }}></Text>
          </View>

        </View >
      </ScrollView>
      <NavigationButtons onBackPress={handleBackPress} onForwardPress={handleForwardPress} />

    </>
  );
};

export default B_Lesson5_Principle;
