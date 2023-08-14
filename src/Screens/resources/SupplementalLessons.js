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

const SupplementalLessons = () => {
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
        }}>Supplemental Lessons</Text>
      </View>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <CustomButton
          title="Birth Control"
          onPress={() => handleLinkPress('https://anxiouslyengaged.byu.edu/00000176-beb4-d800-abf7-ffbeff3a0000/ae-lesson-birth-control')}
        />
        <CustomButton
          title="Couple council"
          onPress={() => handleLinkPress('https://anxiouslyengaged.byu.edu/00000176-beb8-d800-abf7-ffbeb83b0000/ae-lesson-couple-counsil')}
        />
        <CustomButton
          title="Creative problem solving"
          onPress={() => handleLinkPress('https://anxiouslyengaged.byu.edu/00000176-beb9-d800-abf7-ffbf79f80000/ae-lesson-creative-problem-solving')}
        />
        <CustomButton
          title="Disclosing personal Issues"
          onPress={() => handleLinkPress('https://anxiouslyengaged.byu.edu/00000176-beba-de19-a9fe-ffbe399a0000/ae-lesson-disclosing-personal-issues')}
        />
        <CustomButton
          title="Establishing Your Own Traditions"
          onPress={() => handleLinkPress('https://anxiouslyengaged.byu.edu/00000183-e753-d2ff-a7b3-ffd73c160001/establishing-traditions-pdf')}
        />
        <CustomButton
          title="Family of Origins"
          onPress={() => handleLinkPress('https://anxiouslyengaged.byu.edu/00000176-beba-d5eb-a777-befee0000000/ae-lesson-family-of-origin')}
        />
        <CustomButton
          title="Forgiveness and Repentence"
          onPress={() => handleLinkPress('https://anxiouslyengaged.byu.edu/00000176-bee5-d800-abf7-ffff8b170000/ae-lesson-repentance-pdf')}
        />
        <CustomButton
          title="Friendship in Marriage"
          onPress={() => handleLinkPress('https://anxiouslyengaged.byu.edu/00000180-7204-d2d1-ade4-7274cde20001/friendship-in-marriage')}
        />
        <CustomButton
          title="Getting spiritual confirmation to Marry"
          onPress={() => handleLinkPress('https://anxiouslyengaged.byu.edu/00000176-bee6-d800-abf7-fffeaef70000/ae-online-spritual-confirmation-v2-pdf')}
        />
      </View>
    </View>
  );
};

export default SupplementalLessons;
