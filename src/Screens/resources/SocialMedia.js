import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import NavigationButtons from '../../components/NavigationButtons';
import { Ionicons } from '@expo/vector-icons';

const SocialMedia = ({ navigation }) => {
  const handleBackPress = () => {
    // Handle the back navigation logic
    navigation.navigate('Resources');
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

            <TouchableOpacity onPress={() => navigation.navigate('Home')}>
              <Image
                source={require('../../../assets/images/logo2.png')}
                style={{ width: 50, height: 50, borderRadius: 80, marginLeft: 5, marginRight: 5 }}
              />
            </TouchableOpacity>

            <View style={{ flex: 1 }}>
              <Text style={{ color: '#707070', fontSize: 12, backgroundColor: 'white', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 15, borderColor: '#ab713c', borderWidth: 1, textAlign: 'left' }}>
                Resources &gt; Social Media
              </Text>
            </View>
          </View>

          {/* Content */}
          <ScrollView contentContainerStyle={{ paddingBottom: 16 }}>
            <Image
              source={require('../../../assets/images/about_classes.png')}
              style={{ width: '100%', height: 150, marginBottom: 10 }}
            />

            <View style={{ width: '100%', borderBottomColor: '#ab713c', borderBottomWidth: 1, marginBottom: 10 }} />
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10, color: '#707070' }}>Social Media</Text>
            <View style={{ width: '20%', borderBottomColor: '#90b1c2', borderBottomWidth: 10, marginBottom: 10, marginLeft: 10 }} />

            <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 10, marginTop: 20, marginBottom: 50, paddingLeft: 25, paddingRight: 5 }}>
              Please feel free to browse or follow our social media accounts. Our goal is to provide reminders of principles learned as well as help you find good resources as you intentionally become one.
            </Text>

            {/* Social Media Icons */}
            <View style={{ flexDirection: 'column', marginBottom: 20, paddingLeft: 35 }}>
              <TouchableOpacity onPress={handleFacebookPress}>
                <Ionicons name="logo-facebook" size={40} color="#3b5998" />
              </TouchableOpacity>
              <TouchableOpacity style={{ marginTop: 20 }} onPress={handleInstagramPress}>
                <Ionicons name="logo-instagram" size={40} color="#e4405f" />
              </TouchableOpacity>
            </View>


            {/* Social Media Text */}
            {/* <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 10, marginBottom: 20, paddingLeft: 20, paddingRight: 5 }}>
              Follow us on Facebook and Instagram for the latest updates and helpful resources.
            </Text> */}
          </ScrollView>
        </View>
      </ScrollView>
      <NavigationButtons onBackPress={handleBackPress} onForwardPress={handleForwardPress} />
    </>
  );
};

export default SocialMedia;
