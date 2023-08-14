import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import NavigationButtons from '../../../../../components/NavigationButtons';
import { Ionicons } from '@expo/vector-icons';

const Principles5 = ({ navigation }) => {
  const handleBackPress = () => {
    // Handle the back navigation logic
    navigation.navigate('Lesson 5 Resources');
  };

  const handleForwardPress = () => {
    // Handle the forward navigation logic
    navigation.navigate('Lesson 5 Goals');
  };

  return (
    <>
      <ScrollView>
        <View style={{ flex: 1 }}>
          <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16, backgroundColor: '#90b1c2' }}>
            {/* Back Arrow */}
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Ionicons name="ios-arrow-back" size={30} color="white" />
            </TouchableOpacity>

            <Image
             source={require('../../../../../../assets/images/logo.png')}
              style={{ width: 60, height: 60, borderRadius: 30, marginRight: 16, marginLeft: 5 }}
            />
            <View style={{ flex: 1 }}>
              <Text style={{ fontSize: 12, backgroundColor: 'white', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 15, borderColor: '#ab713c', borderWidth: 1, textAlign: 'center' }}>
                workshop &gt; Lesson 5 &gt; Principles
              </Text>
            </View>
          </View>

          {/* Content */}
          <ScrollView contentContainerStyle={{ padding: 16 }}>
          <Image
                         source={require('../../../../../../assets/images/lesson5.png')}
                            style={{ width: '100%', height: 150, marginBottom: 10 }}
                            resizeMode='contain'
                        />

            <Text style={{ fontSize: 16, marginBottom: 10, textAlign: 'center' }}>Lesson 5: Becoming One Through Growing Together</Text>
            <View style={{ width: '100%', borderBottomColor: '#ab713c', borderBottomWidth: 1, marginBottom: 10 }} />
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10 }}>Principles of Growing Together</Text>
            <View style={{ width: '20%', borderBottomColor: '#90b1c2', borderBottomWidth: 10, marginBottom: 10, marginLeft: 10 }} />

            {/* Investing */}
<Text style={{ fontSize: 16, marginLeft: 10, marginRight: 10, marginTop: 10, marginBottom: 10 }}>
  <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Investing:</Text>
  {'\n'}
  • Our marriages will naturally lose energy and unity over time unless we consistently and intentionally nurture them.{'\n'}
  • The nurturing we as spouses give to each other and our relationship.{'\n'}
  • As we invest time and energy in our marriage by following Goman’s "Magic Six Hours," our unity as a couple will increase.{'\n'}
</Text>
{/* Learning */}
<Text style={{ fontSize: 16, marginLeft: 10, marginRight: 10, marginTop: 10, marginBottom: 5 }}>
  <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Learning:</Text>
  {'\n'}
  • The nurturing others give to us as we reach out to those around us to continue to learn and grow.{'\n'}
  • Our marriages can become stronger as we learn from a marital support system that includes marriage mentors and other resources.{'\n'}
</Text>
{/* Serving */}
<Text style={{ fontSize: 16, marginLeft: 10, marginRight: 10, marginTop: 10, marginBottom: 30 }}>
  <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Serving:</Text>
  {'\n'}
  • The nurturing we as a couple give to others as we strengthen our unity by teaming up to be a force for good outside our marriage.{'\n'}
</Text>

          </ScrollView>
        </View>
      </ScrollView>
      <NavigationButtons onBackPress={handleBackPress} onForwardPress={handleForwardPress} />
    </>
  );
};

export default Principles5;
