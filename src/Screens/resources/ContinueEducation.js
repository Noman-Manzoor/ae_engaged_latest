import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import NavigationButtons from '../../components/NavigationButtons';
import { Ionicons } from '@expo/vector-icons';

const ContinueEducation = ({ navigation }) => {
  const handleBackPress = () => {
    // Handle the back navigation logic
    navigation.navigate('Resources social media');
  };

  const handleForwardPress = () => {
    // Handle the forward navigation logic
    navigation.navigate('Resources Financial');
  };

  const handleHRUPress = () => {
    Linking.openURL('https://extension.usu.edu/hru/');
  };

  const handleUMCPress = () => {
    Linking.openURL('https://extension.usu.edu/strongermarriage/');
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
                Resources &gt; Continue Education
              </Text>
            </View>
          </View>

          {/* Content */}
          <ScrollView contentContainerStyle={{ padding: 16 }}>
            <Image
              source={require('../../../assets/images/resource_continue_education.png')}
              style={{ width: '100%', height: 150, marginBottom: 10 }}
              resizeMode='contain'
            />

            <View style={{ width: '100%', borderBottomColor: '#ab713c', borderBottomWidth: 1, marginBottom: 10 }} />
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10 }}>Continue Education</Text>
            <View style={{ width: '20%', borderBottomColor: '#90b1c2', borderBottomWidth: 10, marginBottom: 10, marginLeft: 10 }} />

            <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 10, marginTop: 20, marginBottom: 50 }}>
              These are some helpful resources to help you continue to learn about marriage and becoming one.
            </Text>

            {/* HRU */}
            <TouchableOpacity onPress={handleHRUPress}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#90b1c2', marginBottom: 10 }}>Healthy Relationships Utah</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 10, marginBottom: 20 }}>
              Offers free research-based workshops
            </Text>

            {/* UMC */}
            <TouchableOpacity onPress={handleUMCPress}>
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#90b1c2', marginBottom: 10 }}>Utah Marriage Commission</Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 10, marginBottom: 20 }}>
              Podcasts, webinars, events, relationship inventory, and more
            </Text>

          </ScrollView>
        </View>
      </ScrollView>
      <NavigationButtons onBackPress={handleBackPress} onForwardPress={handleForwardPress} />
    </>
  );
};

export default ContinueEducation;
