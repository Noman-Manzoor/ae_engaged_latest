import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Import the hook from react-navigation
import NavigationButtons from './../../../components/NavigationButtons';

const WorkBookStart = () => {
  const navigation = useNavigation(); // Get the navigation object using the hook

  const handleBackPress = () => {
    // Handle the back navigation logic
    navigation.navigate('Workbook Lessons');
  };

  const handleForwardPress = () => {
    // Handle the forward navigation logic
    navigation.navigate('welcome WorkBook');
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
              source={require('../../../../assets/images/logo2.png')}
              style={{ width: 50, height: 50, borderRadius: 80, marginLeft: 5, marginRight: 5 }}
            />
          </TouchableOpacity>
          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 12, backgroundColor: 'white', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 15, borderColor: '#ab713c', borderWidth: 1 }}>
              Workshop › Workbook › Welcome
            </Text>
          </View>
        </View>

        <View>
          <Image
            source={require('../../../../assets/images/Screenshot_1.png')}
            style={{ width: '100%', height: 200, marginBottom: 30 }}
          />
          {/* <Text style={{ fontSize: 16, marginBottom: 10, textAlign: 'center' }}>Participant Workbook: Welcome</Text> */}
          <View style={{ width: '100%', borderBottomColor: '#ab713c', borderBottomWidth: 1, marginBottom: 10 }} />
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ color: 'black', fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Welcome to the</Text>
            <Image
              source={require('../../../../assets/images/logo2.png')}
              style={{ width: 130, height: 130, borderRadius: 100, marginBottom: 40 }}
            />
            <Text style={{ color: 'black', fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Participant Workbook</Text>

          </View>
        </View>
      </ScrollView>

      <NavigationButtons onBackPress={handleBackPress} onForwardPress={handleForwardPress} />
    </View>
  );
};

export default WorkBookStart;
