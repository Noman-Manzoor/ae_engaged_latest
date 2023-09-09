import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import NavigationButtons from '../../components/NavigationButtons';
import { Ionicons } from '@expo/vector-icons';

const ContinueEducation = ({ navigation }) => {
  const handleBackPress = () => {
    // Handle the back navigation logic
    navigation.navigate('Resources');
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
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {/* Header */}
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
              Resources &gt; Continuing Education
            </Text>
          </View>
        </View>

        {/* Content */}
        <View style={{ paddingBottom: 16 }}>
          <Image
            source={require('../../../assets/images/resource_continue_education.png')}
            style={{ width: '100%', height: 200, marginBottom: 10 }}

          />

          <View style={{ width: '100%', borderBottomColor: '#ab713c', borderBottomWidth: 1, marginBottom: 10 }} />
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10, color: '#707070' }}>Continuing Education</Text>
          <View style={{ width: '20%', borderBottomColor: '#90b1c2', borderBottomWidth: 10, marginBottom: 10, marginLeft: 10 }} />

          <Text style={{ color: '#707070', fontSize: 16, marginLeft: 10, marginRight: 10, marginTop: 20, marginBottom: 50, paddingLeft: 25, paddingRight: 15 }}>
            These are some helpful resources to help you continue to learn about marriage and becoming one.
          </Text>

          {/* HRU */}
          <TouchableOpacity onPress={handleHRUPress}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 15, color: 'blue', textDecorationLine: 'underline' }}>Healthy Relationships Utah</Text>
          </TouchableOpacity>
          <Text style={{ color: '#707070', fontSize: 16, marginLeft: 25, marginRight: 10, marginBottom: 20 }}>
            Offers free research-based workshops
          </Text>

          {/* UMC */}
          <TouchableOpacity onPress={handleUMCPress}>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 15, color: 'blue', textDecorationLine: 'underline' }}>Utah Marriage Commission</Text>
          </TouchableOpacity>
          <Text style={{ color: '#707070', fontSize: 16, marginLeft: 25, marginRight: 10, marginBottom: 20 }}>
            Podcasts, webinars, events, relationship inventory, and more
          </Text>
        </View>
      </ScrollView>

      <NavigationButtons onBackPress={handleBackPress} onForwardPress={handleForwardPress} />
    </View>
  );
};

export default ContinueEducation;
