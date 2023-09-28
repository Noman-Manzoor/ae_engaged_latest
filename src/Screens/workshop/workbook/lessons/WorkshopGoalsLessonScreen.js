import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
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


const WorkshopGoalsLessonScreen = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#90b1c2' }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16, backgroundColor: '#90b1c2' }}>
                    {/* Back Arrow */}
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Ionicons name="ios-arrow-back" size={30} color="white" />
                    </TouchableOpacity>

                    <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                        <Image
                            source={require('../../../../../assets/images/logo2.png')}
                            style={{ width: 50, height: 50, borderRadius: 80, marginLeft: 5, marginRight: 5 }}
                        />
                    </TouchableOpacity>
                    <View >

                        {/* <Text style={{ fontSize: 12, backgroundColor: 'white', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 15, borderColor: '#ab713c', borderWidth: 1 }}>
                        </Text> */}

                        <Text style={{
                            fontSize: 15, borderRadius: 40, backgroundColor: 'white', width: "100%", paddingLeft: 10, paddingEnd: 70, borderColor: '#ab713c',
                            borderWidth: 1, color: '#707070'
                        }}>Workshop &gt; Goals
                        </Text>
                    </View>
                </View>

                <View style={{ paddingTop: 25, alignItems: 'center' }}>

                    {/* <CustomButton
                    title="Welcome: How to Your Guide"
                // onPress={() => navigation.navigate('Screen1')}
                /> */}
                    {/* <CustomButton
                        title={`Welcome : Your How to Guide`}
                        onPress={() => navigation.navigate('welcome Work Book')}
                    /> */}
                    <CustomButton
                        title={`Goal 1 : Becoming one in Marriage`}
                        onPress={() => navigation.navigate('Lesson 1 Topics')}
                    />

                    <CustomButton
                        title={`Goal 2: Becoming One Through Effective Communication`}
                        onPress={() => navigation.navigate('Lesson 2 Topics')}
                    />
                    <CustomButton
                        title={`Goal 3: Becoming One Through Marital Sexuality`}
                        onPress={() => navigation.navigate('Lesson 3 Topics')}
                    />
                    <CustomButton
                        title={`Goal 4: Becoming One Through
Equal Partnership &
Complete Commitment`}
                        onPress={() => navigation.navigate('Lesson 4 Topics')}
                    />
                    <CustomButton
                        title={`Goal 5: Becoming One Through
Growing Together
`}
                        onPress={() => navigation.navigate('Lesson 5 Topics')}
                    />
                </View>
            </ScrollView>
        </View>
    );
};

export default WorkshopGoalsLessonScreen;
