import React from 'react';
import { View, Text, Image, TouchableOpacity, Linking } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        width: '90%',
        height: 60,
        borderRadius: 30,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderColor: '#ab713c',
        borderWidth: 1,
      }}
      onPress={onPress}
    >
      <Text style={{ fontSize: 16, fontWeight: 'bold', textAlign: 'center' }}>{title}</Text>
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
          style={{ width: 60, height: 60, borderRadius: 80, marginLeft: 5 }}
        />
        <Text style={{
          fontSize: 20, marginLeft: 5, borderRadius: 40, backgroundColor: 'white', width: "70%", paddingLeft: 20, borderColor: '#ab713c',
          borderWidth: 1
        }}>Financial</Text>
      </View>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <CustomButton
          title="Lesson 1: A Gospel-Based Financial Foundation"
          onPress={() => handleLinkPress('https://anxiouslyengaged.byu.edu/00000176-bec4-d5eb-a777-bee464c20000/ae-fs-a-gospel-based-financial-foundation')}
        />
        <CustomButton
          title="Lesson 2: Understanding our Financial Backgrounds"
          onPress={() => handleLinkPress('https://anxiouslyengaged.byu.edu/00000176-bec6-d800-abf7-fffe32350000/ae-fs-understanding-our-financial-backgrounds')}
        />
        <CustomButton
          title="Lesson 3: Practicing Financial Transparency"
          onPress={() => handleLinkPress('https://anxiouslyengaged.byu.edu/00000176-bec7-deb6-a77f-feef97460000/ae-fs-practicing-financial-transparency')}
        />
        <CustomButton
          title="Lesson 4: Planning for Your Financial Future"
          onPress={() => handleLinkPress('https://anxiouslyengaged.byu.edu/00000176-bec9-deb6-a77f-fee984a20000/ae-fs-planning-for-your-financial-future')}
        />
      </View>
    </View>
  );
};

export default Financial;
