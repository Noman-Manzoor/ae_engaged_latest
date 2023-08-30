import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import NavigationButtons from '../../../../../components/NavigationButtons';
import { Ionicons } from '@expo/vector-icons';

const SexualExpectation = ({ navigation }) => {
    const handleBackPress = () => {
        // Handle the back navigation logic
        navigation.navigate('Lesson 3 SexualAnatomy');
    };

    const handleForwardPress = () => {
        // Handle the forward navigation logic
        navigation.navigate('Lesson 3 HollandQuote');
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
                            source={require('../../../../../../assets/images/logo2.png')}
                            style={{ width: 50, height: 50, borderRadius: 30, marginRight: 3, marginLeft: 5 }}
                        />
                        <View style={{ flex: 1 }}>

                            <Text style={{ fontSize: 10, backgroundColor: 'white', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 15, borderColor: '#ab713c', borderWidth: 1, textAlign: 'left' }}>
                                Workbook &gt; Lesson 3 &gt; Sexual Expectation
                            </Text>
                        </View>
                    </View>

                    {/* Content */}
                    <ScrollView contentContainerStyle={{ paddingBottom: 16 }}>
                        <Image
                            source={require('../../../../../../assets/images/lesson3_mental_prep.png')}
                            style={{ width: '100%', height: 158, marginBottom: 10 }}
                        />

                        <Text style={{ fontSize: 16, marginBottom: 10, textAlign: 'center' }}>Lesson 3: Becoming One Through Marital Sexuality</Text>
                        <View style={{ width: '100%', borderBottomColor: '#ab713c', borderBottomWidth: 1, marginBottom: 10 }} />
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10 }}>Sexual Expectation</Text>

                        <View style={{ width: '20%', borderBottomColor: '#90b1c2', borderBottomWidth: 10, marginBottom: 10, marginLeft: 10 }} />


                        {/* Additional Questions */}
                        <Image
                            source={require('../../../../../../assets/images/SexualityD.png')}
                            style={{ width: '100%', height: 500, borderRadius: 30, marginRight: 3, marginLeft: 5 }}

                        />
                        <View style={{ width: '50%', alignSelf: 'center', marginBottom: 20, marginTop: 40 }}>
                            {/* just to maintain design */}
                        </View>
                    </ScrollView>

                </View>
            </ScrollView>
            <NavigationButtons onBackPress={handleBackPress} onForwardPress={handleForwardPress} />
        </>
    );
};

export default SexualExpectation;
