import React from 'react';
import { View, Text, Image, ScrollView,TouchableOpacity } from 'react-native';
import NavigationButtons from './../../../../../components/NavigationButtons';
import { Ionicons } from '@expo/vector-icons';



const CT_WeOverMe = ({ navigation }) => {
    const handleBackPress = () => {
        // Handle the back navigation logic
        navigation.navigate('Lesson 1 Topic CT_CiardiPoem2');
    };

    const handleForwardPress = () => {
        // Handle the forward navigation logic
        navigation.navigate('Lesson 1 Topic Principles');
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
          source={require('../../../../../../assets/images/logo.png')}
          style={{ width: 60, height: 60, borderRadius: 30, marginRight: 16, marginLeft: 5 }}
        />
        <View style={{ flex: 1 }}>

          <Text style={{ fontSize: 12, backgroundColor: 'white', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 15, borderColor: '#ab713c', borderWidth: 1, textAlign: 'center' }}>
            workshop &gt; Lesson 1 &gt; CT: We Over Me
          </Text>
        </View>
      </View>
                    <View >
                    <Image
                         source={require('../../../../../../assets/images/workbook_les1_ct_ciardi_poem.png')}
                            style={{ width: '100%', height: 158, marginBottom: 10 }}
                            resizeMode='contain'
                        />
                        <Text style={{ fontSize: 16, marginBottom: 10, textAlign: 'center' }}>Lesson 1: Becoming One in Marriage</Text>
                        <View style={{ width: '100%', borderBottomColor: '#ab713c', borderBottomWidth: 1, marginBottom: 10 }} />
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10 }}>Couple Time: We Over Me</Text>
                        <View style={{ width: '20%', borderBottomColor: '#90b1c2', borderBottomWidth: 10, marginBottom: 10, marginLeft: 10 }} />

                        <Text style={{ fontSize: 16, textAlign: 'center', fontWeight: '900', marginBottom: 10 }}>Discussion Questions:
                        </Text>
                        <Text style={{ fontSize: 16, paddingLeft: 25, paddingRight: 20, }}>

                            {'\u2022'}  What struggles do I have with priorizing
                            we over me?{"\n"}
                            {'\u2022'}  How am I effecve at priorizing we over me?{"\n"}
                            {'\u2022'}  What are some of the benefits of thinking of
                            we over me?{"\n"}
                            {'\u2022'}  What parts of our relaonship should we make
                            sure to protect with the “invisible fence?”{"\n"}
                            {'\u2022'}  What is one thing that I can do this week that will
                            help give greater priority to “we?”{"\n"}
                        </Text>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10, marginTop: 20 }}>Notes Section:</Text>


                        <Text style={{ fontSize: 16, paddingLeft: 25, paddingRight: 20, }}>

                            {'\u2022'}  What struggles do I have with priorizing
                            we over me?{"\n"}
                            {'\u2022'}  How am I effecve at priorizing we over me?{"\n"}
                            {'\u2022'}  What are some of the benefits of thinking of
                            we over me?{"\n"}
                            {'\u2022'}  What parts of our relaonship should we make
                            sure to protect with the “invisible fence?”{"\n"}
                            {'\u2022'}  What is one thing that I can do this week that will
                            help give greater priority to “we?”{"\n"}
                        </Text>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10, marginTop: 20 }}>Notes Section:</Text>

                    </View>




                </View >
            </ScrollView>
            <NavigationButtons onBackPress={handleBackPress} onForwardPress={handleForwardPress} />
        </>
    );
};

export default CT_WeOverMe;
