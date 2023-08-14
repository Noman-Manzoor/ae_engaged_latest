import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from Expo vector-icons

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        width: '80%',
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

const WorkShopScreen = ({ navigation }) => {
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
          style={{ width: 60, height: 60, borderRadius: 80, marginLeft:5 }}
        />
        <Text style={{
          fontSize: 20, marginLeft: 5, borderRadius: 40, backgroundColor: 'white', width: "70%", paddingLeft: 20, borderColor: '#ab713c',
          borderWidth: 1
        }}>Workbook</Text>
      </View>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <CustomButton
          title="Workbook"
          onPress={() => navigation.navigate('welcome Work Book')}
        />
        <CustomButton
          title="Weekly Goals"
        onPress={() => navigation.navigate('Workbook Lessons')}
        />
        <CustomButton
          title="Evaluation"
        onPress={() => navigation.navigate('Workshop Evaluation')}
        />
      </View>
    </View>
  );
};

export default WorkShopScreen;
