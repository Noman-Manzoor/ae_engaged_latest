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

const Lesson5 = ({ navigation }) => {
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
          Workshop &gt; Workbook &gt; Lesson5
          </Text>
        </View>
      </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

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
