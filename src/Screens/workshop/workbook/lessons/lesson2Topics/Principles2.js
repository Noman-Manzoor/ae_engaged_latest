import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import NavigationButtons from '../../../../../components/NavigationButtons';
import { Ionicons } from '@expo/vector-icons';

const Principles2 = ({ navigation }) => {
    const handleBackPress = () => {
        // Handle the back navigation logic
        navigation.navigate('Lesson 2 warn signs');
    };

    const handleForwardPress = () => {
        // Handle the forward navigation logic
        navigation.navigate('Lesson 2 goals');
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
            workshop &gt; Lesson 2 &gt; Principles
          </Text>
        </View>
      </View>
                    <View >
                    <Image
                         source={require('../../../../../../assets/images/lesson2_deep_learning.png')}
                            style={{ width: '100%', height: 158, marginBottom: 10 }}
                            resizeMode='contain'
                        />
                        <Text style={{ fontSize: 16, marginBottom: 10, textAlign: 'center' }}>Lesson 2: Becoming One Through Effecve Communicaon</Text>
                        <View style={{ width: '100%', borderBottomColor: '#ab713c', borderBottomWidth: 1, marginBottom: 10 }} />
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10 }}>Principles of Effective Communication
                        </Text>
                        <View style={{ width: '20%', borderBottomColor: '#90b1c2', borderBottomWidth: 10, marginBottom: 10, marginLeft: 10 }} />

                        <Text style={{ fontSize: 16, textAlign: 'center', fontWeight: '900', marginBottom: 10 }}>Soft Start
                        </Text>
                        <Text style={{ fontSize: 16, paddingLeft: 25, paddingRight: 20, }}>

                            {'\u2022'} Research shows that how a conflict starts
 is one of the greatest predictors of how
 the conflict will end – when we start hard,
 the conflict usually ends badly{"\n"}
                            {'\u2022'}  A hard start-up is an accusaon, an insult
 or an explosion. It almost always begins
 with the word “you” and is usually followed
 by “always” or “never.” It asserts a
 generalizaon about something, not the
 truth about it. (“You never pick up the kids
 from school. Why is it always my
 responsibility?”) {"\n"}
                            {'\u2022'}  A so start-up is usually quieter, it is more
 specific and is focused on “I”—what I
 experienced and how I felt{"\n"}
                        </Text>

                        <Text style={{ fontSize: 16, textAlign: 'center', fontWeight: '900', marginBottom: 10 }}>Avoid contempt
                        </Text>


                        <Text style={{ fontSize: 16, paddingLeft: 25, paddingRight: 20, }}>

                            {'\u2022'} Examples: eyerolling, name calling,
 atude of superiority and disgust{"\n"}
                            {'\u2022'}Contempt communicates that our
 partner isn’t even worth engaging—
 he/she is worthless. {"\n"}
 {'\u2022'} Contempt can lead to stonewalling
 (refusing to engage at all) which is toxic. {"\n"}

                        </Text>

                        <Text style={{ fontSize: 16, textAlign: 'center', fontWeight: '900', marginBottom: 10 }}>Time-outs
                        </Text>


                        <Text style={{ fontSize: 16, paddingLeft: 25, paddingRight: 20, }}>

                            {'\u2022'} You can only call a me-out for yourself,
 not your partner.{"\n"}
                            {'\u2022'}Ask for a specific amount of me –
 20-30 minutes – to calm down. {"\n"}
 {'\u2022'} Separate and calm yourself down
 physiologically and psychologically.  {"\n"}

                        </Text>
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10, marginTop: 20 }}>Notes Section:</Text>

                    </View>
                </View >
            </ScrollView>
            <NavigationButtons onBackPress={handleBackPress} onForwardPress={handleForwardPress} />
        </>
    );
};

export default Principles2;
