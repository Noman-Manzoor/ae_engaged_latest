import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Import the hook from react-navigation
import NavigationButtons from './../../../components/NavigationButtons';

const WelcomeWorkBook = () => {
  const navigation = useNavigation(); // Get the navigation object using the hook

  const handleBackPress = () => {
    // Handle the back navigation logic
    navigation.navigate('Workshop');
  };

  const handleForwardPress = () => {
    // Handle the forward navigation logic
    navigation.navigate('Workbook Lessons');
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16, backgroundColor: '#90b1c2' }}>
        {/* Back Arrow */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-back" size={30} color="white" />
        </TouchableOpacity>

        <Image
         source={require('../../../../assets/images/logo.png')}
          style={{ width: 60, height: 60, borderRadius: 30, marginRight: 16 }}
        />
        <View style={{ flex: 1 }}>
        
          <Text style={{ fontSize: 12, backgroundColor: 'white', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 15, borderColor: '#ab713c', borderWidth: 1 }}>
          Workshop › Workbook › Welcome
          </Text>
        </View>
      </View>

      <View>
        <Image
           source={require('../../../../assets/images/logo.png')}
          style={{ width: '100%', height: 200, marginBottom: 20, marginTop:10 }}
          resizeMode="contain"
        />
        <Text style={{ fontSize: 16, marginBottom: 10, textAlign: 'center' }}>Participant Workbook: Welcome</Text>
        <View style={{ width: '100%', borderBottomColor: '#ab713c', borderBottomWidth: 1, marginBottom: 10 }} />
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10 }}>Instructions</Text>
        <View style={{ width: '20%', borderBottomColor: '#90b1c2', borderBottomWidth: 10, marginBottom: 10, marginLeft: 10 }} />

        <Text style={{ fontSize: 16, paddingLeft: 25, paddingRight: 20 }}>
          The Participant Workbook is your guide as you
          navigate the Anxiously Engaged workshop
          together. Here you will find the Couple Time
          discussion questions, space to write notes and
          set goals, and resources.
          {"\n\n"}
          We hope that you enjoy the course and find
          ways to intentionally grow together and
          become one!
        </Text>
      </View>

      <NavigationButtons onBackPress={handleBackPress} onForwardPress={handleForwardPress} />
    </View>
  );
};

export default WelcomeWorkBook;
