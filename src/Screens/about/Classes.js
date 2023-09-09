import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import NavigationButtons from '../../components/NavigationButtons';
import { Ionicons } from '@expo/vector-icons';
import { Linking } from 'react-native';


const Classes = ({ navigation }) => {
  const handleBackPress = () => {
    // Handle the back navigation logic
    navigation.navigate('About');
  };

  const handleForwardPress = () => {
    // Handle the forward navigation logic
    navigation.navigate('About');
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
                source={require('../../../assets/images/logo2.png')}
                style={{ width: 60, height: 60, borderRadius: 80, marginLeft: 5, marginRight: 5 }}
              />
            </TouchableOpacity>

            <View style={{ flex: 1 }}>
              <Text style={{ color: '#707070', fontSize: 12, backgroundColor: 'white', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 15, borderColor: '#ab713c', borderWidth: 1, textAlign: 'left' }}>
                About &gt; Classes
              </Text>
            </View>
          </View>

          {/* Content */}
          <ScrollView contentContainerStyle={{ paddingBottom: 16 }}>
            <Image
              source={require('../../../assets/images/about_classes.png')}
              style={{ width: '100%', height: 180, marginBottom: 10 }}
            />

            <View style={{ width: '100%', borderBottomColor: '#ab713c', borderBottomWidth: 1, marginBottom: 10 }} />
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10, color: '#707070' }}>Classes</Text>
            <View style={{ width: '20%', borderBottomColor: '#90b1c2', borderBottomWidth: 10, marginBottom: 10, marginLeft: 10 }} />

            <Text style={{ color: '#707070', fontSize: 16, marginLeft: 10, marginRight: 10, marginTop: 20, marginBottom: 50, paddingLeft: 25, paddingRight: 25 }}>
              The following link will take you to a list of classes that are starting and how to sign up.
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
              onPress={() => Linking.openURL('https://docs.google.com/forms/d/e/1FAIpQLSfu1rqi6BMGK8EeY1NjzPapSK0S9R5soCYUxbBhYc5lC6Te2Q/viewform?usp=sf_link')}
            >
              <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#707070' }}>Signup for here!</Text>
            </TouchableOpacity>

          </ScrollView>
        </View>
      </ScrollView>
      <NavigationButtons onBackPress={handleBackPress} onForwardPress={handleForwardPress} />
    </>
  );
};

export default Classes;
