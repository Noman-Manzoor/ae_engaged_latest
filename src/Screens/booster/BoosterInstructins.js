import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import NavigationButtons from '../../components/NavigationButtons';

const BoosterInstructins = ({ navigation }) => {
  const handleBackPress = () => {
    // Handle the back navigation logic
    navigation.navigate('Booster welcome');
  };

  const handleForwardPress = () => {
    // Handle the forward navigation logic
    navigation.navigate('Booster weekly Goals');
  };

  return (
    <>
      <ScrollView >
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16, backgroundColor: '#90b1c2' }}>
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

            <View style={{ flex: 1 }}>

              <Text style={{ fontSize: 9, backgroundColor: 'white', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 15, borderColor: '#ab713c', borderWidth: 1, textAlign: 'left' }}>
                Booster › Booster Workbook › Instructions
              </Text>
            </View>
          </View>
          <View >
            <Image
              source={require('../../../assets/images/booster_evaluation.png')}
              style={{ width: '100%', height: 158, marginBottom: 10 }}

            />
            <Text style={{ marginBottom: 10, marginLeft: 10, textAlign: 'center' }}>Booster Workbook: Welcome</Text>
            <View style={{ width: '100%', borderBottomColor: '#ab713c', borderBottomWidth: 1, marginBottom: 10 }} />
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10 }}>Instructions</Text>
            <View style={{ width: '20%', borderBottomColor: '#90b1c2', borderBottomWidth: 10, marginBottom: 10, marginLeft: 10 }} />

            <Text style={{ fontSize: 16, paddingLeft: 25, paddingRight: 20, }}>
              The Anxiously Engaged Booster is a set of
              reminders and structured opportunies to talk
              about your relationship over the next 5 weeks.{'\n'}
            </Text>
            <Text style={{ fontSize: 16, paddingLeft: 25, paddingRight: 20, }}>
              You can set a notification to remind yourselves
              to intentionally engage together for about 15
              minutes in one of our Booster lessons.{'\n'}
            </Text>
            <Text style={{ fontSize: 16, paddingLeft: 25, paddingRight: 20, }}>
              Like the Anxiously Engaged program you
              completed before or soon after your marriage,
              each week you will have a brief review of key
              principles, couple me, and a goal to work on
              together.
            </Text>
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 30, marginLeft: 10, marginTop: 20 }}></Text>



            {/* <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10, marginTop: 20 }}>Notes Section:</Text> */}

          </View>




        </View >
      </ScrollView>
      <NavigationButtons onBackPress={handleBackPress} onForwardPress={handleForwardPress} />

    </>
  );
};

export default BoosterInstructins;
