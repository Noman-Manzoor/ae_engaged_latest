import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const CustomButton = ({ title, onPress }) => {
    // Splitting the title to separate the lesson number and content
    const [lessonNumber, lessonContent] = title.split(':');

    return (
        <TouchableOpacity
            style={{
                width: '95%',
                borderRadius: 16,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 20,
                borderColor: '#ab713c',
                borderWidth: 1,
                color: '#707070',
                paddingTop: 15,
                paddingBottom: 15,
                flexDirection: 'row', // Adding flexDirection to structure the texts side by side
                paddingLeft: 20,
                paddingRight: 5
            }}
            onPress={onPress}
        >
            {/* Lesson Number */}
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#707070' }}>{lessonNumber.trim() + " : "}</Text>

            {/* Lesson Content */}
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#707070', textAlign: 'left' }}>{lessonContent.trim()}</Text>
            </View>
        </TouchableOpacity>
    );
};

const BoosterGoalsWithoutWelcome = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#90b1c2' }}>
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

                    <Text style={{ fontSize: 12, backgroundColor: 'white', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 15, borderColor: '#ab713c', borderWidth: 1, color: '#707070' }}>
                        Booster &gt; Weekly Goals
                    </Text>
                </View>
            </View>

            <View style={{ flex: 1, paddingTop: 25, alignItems: 'center' }}>
                {/* <CustomButton
                    title={`Welcome: Booster Workbook`}
                    onPress={() => navigation.navigate('Booster welcome')}
                /> */}
                <CustomButton
                    title={`Lesson 1 : Becoming one in Marriage`}
                    onPress={() => navigation.navigate('Booster Lesson1 Topics')}
                />
                <CustomButton
                    title={`Lesson 2: Becoming One Through Effective Communication`}
                    onPress={() => navigation.navigate('Booster Lesson2 Topics')}
                />
                <CustomButton
                    title={`Lesson 3: Becoming One Through Marital Sexuality`}
                    onPress={() => navigation.navigate('Booster Lesson3 Topics')}
                />
                <CustomButton
                    title={`Lesson 4: Becoming One Through
Equal Partnership &
Complete Commitment`}
                    onPress={() => navigation.navigate('Booster Lesson4 Topics')}
                />
                <CustomButton
                    title={`Lesson 5: Becoming One Through
Growing Together
`}
                    onPress={() => navigation.navigate('Booster Lesson5 Topics')}
                />
            </View>
        </View>
    );
};

export default BoosterGoalsWithoutWelcome;
