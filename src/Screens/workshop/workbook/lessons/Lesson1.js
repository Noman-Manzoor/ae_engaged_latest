import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const CustomButton = ({ title, onPress }) => {
  // Splitting the title to separate the lesson number and content
  const [lessonNumber, lessonContent] = title.split(':');

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
        paddingLeft: 45,
        // textAlign: 'center',
        paddingRight: 5
      }}
      onPress={onPress}
    >
      {/* Lesson Number */}
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#707070' }}>{lessonNumber.trim() + " : "}</Text>

      {/* Lesson Content */}
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#707070', textAlign: 'left' }}>{lessonContent.trim()}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Lesson1 = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: '#90b1c2' }}>

      <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16, backgroundColor: '#90b1c2' }}>
        {/* Back Arrow */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-back" size={30} color="white" />
        </TouchableOpacity>

        <Image
          source={require('../../../../../assets/images/logo2.png')}
          style={{ width: 50, height: 50, borderRadius: 30, marginRight: 3, marginLeft: 5 }}
        />
        <View style={{ flex: 1 }}>

          <Text style={{ color: '#707070', fontSize: 10, backgroundColor: 'white', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 15, borderColor: '#ab713c', borderWidth: 1 }}>
            Workshop &gt; Workbook &gt; Lesson 1
          </Text>
        </View>
      </View>

      <View style={{ flex: 1, paddingTop: 25, alignItems: 'center' }}>

        <CustomButton
          title="Couple Time: Ciardi Poem"
          onPress={() => navigation.navigate('Lesson 1 Topic CT_CiardiPoem')}
        />
        <CustomButton
          title="Couple Time: We Over Me"
          onPress={() => navigation.navigate('Lesson 1 Topic CT_WeOverMe')}
        />
        <CustomButton
          title="Principles: Becoming One"
          onPress={() => navigation.navigate('Lesson 1 Topic Principles')}
        />
        <CustomButton
          title="Goals: Becoming One"
          onPress={() => navigation.navigate('Lesson 1 Topic Goals')}
        />

      </View>
    </View>
  );
};

export default Lesson1;
