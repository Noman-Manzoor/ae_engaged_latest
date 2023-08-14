import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const CustomButton = ({ title, onPress }) => {
    return (
        <TouchableOpacity
            style={{
                width: '90%',
                // height: 50,
                borderRadius: 40,
                backgroundColor: 'white',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 20,
                borderColor: '#ab713c',
                borderWidth: 1,
                paddingTop: 10,
                paddingBottom: 10
            }}
            onPress={onPress}
        >
            <Text style={{ fontSize: 18, fontWeight: 'bold', textAlign: 'center' }}>{title}</Text>
        </TouchableOpacity>
    );
};

const WorkbookLessonsScreens = ({ navigation }) => {
    return (
        <View style={{ flex: 1, backgroundColor: '#90b1c2' }}>
               <View style={{ flexDirection: 'row', alignItems: 'center', padding: 16, backgroundColor: '#90b1c2' }}>
        {/* Back Arrow */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="ios-arrow-back" size={30} color="white" />
        </TouchableOpacity>

        <Image
     source={require('../../../../../assets/images/logo.png')}
          style={{ width: 60, height: 60, borderRadius: 30, marginRight: 16 , marginLeft:5}}
        />
        <View style={{ flex: 1 }}>
        
          <Text style={{ fontSize: 12, backgroundColor: 'white', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 15, borderColor: '#ab713c', borderWidth: 1 }}>
          Workshop &gt; Workbook &gt; Lessons
          </Text>
        </View>
      </View>
       
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

                {/* <CustomButton
                    title="Welcome: How to Your Guide"
                // onPress={() => navigation.navigate('Screen1')}
                /> */}
                <CustomButton
                    title="Becoming one in Marriage"
                    onPress={() => navigation.navigate('Lesson 1 Topics')}
                />
                <CustomButton
                    title="Becoming One Through Effective Communication"
                    onPress={() => navigation.navigate('Lesson 2 Topics')}
                />
                <CustomButton
                    title="Becoming One Through Marital Sexuality"
                    onPress={() => navigation.navigate('Lesson 3 Topics')}
                />
                <CustomButton
                    title="Becoming One Through
Equal Partnership &
Complete Commitment"
                    onPress={() => navigation.navigate('Lesson 4 Topics')}
                />
                <CustomButton
                    title="Becoming One Through
Growing Together
"
                    onPress={() => navigation.navigate('Lesson 5 Topics')}
                />
            </View>
        </View>
    );
};

export default WorkbookLessonsScreens;
