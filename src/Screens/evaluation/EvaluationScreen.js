import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'; // Import the hook from react-navigation

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

const EvaluationScreen = () => {
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
        }}>Evaluation</Text>
      </View>

      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <CustomButton
          title=" Workshop Evaluation"
        onPress={() => navigation.navigate('Workshop Evaluation')}
        />
        <CustomButton
          title="Booster Evaluation"
        onPress={() => navigation.navigate('Booster Evaluation')}
        />
        <CustomButton
          title="Feedback"
        onPress={() => navigation.navigate('Evaluation feedback')}
        />
      </View>
    </View>
  );
};

export default EvaluationScreen;
