import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import NavigationButtons from '../../../../../components/NavigationButtons';
import { Ionicons } from '@expo/vector-icons';

const ElderQuote = ({ navigation }) => {
  const handleBackPress = () => {
    // Handle the back navigation logic
    navigation.navigate('Lesson 3 SexualExpectations');
  };

  const handleForwardPress = () => {
    // Handle the forward navigation logic
    navigation.navigate('Lesson 3 Resources');
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
                source={require('../../../../../../assets/images/logo2.png')}
                style={{ width: 50, height: 50, borderRadius: 80, marginLeft: 5, marginRight: 5 }}
              />
            </TouchableOpacity>
            <View style={{ flex: 1 }}>

              <Text style={{ fontSize: 10, backgroundColor: 'white', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 15, borderColor: '#ab713c', borderWidth: 1, textAlign: 'left' }}>
                Workbook &gt; Lesson 3 &gt; Holland Quote
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
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10 }}>Quote: Elder Jeffrey R. Holland</Text>
            <View style={{ width: '20%', borderBottomColor: '#90b1c2', borderBottomWidth: 10, marginBottom: 10, marginLeft: 10 }} />


            <View style={{ paddingLeft: 20, paddingRight: 20 }}>
              <Text style={{ fontSize: 16, marginLeft: 10, marginTop: 20, fontWeight: 'bold' }}>
                “Of Souls, Symbols, and Sacraments”
              </Text>
              <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 10, marginTop: 20, marginBottom: 50 }}>
                “I submit to you that you will never be more like God at any other time in this life than when you are expressing that particular power (sexual intimacy). Such an act of love between a man and a woman is—or certainly was ordained to be—a symbol of total union: union of their hearts, their hopes, their lives, their love, their family, their future, their everything...such a total, virtually unbreakable union, such an unyielding commitment between a man and a woman, can only come with the proximity and permanence afforded in a marriage covenant, with the union of all that they possess—their very hearts and minds, all their days and all their dreams. . . . And the external symbol of that union, the physical manifestation of what is a far deeper spiritual and metaphysical bonding, is the physical blending that is part of—indeed, a most beautiful and gratifying expression of—that larger, more complete union of eternal purpose and promise.” (BYU Devotional 1988)
              </Text>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
      <NavigationButtons onBackPress={handleBackPress} onForwardPress={handleForwardPress} />
    </>
  );
};

export default ElderQuote;
