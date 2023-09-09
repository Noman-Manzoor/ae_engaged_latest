import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import Ionicons from Expo vector-icons

const CustomButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        width: '90%',
        height: 60,
        borderRadius: 16,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderColor: '#ab713c',
        borderWidth: 1,
        color: '#707070'
      }}
      onPress={onPress}
    >
      <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#707070' }}>{title}</Text>
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

        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Image
            source={require('../../../assets/images/logo2.png')}
            style={{ width: 60, height: 60, borderRadius: 80, marginLeft: 5 }}
          />
        </TouchableOpacity>
        <Text style={{
          fontSize: 15, marginLeft: 5, borderRadius: 40, backgroundColor: 'white', width: "70%", paddingLeft: 20, borderColor: '#ab713c',
          borderWidth: 1, color: '#707070'
        }}>Workshop</Text>
      </View>
      <View style={{ flex: 1, paddingTop: 20, alignItems: 'center' }}>
        <CustomButton
          title="Workbook"
          onPress={() => navigation.navigate('Workbook Lessons')}
        />
        <CustomButton
          title="Weekly Goals"
          onPress={() => navigation.navigate('Workbook goals Lessons')}
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
