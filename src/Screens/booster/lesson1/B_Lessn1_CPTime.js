import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const B_Lessn1_CPTime = ({ navigation }) => {
  const handleBackPress = () => {
    // Handle the back navigation logic
    navigation.navigate('Booster Lesson1 Topics');
  };

  const handleForwardPress = () => {
    // Handle the forward navigation logic
    navigation.navigate('Lesson 1 Topic CT_CiardiPoem2');
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

        <Image
         source={require('../../../../assets/images/logo.png')}
          style={{ width: 60, height: 60, borderRadius: 30, marginRight: 16, marginLeft: 5 }}
        />
        <View style={{ flex: 1 }}>

          <Text style={{ fontSize: 12, backgroundColor: 'white', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 15, borderColor: '#ab713c', borderWidth: 1, textAlign: 'center' }}>
          Booster Workbook &gt; Lesson 1 &gt; Couple Time
          </Text>
        </View>
      </View>
                    <View >
                        <Image
                         source={require('../../../../assets/images/workbook_les1_ct_ciardi_poem.png')}
                            style={{ width: '100%', height: 158, marginBottom: 10 }}
                            resizeMode='contain'
                        />
                        <Text style={{ fontSize: 16, marginBottom: 10, textAlign: 'center' }}>Lesson 1: Becoming One in Marriage</Text>
                        <View style={{ width: '100%', borderBottomColor: '#ab713c', borderBottomWidth: 1, marginBottom: 10 }} />
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10 }}>Couple Time</Text>
                        <View style={{ width: '20%', borderBottomColor: '#90b1c2', borderBottomWidth: 10, marginBottom: 10, marginLeft: 10 }} />

                        <Text style={{ fontSize: 16, textAlign: 'center', fontWeight: '900', marginBottom: 10 }}>Discussion Questions:
                </Text>
                <Text style={{ fontSize: 16, paddingLeft: 25, paddingRight: 20 }}>Take 10-15 minutes to discuss these quesons together. {"\n"}
                </Text>
                <Text style={{ fontSize: 16, paddingLeft: 25, paddingRight: 20, }}>
                    {'\u2022'} Becoming one can be a long journey. How have you
 felt your Heavenly Parents’ help in your marriage thus
 far? (See 1 Nephi 3:7){"\n"}
 {'\u2022'} How are you as a couple doing with “leaning/falling in”?{"\n"}
                    {'\u2022'} Now that you have been married, how do you feel like
 you’re doing with keeping things inside the “invisible
 fence”? How could you do beer? 
                </Text>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 30, marginLeft: 10, marginTop: 20 }}></Text>


                        
                        {/* <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10, marginTop: 20 }}>Notes Section:</Text> */}

                    </View>




                </View >
            </ScrollView>
            {/* <NavigationButtons onBackPress={handleBackPress} onForwardPress={handleForwardPress} /> */}
        
    </>  
  );
};

export default B_Lessn1_CPTime;
