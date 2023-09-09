import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import NavigationButtons from '../../components/NavigationButtons';
import { Ionicons } from '@expo/vector-icons';

const WorshopEvaluation = ({ navigation }) => {
  const handleBackPress = () => {
    // Handle the back navigation logic
    navigation.navigate('Evaluation');
  };

  const handleForwardPress = () => {
    // Handle the forward navigation logic
    navigation.navigate('Evaluation');
  };

  // Function to handle the press of the Facebook button
  const handleFacebookPress = () => {
    Linking.openURL('https://www.facebook.com/YOUR_FACEBOOK_PAGE');
  };

  // Function to handle the press of the Instagram button
  const handleInstagramPress = () => {
    Linking.openURL('https://www.instagram.com/YOUR_INSTAGRAM_PAGE');
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
                source={require('../../../assets/images/logo2.png')}
                style={{ width: 50, height: 50, borderRadius: 80, marginLeft: 5, marginRight: 5 }}
              />
            </TouchableOpacity>

            <View style={{ flex: 1 }}>
              <Text style={{ color: '#707070', fontSize: 12, backgroundColor: 'white', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 15, borderColor: '#ab713c', borderWidth: 1, textAlign: 'left' }}>
                Workshop &gt; Evaluation
              </Text>
            </View>
          </View>

          {/* Content */}
          <ScrollView contentContainerStyle={{ paddingBottom: 16 }}>
            <Image
              source={require('../../../assets/images/Screenshot_1.png')}
              style={{ width: '100%', height: 180, marginBottom: 10 }}

            />

            <View style={{ width: '100%', borderBottomColor: '#ab713c', borderBottomWidth: 1, marginBottom: 10, marginTop: 20 }} />
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10, color: '#707070' }}>Evaluation</Text>
            <View style={{ width: '20%', borderBottomColor: '#90b1c2', borderBottomWidth: 10, marginBottom: 10, marginLeft: 10 }} />

            <Text style={{ color: '#707070', fontSize: 16, marginLeft: 10, marginRight: 10, marginTop: 20, marginBottom: 10, textAlign: "center", paddingLeft: 25, paddingRight: 25 }}>
              Thank you for participating in our
              Anxiously Engaged Workshop! {"\n"}
              We hope that it has helped you move
              toward becoming one.
            </Text>

            <Text style={{ color: '#707070', fontSize: 16, marginLeft: 10, marginRight: 10, marginTop: 10, marginBottom: 50, textAlign: "center", paddingLeft: 20, paddingRight: 20 }}>
              Please fill out the following evaluaon to
              help us connue to improve our program.
              It should take about 10 minutes to
              complete. We really appreciate your
              feedback!

            </Text>


            {/* Button */}
            <TouchableOpacity
              style={{


                width: '80%',
                height: 50,
                borderRadius: 19,
                marginLeft: 25,

                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 20,
                borderColor: '#ab713c',
                borderWidth: 1,
                color: '#707070'
              }}
              onPress={() => Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSc_N4xYAbm6I44ThjmGM9Pp0m9gGx37tnlkn8dqIsLt4h6XjA/viewform?usp=sf_link')}
            >
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#707070' }}>Start Evaluation</Text>
            </TouchableOpacity>

            <View style={{ width: '50%', alignSelf: 'center', marginBottom: 20, marginTop: 40 }}>
              {/* just to maintain design */}
            </View>
          </ScrollView>
        </View>
      </ScrollView>
      <NavigationButtons onBackPress={handleBackPress} onForwardPress={handleForwardPress} />
    </>
  );
};

export default WorshopEvaluation;
