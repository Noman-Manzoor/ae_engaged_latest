import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        width: '90%',
        height: 50,
        borderRadius: 40,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderColor: '#ab713c',
        borderWidth: 1,
      }}
      onPress={onPress}
    >
      <Text style={{ fontSize: 18, fontWeight: 'bold' }}>{title}</Text>
    </TouchableOpacity>
  );
};

const HowToFight = () => {
  const navigation = useNavigation();

  const handleLinkPress = (url) => {
    Linking.openURL(url).catch((error) => console.error('An error occurred', error));
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#90b1c2' }}>
      {/* Header */}
      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16 }}>
        {/* Back Arrow */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-back" size={30} color="white" />
        </TouchableOpacity>

        <Image
          source={require('../../../assets/images/logo2.png')}
          style={{ width: 60, height: 60, borderRadius: 80, marginLeft: 5 }}
        />
        <Text style={{
          fontSize: 20, marginLeft: 5, borderRadius: 40, backgroundColor: 'white', width: "70%", paddingLeft: 20, borderColor: '#ab713c',
          borderWidth: 1
        }}>How To Fight</Text>
      </View>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <CustomButton
          title="Part 1: The Four Horsemen"
          onPress={() => handleLinkPress('https://anxiouslyengaged.byu.edu/00000183-e74d-d2ff-a7b3-ffcf30550001/how-to-fight-1-pdf')}
        />
        <CustomButton
          title="Part 2: The Four Antidotes"
          onPress={() => handleLinkPress('https://anxiouslyengaged.byu.edu/00000183-e74e-daad-a9e7-ef5f6a780001/how-to-fight-2-pdf')}
        />
        
      </View>
    </View>
  );
};

export default HowToFight;
