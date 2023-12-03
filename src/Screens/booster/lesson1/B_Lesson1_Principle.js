import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import NavigationButtons from '../../../components/NavigationButtons'

const B_Lesson1_Principle = ({ navigation }) => {
  const handleBackPress = () => {
    // Handle the back navigation logic
    navigation.navigate('Booster Lesson1 Topics');
  };

  const handleForwardPress = () => {
    // Handle the forward navigation logic
    navigation.navigate('Booster Lesson1 Topics');
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
                Booster Workbook &gt; Lesson 1 &gt; Principle
              </Text>
            </View>
          </View>
          <View >
            <Image
              source={require('../../../../assets/images/workbook_les1_ct_ciardi_poem.png')}
              style={{ width: '100%', height: 158, marginBottom: 10 }}

            />
            <Text style={{ fontSize: 16, marginBottom: 10, textAlign: 'center' }}>Lesson 1: Becoming One in Marriage</Text>
            <View style={{ width: '100%', borderBottomColor: '#ab713c', borderBottomWidth: 1, marginBottom: 10 }} />
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10 }}>Principle</Text>
            <View style={{ width: '20%', borderBottomColor: '#90b1c2', borderBottomWidth: 10, marginBottom: 10, marginLeft: 10 }} />

            <Text style={{ fontSize: 16, paddingLeft: 25, paddingRight: 20, }}>
              Do you remember the Ciardi poem “Most
              Like an Arch This Marriage”? Arches, like the
              one above, are many times stronger than the
              normal post and beam doorways we walk
              through because when the two sides of an
              arch meet at the center it actually creates an
              upward-thrust counterforce to gravity.
              Similarly, you can counter challenges
              together with greater strength when you lean
              and fall all the way into your marriage.{'\n'}
            </Text>

            <Text style={{ fontSize: 16, paddingLeft: 25, paddingRight: 20, }}>
              One of the ways you can lean and fall all the
              way in is by creating an “invisible fence”
              around your marriage. President Hinckley
              counseled, “When you are married, be
              fiercely loyal one to another.”* As a married couple, you know the private behaviors and characteristics of your spouse because he/she has been vulnerable enough to share his/her soul with you. These intimacies are sacred ground and you must protect them. * BYU Commencement, April 1995
            </Text>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 30, marginLeft: 10, marginTop: 20 }}></Text>



            {/* <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10, marginTop: 20 }}>Notes Section:</Text> */}

          </View>




        </View >
      </ScrollView>
      <NavigationButtons onBackPress={handleBackPress} onForwardPress={handleForwardPress} />

    </>
  );
};

export default B_Lesson1_Principle;
