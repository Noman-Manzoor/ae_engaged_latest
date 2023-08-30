import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import NavigationButtons from '../../components/NavigationButtons';
import { Ionicons } from '@expo/vector-icons';

const BoosterEvalution = ({ navigation }) => {
  const handleBackPress = () => {
    // Handle the back navigation logic
    navigation.navigate('Workshop Evaluation');
  };

  const handleForwardPress = () => {
    // Handle the forward navigation logic
    navigation.navigate('Evaluation feedback');
  };

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={{ flexGrow: 1, paddingBottom: 26 }}>

        <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16, backgroundColor: '#90b1c2' }}>
          {/* Back Arrow */}
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Ionicons name="ios-arrow-back" size={30} color="white" />
          </TouchableOpacity>

          <Image
            source={require('../../../assets/images/logo2.png')}
            style={{ width: 50, height: 50, borderRadius: 30, marginRight: 3, marginLeft: 5 }}
          />
          <View style={{ flex: 1 }}>
            <Text style={{ color: '#707070', fontSize: 12, backgroundColor: 'white', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 15, borderColor: '#ab713c', borderWidth: 1, textAlign: 'left' }}>
              Booster &gt; Evaluation
            </Text>
          </View>
        </View>

        {/* Content */}
        <Image
          source={require('../../../assets/images/booster_welcome.png')}
          style={{ width: '100%', height: 200, marginBottom: 10 }}
        />

        <View style={{ width: '100%', borderBottomColor: '#ab713c', borderBottomWidth: 1, marginBottom: 10, marginTop: 25 }} />
        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10, color: '#707070' }}>Evaluation</Text>
        <View style={{ width: '20%', borderBottomColor: '#90b1c2', borderBottomWidth: 10, marginBottom: 10, marginLeft: 10 }} />

        <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 10, marginTop: 20, marginBottom: 10, textAlign: "center", paddingLeft: 25, paddingRight: 25 }}>
          Thank you for participating in our
          Anxiously Engaged Booster! {"\n"}
          We hope that it has helped you continue
          forward to becoming one in your
          marriage.
        </Text>

        <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 10, marginTop: 20, marginBottom: 50, textAlign: "center", paddingLeft: 20, paddingRight: 20 }}>
          Please fill out the following evaluation to
          help us continue to improve our program.
          It should take about 10 minutes to
          complete. We really appreciate your
          feedback!
        </Text>



        {/* Button */}
        <TouchableOpacity
          style={{


            width: '80%',
            height: 50,
            borderRadius: 19,
            marginLeft: 25,

            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            marginBottom: 20,
            borderColor: '#ab713c',
            borderWidth: 1,
            color: '#707070'
          }}
          onPress={() => console.log("Button pressed!")} // Replace with your function to handle button press
        >
          <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#707070' }}>Start Evaluation</Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 10, marginTop: 10, marginBottom: 20, textAlign: "center" }}>

        </Text>

      </ScrollView>
      <NavigationButtons onBackPress={handleBackPress} onForwardPress={handleForwardPress} />
    </View>
  );
};

export default BoosterEvalution;
