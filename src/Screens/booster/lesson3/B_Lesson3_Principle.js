import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import NavigationButtons from '../../../components/NavigationButtons'

const B_Lesson3_Principle = ({ navigation }) => {
  const handleBackPress = () => {
    // Handle the back navigation logic
    navigation.navigate('Booster Lesson3 Topics');
  };

  const handleForwardPress = () => {
    // Handle the forward navigation logic
    navigation.navigate('Booster Lesson3 Topics');
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
                Booster Workbook &gt; Lesson 3 &gt; Principle
              </Text>
            </View>
          </View>
          <View >
            <Image
              source={require('../../../../assets/images/lesson3_mental_prep.png')}
              style={{ width: '100%', height: 158, marginBottom: 10 }}

            />
            <Text style={{ fontSize: 12, marginBottom: 10, textAlign: 'center' }}>Lesson 3: Becoming One Through Marital Sexuality</Text>
            <View style={{ width: '100%', borderBottomColor: '#ab713c', borderBottomWidth: 1, marginBottom: 10 }} />
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10 }}>Principle</Text>
            <View style={{ width: '20%', borderBottomColor: '#90b1c2', borderBottomWidth: 10, marginBottom: 10, marginLeft: 10 }} />

            <Text style={{ paddingLeft: 25, paddingRight: 20, }}>
              Elder Packer counseled, “We do not, in our
              counseling, enter the bedrooms of members
              of the church.”* This leaves sexual decision
              making between husband and wife and God.
              You need to be wise stewards and use your
              agency to make choices about what you will
              and will not do in your sexual relationship.
              Being able to discuss and communicate about
              all aspects of your sexual relationship
              (mental, emotional, physical, spiritual) with
              your spouse can greatly increase your sexual
              satisfaction and help you become one.{'\n'}
            </Text>

            <Text style={{ fontSize: 16, paddingLeft: 25, paddingRight: 20, }}>
              In marriage, you should be having frequent conversations about your sexual relationship. Both spouses need to be clearly speaking and listening, as this is part of being equal partners in a sexual relationship.{'\n'}Conversations can include:{'\n'}
              • Communicating during sex about what does and doesn’t feel good.{'\n'}
              • Talking between sexual experiences about how often you are having sex and who is initiating sex.{'\n'}
              • Making decisions together about what is and isn’t okay in your sexual relationship.{'\n'}
              • Talking about your schedules and planning when to have sex. *“The Fountain of Life,” BYU Stake Fireside, 29 March 1992{'\n'}
            </Text>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 30, marginLeft: 10, marginTop: 20 }}></Text>
          </View>




        </View >
      </ScrollView>
      <NavigationButtons onBackPress={handleBackPress} onForwardPress={handleForwardPress} />

    </>
  );
};

export default B_Lesson3_Principle;
