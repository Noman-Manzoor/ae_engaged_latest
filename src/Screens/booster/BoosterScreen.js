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

const BoosterScreen = () => {
  const navigation = useNavigation(); // Get the navigation object using the hook

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
            style={{ width: 50, height: 50, borderRadius: 80, marginLeft: 5, marginRight: 5 }}
          />
        </TouchableOpacity>

        <Text style={{
          fontSize: 12, marginLeft: 5, borderRadius: 40, backgroundColor: 'white', width: "70%", paddingLeft: 20, borderColor: '#ab713c',
          borderWidth: 1, color: '#707070', padding: 5
        }}>Booster</Text>
      </View>

      <View style={{ flex: 1, paddingTop: 25, alignItems: 'center' }}>
        <CustomButton
          title="Booster Workbook"
          onPress={() => navigation.navigate('Booster weekly Goals')}
        />
        <CustomButton
          title="Booster Weekly Goals"
          onPress={() => navigation.navigate('Booster weekly Goals without welcome')}
        />
        <CustomButton
          title="Evaluation"
          onPress={() => navigation.navigate('Booster Evaluation')}
        />
      </View>
    </View>
  );
};

export default BoosterScreen;
