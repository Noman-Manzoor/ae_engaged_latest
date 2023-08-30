import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const CustomButton = ({ title, onPress }) => {
  // Check if title contains a colon
  const hasColon = title.includes(':');

  // Splitting the title to separate the lesson number and content
  const [lessonNumber, lessonContent = ""] = hasColon ? title.split(':') : [title];

  return (
    <TouchableOpacity
      style={{
        width: '95%',
        borderRadius: 16,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderColor: '#ab713c',
        borderWidth: 1,
        color: '#707070',
        paddingTop: 15,
        paddingBottom: 15,
        flexDirection: 'row', // Adding flexDirection to structure the texts side by side
        paddingLeft: 30,
        paddingRight: 5
      }}
      onPress={onPress}
    >
      {/* Lesson Number */}
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#707070' }}>
        {lessonNumber.trim() + (hasColon ? " : " : "")}
      </Text>

      {/* Lesson Content */}
      {hasColon && (
        <View style={{ flex: 1, justifyContent: 'center' }}>
          <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#707070', textDecorationLine: 'underline' }}>
            {lessonContent.trim()}
          </Text>
        </View>
      )}
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
          style={{ width: 50, height: 50, borderRadius: 80, marginLeft: 5, marginRight: 3 }}
        />
        <View style={{ flex: 1 }}>
          <Text style={{ color: '#707070', fontSize: 9, backgroundColor: 'white', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 15, borderColor: '#ab713c', borderWidth: 1, textAlign: 'center' }}>
            Resources  &gt; Supplemental Lessons &gt; How To Fight
          </Text>
        </View>
      </View>

      <View style={{ flex: 1, paddingTop: 25, alignItems: 'center' }}>
        <CustomButton
          title="How to Fight Well"
          onPress={() => handleLinkPress('https://anxiouslyengaged.byu.edu/00000183-e74d-d2ff-a7b3-ffcf30550001/how-to-fight-1-pdf')}
        />
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
