import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import NavigationButtons from '../../components/NavigationButtons';
import { Ionicons } from '@expo/vector-icons';

const Feedback = ({ navigation }) => {
  const handleBackPress = () => {
    // Handle the back navigation logic
    navigation.navigate('supplemental lessons');
  };

  const handleForwardPress = () => {
    // Handle the forward navigation logic
    navigation.navigate('Resources continue Education');
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

            <Image
              source={require('../../../assets/images/logo.png')}
              style={{ width: 60, height: 60, borderRadius: 30, marginRight: 16, marginLeft: 5 }}
            />
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 12, backgroundColor: 'white', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 15, borderColor: '#ab713c', borderWidth: 1, textAlign: 'center' }}>
                Evaluation &gt; Feedback
              </Text>
            </View>
          </View>

          {/* Content */}
          <ScrollView contentContainerStyle={{ padding: 16 }}>
            <Image
              source={require('../../../assets/images/evaluation_feedback.png')}
              style={{ width: '100%', height: 150, marginBottom: 10 }}
              resizeMode='contain'
            />

            <View style={{ width: '100%', borderBottomColor: '#ab713c', borderBottomWidth: 1, marginBottom: 10 }} />
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10 }}>Feedback</Text>
            <View style={{ width: '20%', borderBottomColor: '#90b1c2', borderBottomWidth: 10, marginBottom: 10, marginLeft: 10 }} />

            <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 10, marginTop: 20, marginBottom: 10, textAlign:"center" }}>
            Thank you for using our Anxiously
Engaged app!{"\n"}
We hope that it has been an upliing and
good learning experience. 
            </Text>

            <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 10, marginTop: 20, marginBottom: 50, textAlign:"center" }}>
            We want to connue to improve our app
to make it a wonderful experience. Please
leave us any thoughts or feedback you
have by following the link below.
            </Text>


           {/* Button */}
           <TouchableOpacity
              style={{
                width: '80%',
                height: 50,
                borderRadius: 40,
                backgroundColor: '#90b1c2',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 20,
                marginLeft: 25,
                borderColor: '#ab713c',
                borderWidth: 1,
              }}
              onPress={() => console.log("Button pressed!")} // Replace with your function to handle button press
            >
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'white' }}>Feedback</Text>
            </TouchableOpacity>

          </ScrollView>
        </View>
      </ScrollView>
      {/* <NavigationButtons onBackPress={handleBackPress} onForwardPress={handleForwardPress} /> */}
    </>
  );
};

export default Feedback;
