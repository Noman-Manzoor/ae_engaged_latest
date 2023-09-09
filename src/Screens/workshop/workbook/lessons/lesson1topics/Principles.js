import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import NavigationButtons from './../../../../../components/NavigationButtons';
import { Ionicons } from '@expo/vector-icons';

const Principles = ({ navigation }) => {
    const handleBackPress = () => {
        // Handle the back navigation logic
        navigation.navigate('Lesson 2 warn signs');
    };

    const handleForwardPress = () => {
        // Handle the forward navigation logic
        navigation.navigate('Lesson 1 Topic Goals');
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
                                source={require('../../../../../../assets/images/logo2.png')}
                                style={{ width: 50, height: 50, borderRadius: 80, marginLeft: 5, marginRight: 5 }}
                            />
                        </TouchableOpacity>
                        <View style={{ flex: 1 }}>

                            <Text style={{ fontSize: 12, backgroundColor: 'white', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 15, borderColor: '#ab713c', borderWidth: 1, textAlign: 'center' }}>
                                Workbook &gt; Lesson 1 &gt; Principles
                            </Text>
                        </View>
                    </View>
                    <View >
                        <Image
                            source={require('../../../../../../assets/images/workbook_les1_ct_ciardi_poem.png')}
                            style={{ width: '100%', height: 158, marginBottom: 10 }}
                        />
                        <Text style={{ fontSize: 16, marginBottom: 10, textAlign: 'center' }}>Lesson 1: Becoming One in Marriage</Text>
                        <View style={{ width: '100%', borderBottomColor: '#ab713c', borderBottomWidth: 1, marginBottom: 10 }} />
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10 }}>Principles of Becoming One in Marriage
                        </Text>
                        <View style={{ width: '20%', borderBottomColor: '#90b1c2', borderBottomWidth: 10, marginBottom: 10, marginLeft: 10 }} />

                        <Text style={{ fontSize: 16, textAlign: 'center', fontWeight: '900', marginBottom: 10 }}>Cleaving
                        </Text>
                        <Text style={{ fontSize: 16, paddingLeft: 25, paddingRight: 20, }}>

                            {'\u2022'} We are taught in the scriptures to "cleave" to our spouse.{"\n"}
                            {'\u2022'} Cleaving means being actively and completely devoted to our spouse.{"\n"}
                        </Text>

                        <Text style={{ fontSize: 16, textAlign: 'center', fontWeight: '900', marginBottom: 10 }}>Spousal Pre-eminence
                        </Text>


                        <Text style={{ fontSize: 16, paddingLeft: 25, paddingRight: 20, }}>

                            {'\u2022'} Spousal pre-eminence is an element of cleaving.{"\n"}
                            {'\u2022'} This means we put our relationship with our spouse before all other relationships in our life.{"\n"}
                            {'\u2022'} This means we put our relationship with our spouse before all other relationships in our life.{"\n"}
                            {'\u2022'} This is especially important in the first few years of a new marriage as we are establishing patterns for the way we interact with not only our spouse but the other people in our lives.{"\n"}
                        </Text>

                        <Text style={{ fontSize: 16, textAlign: 'center', fontWeight: '900', marginBottom: 10 }}>The Invisible Fence
                        </Text>
                        <Text style={{ fontSize: 16, paddingLeft: 25, paddingRight: 20, }}>

                            {'\u2022'} One of the ways we can safeguard the
                            trust in our marriage is by creang a
                            boundary (“invisible fence”) around the
                            sacred ground of married life.{"\n"}
                            {'\u2022'}  Loyalty is the foundaon of the invisible
                            fence{"\n"}
                            {'\u2022'}  We should discuss as a couple what we
                            want to keep inside the fence.{"\n"}
                        </Text>

                        <Text style={{ fontSize: 16, textAlign: 'center', fontWeight: '900', marginBottom: 10 }}>Priorizing We Over Me
                        </Text>


                        <Text style={{ fontSize: 16, paddingLeft: 25, paddingRight: 20, }}>

                            {'\u2022'} Moving from “me” to “we” can
                            be an adjustment.{"\n"}
                            {'\u2022'}  This change in thinking usually takes
                            intenonal selflessness and sacrifice,
                            and it takes practice.{"\n"}
                        </Text>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10, marginTop: 20 }}>Notes Section:</Text>

                    </View>
                </View >
            </ScrollView>
            <NavigationButtons onBackPress={handleBackPress} onForwardPress={handleForwardPress} />
        </>
    );
};

export default Principles;
