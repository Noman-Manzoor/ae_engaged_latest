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
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#707070' }}>
                    {lessonNumber.trim() + " : "}
                </Text>
            )}

            {/* Lesson Content */}
            <View style={{ flex: 1, justifyContent: 'center' }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#707070', textAlign: 'left' }}>
                    {lessonContent.trim()}
                </Text>
            </View>
        </TouchableOpacity>
    );
};


const Lesson2 = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#90b1c2' }}>
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
                <View style={{ flex: 1 }}>

                    <Text style={{ color: '#707070', fontSize: 10, backgroundColor: 'white', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 15, borderColor: '#ab713c', borderWidth: 1 }}>
                        Workshop &gt; Workbook &gt; Lesson 2
                    </Text>
                </View>
            </View>
            <View style={{ flex: 1, paddingTop: 25, alignItems: 'center' }}>

                <CustomButton
                    title="Couple Time: Deep Listening"
                    onPress={() => navigation.navigate('Lesson 2 deep listening')}
                />
                <CustomButton
                    title="Couple Time: Soft Starts"
                    onPress={() => navigation.navigate('Lesson 2 soft start')}
                />
                <CustomButton
                    title="Relationship Warning Signs"
                    onPress={() => navigation.navigate('Lesson 2 warn signs')}
                />
                <CustomButton
                    title="Principles: Communication"
                    onPress={() => navigation.navigate('Lesson 2 principles')}
                />
                <CustomButton
                    title="Goals: Communication"
                    onPress={() => navigation.navigate('Lesson 2 goals')}
                />
            </View>
        </View>
    );
};

export default Lesson2;
