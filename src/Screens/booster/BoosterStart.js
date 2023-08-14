import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Import the hook from react-navigation
import NavigationButtons from '../../components/NavigationButtons';

const BoosterStart = () => {
  const navigation = useNavigation(); // Get the navigation object using the hook

  const handleBackPress = () => {
    // Handle the back navigation logic
    navigation.navigate('Booster');
  };

  const handleForwardPress = () => {
    // Handle the forward navigation logic
    navigation.navigate('Booster Instructins');
  };

  return (
    <View style={{ flex: 1 }}>
      {/* Header */}
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16, backgroundColor: '#90b1c2' }}>
        {/* Back Arrow */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-back" size={30} color="white" />
        </TouchableOpacity>
      </View>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'black', fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Welcome to the</Text>
        <Image
          source={require('../../../assets/images/logo.png')}
          style={{ width: 200, height: 200, borderRadius: 100, marginBottom: 40 }}
        />
        <Text style={{ color: 'black', fontSize: 24, fontWeight: 'bold', marginBottom: 20 }}>Booster WorkBook</Text>

        <NavigationButtons onBackPress={handleBackPress} onForwardPress={handleForwardPress} />
      </View>
    </View>
  );
};

export default BoosterStart;
