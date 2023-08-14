import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const B_Lesson3_Principle = ({ navigation }) => {
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
          Booster Workbook &gt; Lesson 3 &gt; Principle
          </Text>
        </View>
      </View>
                    <View >
                        <Image
                         source={require('../../../../assets/images/lesson3_mental_prep.png')}
                            style={{ width: '100%', height: 158, marginBottom: 10 }}
                            resizeMode='contain'
                        />
                        <Text style={{ fontSize: 16, marginBottom: 10, textAlign: 'center' }}>Lesson 3: Becoming One Through Marital Sexuality</Text>
                        <View style={{ width: '100%', borderBottomColor: '#ab713c', borderBottomWidth: 1, marginBottom: 10 }} />
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10 }}>Principle</Text>
                        <View style={{ width: '20%', borderBottomColor: '#90b1c2', borderBottomWidth: 10, marginBottom: 10, marginLeft: 10 }} />

                        <Text style={{ fontSize: 16, paddingLeft: 25, paddingRight: 20, }}>
                        Elder Packer counseled, “We do not, in our
counseling, enter the bedrooms of members
of the church.”* This leaves sexual decision
making between husband and wife and God.
You need to be wise stewards and use your
agency to make choices about what you will
and will not do in your sexual relaonship.
Being able to discuss and communicate about
all aspects of your sexual relaonship
(mental, emoonal, physical, spiritual) with
your spouse can greatly increase your sexual
sasfacon and help you become one. 
                        </Text>

                        <Text style={{ fontSize: 16, paddingLeft: 25, paddingRight: 20, }}>
                        In marriage, you should be having frequent
conversaons about your sexual relaonship.
Both spouses need to be clearly speaking.
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

export default B_Lesson3_Principle;
