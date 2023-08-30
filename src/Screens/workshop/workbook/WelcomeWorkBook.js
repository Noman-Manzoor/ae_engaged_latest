import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import NavigationButtons from './../../../components/NavigationButtons';

const WelcomeWorkBook = () => {
  const navigation = useNavigation();

  const handleBackPress = () => {
    navigation.navigate('welcome Work Book');
  };

  const handleForwardPress = () => {
    navigation.navigate('Workbook Lessons');
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

          <Image
            source={require('../../../../assets/images/logo2.png')}
            style={{ width: 60, height: 60, borderRadius: 30, marginRight: 16 }}
          />
          <View style={{ flex: 1 }}>
            <Text style={{ color: '#707070', fontSize: 12, backgroundColor: 'white', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 15, borderColor: '#ab713c', borderWidth: 1 }}>
              Workshop › Workbook › Welcome
            </Text>
          </View>
        </View>

        <View>
          <Image
            source={require('../../../../assets/images/Screenshot_1.png')}
            style={{ width: '100%', height: 200, marginBottom: 20 }}
          />
          <Text style={{ fontSize: 16, marginBottom: 10, textAlign: 'center', color: '#707070' }}>Participant Workbook: Welcome</Text>
          <View style={{ width: '100%', borderBottomColor: '#ab713c', borderBottomWidth: 1, marginBottom: 10 }} />
          <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10, color: '#707070' }}>Instructions</Text>
          <View style={{ width: '20%', borderBottomColor: '#90b1c2', borderBottomWidth: 10, marginBottom: 10, marginLeft: 10 }} />

          <Text style={{ color: '#707070', fontSize: 16, paddingLeft: 25, paddingRight: 20, marginBottom: 50 }}>
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
      </ScrollView>

      <NavigationButtons onBackPress={handleBackPress} onForwardPress={handleForwardPress} />
    </View>
  );
};

export default WelcomeWorkBook;
