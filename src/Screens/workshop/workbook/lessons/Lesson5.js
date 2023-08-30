import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CustomButton = ({ title, onPress }) => {
    let lessonNumber, lessonContent;

    // Check if the title contains a colon
    if (title.includes(':')) {
        // Splitting the title to separate the lesson number and content
        [lessonNumber, lessonContent] = title.split(':');
    } else {
        lessonNumber = "";
        lessonContent = title;
    }

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
                flexDirection: 'row',
                paddingLeft: 45,
                paddingRight: 5
            }}
            onPress={onPress}
        >
            {lessonNumber && (
                // Display the lesson number only if it exists
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#707070' }}>
                    {lessonNumber.trim() + " : "}
                </Text>
            )}

            {/* Lesson Content */}
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={{ fontSize: 18, fontWeight: 'bold', color: '#707070', textAlign: 'left' }}>
                    {lessonContent.trim()}
                </Text>
            </View>
        </TouchableOpacity>
    );
};


const Lesson5 = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#90b1c2' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16, backgroundColor: '#90b1c2' }}>
                {/* Back Arrow */}
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="ios-arrow-back" size={30} color="white" />
                </TouchableOpacity>

                <Image
                    source={require('../../../../../assets/images/logo2.png')}
                    style={{ width: 50, height: 50, borderRadius: 30, marginRight: 3, marginLeft: 5 }}
                />
                <View style={{ flex: 1 }}>

                    <Text style={{ color: '#707070', fontSize: 12, backgroundColor: 'white', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 15, borderColor: '#ab713c', borderWidth: 1 }}>
                        Workshop &gt; Workbook &gt; Lesson 5
                    </Text>
                </View>
            </View>
            <View style={{ flex: 1, paddingTop: 25, alignItems: 'center' }}>

                <CustomButton
                    title="Couple Time: Magic 6 Hours"
                    onPress={() => navigation.navigate('Lesson 5 Magic6Hour')}
                />
                <CustomButton
                    title="Couple Time: Marital Support"
                    onPress={() => navigation.navigate('Lesson 5 MaritalSupport')}
                />
                <CustomButton
                    title="Couple Time: Serving"
                    onPress={() => navigation.navigate('Lesson 5 Serving')}
                />
                <CustomButton
                    title="Choosing a Marriage Therapist"
                    onPress={() => navigation.navigate('Lesson 5 Therapist')}
                />
                <CustomButton
                    title="Resources: Strengthen Marriages"
                    onPress={() => navigation.navigate('Lesson 5 Resources')}
                />
                <CustomButton
                    title="Principles: Growing Together"
                    onPress={() => navigation.navigate('Lesson 5 Principles')}
                />
                <CustomButton
                    title="Growing Together Goals"
                    onPress={() => navigation.navigate('Lesson 5 Goals')}
                />
            </View>
        </View>
    );
};

export default Lesson5;
