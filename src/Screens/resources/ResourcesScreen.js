import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Import the hook from react-navigation

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

const ResourcesScreen = () => {
  const navigation = useNavigation(); // Get the navigation object using the hook

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
        }}>Resources</Text>
      </View>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <CustomButton
          title="Supplemental Lessons"
        onPress={() => navigation.navigate('supplemental lessons')}
        />
        <CustomButton
          title="Social Media"
        onPress={() => navigation.navigate('Resources social media')}
        />
        <CustomButton
          title="Continuing Education"
        onPress={() => navigation.navigate('Resources continue Education')}
        />
        <CustomButton
          title="Financial"
        onPress={() => navigation.navigate('Resources Financial')}
        />
        <CustomButton
          title="How to Fight"
        onPress={() => navigation.navigate('Resources HowToFight')}
        />
      </View>
    </View>
  );
};

export default ResourcesScreen;
