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

const Lesson2 = ({ navigation }) => {
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
          Workshop &gt; Workbook &gt; Lesson2
          </Text>
        </View>
      </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

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
