import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const CustomButton = ({ title, onPress }) => {
    // Check if title contains a colon
    const hasColon = title.includes(':');

    // Splitting the title to separate the lesson number and content
    const [lessonNumber, lessonContent] = hasColon ? title.split(':') : [title, ""];

    return (
        <TouchableOpacity
            style={{
                width: '90%',
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
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#707070' }}>
                {lessonNumber.trim() + (hasColon ? " : " : "")}
            </Text>

            {/* Lesson Content */}
            {hasColon && (
                <View style={{ flex: 1, justifyContent: 'center' }}>
                    <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#707070', textAlign: 'left' }}>
                        {lessonContent.trim()}
                    </Text>
                </View>
            )}
        </TouchableOpacity>
    );
};

const BoosterLesson1Topics = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#90b1c2' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16, backgroundColor: '#90b1c2' }}>
                {/* Back Arrow */}
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <Ionicons name="ios-arrow-back" size={30} color="white" />
                </TouchableOpacity>

                <Image
                    source={require('../../../../assets/images/logo2.png')}
                    style={{ width: 50, height: 50, borderRadius: 30, marginRight: 3, marginLeft: 5 }}
                />
                <View style={{ flex: 1 }}>

                    <Text style={{ fontSize: 9, backgroundColor: 'white', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 15, borderColor: '#ab713c', borderWidth: 1 }}>
                        Booster &gt; Booster Workbook &gt; Lesson1
                    </Text>
                </View>
            </View>

            <View style={{ flex: 1, paddingTop: 25, alignItems: 'center' }}>
                <CustomButton
                    title="Principle"
                    onPress={() => navigation.navigate('Booster Lesson1 principle')}
                />
                <CustomButton
                    title="Couple Time "
                    onPress={() => navigation.navigate('Booster Lesson1 CP_Time')}
                />
                <CustomButton
                    title="Goals"
                    onPress={() => navigation.navigate('Booster Lesson1 Goals')}
                />
            </View>
        </View>
    );
};

export default BoosterLesson1Topics;
