import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'react-native-gesture-handler';

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
        paddingLeft: 20,
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
          <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#707070', textAlign: 'left', textDecorationLine: 'underline' }}>
            {lessonContent.trim()}
          </Text>
        </View>
      )}
    </TouchableOpacity>
  );
};

const Financial = () => {
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
          <Text style={{ color: '#707070', fontSize: 9, backgroundColor: 'white', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 15, borderColor: '#ab713c', borderWidth: 1 }}>
            Resources  &gt; Supplemental Lessons &gt; Financial
          </Text>
        </View>
      </View>

      <ScrollView>
        <View style={{ flex: 1, paddingTop: 25, alignItems: 'center' }}>
          <CustomButton
            title={`Shared Financial Stewardship`}
            onPress={() => handleLinkPress('https://anxiouslyengaged.byu.edu/00000176-bec4-d5eb-a777-bee464c20000/ae-fs-a-gospel-based-financial-foundation')}
          />
          <CustomButton
            title={`Lesson 1 : A Gospel-Based Financial Foundation`}
            onPress={() => handleLinkPress('https://anxiouslyengaged.byu.edu/00000176-bec4-d5eb-a777-bee464c20000/ae-fs-a-gospel-based-financial-foundation')}
          />
          <CustomButton
            title="Lesson 2: Understanding our Financial Backgrounds"
            onPress={() => handleLinkPress('https://anxiouslyengaged.byu.edu/00000176-bec6-d800-abf7-fffe32350000/ae-fs-understanding-our-financial-backgrounds')}
          />
          <CustomButton
            title={`Lesson 1 : Practicing Financial Transparency`}
            onPress={() => handleLinkPress('https://anxiouslyengaged.byu.edu/00000176-bec7-deb6-a77f-feef97460000/ae-fs-practicing-financial-transparency')}
          />
          <CustomButton
            title={`Lesson 1 : Planning for Your Financial Future`}
            onPress={() => handleLinkPress('https://anxiouslyengaged.byu.edu/00000176-bec9-deb6-a77f-fee984a20000/ae-fs-planning-for-your-financial-future')}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default Financial;
