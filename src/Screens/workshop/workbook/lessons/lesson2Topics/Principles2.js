import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import NavigationButtons from '../../../../../components/NavigationButtons';
import { Ionicons } from '@expo/vector-icons';

const Principles2 = ({ navigation }) => {
    const handleBackPress = () => {
        // Handle the back navigation logic
        navigation.navigate('Lesson 2 Topics');
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

                        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                            <Image
                                source={require('../../../../../../assets/images/logo2.png')}
                                style={{ width: 50, height: 50, borderRadius: 80, marginLeft: 5, marginRight: 5 }}
                            />
                        </TouchableOpacity>
                        <View style={{ flex: 1 }}>

                            <Text style={{
                                color: '#707070', fontSize: 12, backgroundColor: 'white', paddingVertical: 5, paddingHorizontal: 10,
                                borderRadius: 15, borderColor: '#ab713c', borderWidth: 1, textAlign: 'left'
                            }}>
                                Workbook &gt; Lesson 2 &gt; Principles
                            </Text>
                        </View>
                    </View>
                    <View >
                        <Image
                            source={require('../../../../../../assets/images/lesson2_deep_learning.png')}
                            style={{ width: '100%', height: 158, marginBottom: 10 }}
                        />
                        <Text style={{ fontSize: 16, marginBottom: 10, textAlign: 'center', color: '#707070' }}>Lesson 2: Becoming One Through Effecve Communicaon</Text>
                        <View style={{ width: '100%', borderBottomColor: '#ab713c', borderBottomWidth: 1, marginBottom: 10 }} />
                        <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10 }}>Principles of Effective Communication
                        </Text>
                        <View style={{ width: '20%', borderBottomColor: '#90b1c2', borderBottomWidth: 10, marginBottom: 10, marginLeft: 10 }} />

                        <Text style={{ fontSize: 16, textAlign: 'center', fontWeight: '900', marginBottom: 10 }}>Stay on the same team
                        </Text>


                        <Text style={{ fontSize: 16, paddingLeft: 25, paddingRight: 20, }}>

                            {'\u2022'} Keep the problem causing the conflict outside of the relationship, work together to solve the conflict by prioritizing “we” over “me” and practicing selflessness. It is the two of you two against the conflict.{"\n"}


                        </Text>

                        <Text style={{ fontSize: 16, textAlign: 'center', fontWeight: '900', marginBottom: 10 }}>Be courageous and considerate
                        </Text>


                        <Text style={{ fontSize: 16, paddingLeft: 25, paddingRight: 20, }}>

                            {'\u2022'} It is important that our partner understands how we feel; it doesn’t help to hide things.{"\n"}

                            {'\u2022'} Honor the greatness in your spouse, share concerns in a way that respects that greatness.{"\n"}

                            {'\u2022'} Trust that your partner can handle your honest and authentic self.{"\n"}
                            {'\u2022'} Remember: this doesn’t mean you have license to blurt out hurtful words or do hurtful things under the guise of authenticity.{"\n"}
                        </Text>



                        <Text style={{ fontSize: 16, textAlign: 'center', fontWeight: '900', marginBottom: 10 }}>Soft Start
                        </Text>
                        <Text style={{ fontSize: 16, paddingLeft: 25, paddingRight: 20, }}>

                            {'\u2022'} Research shows that how a conflict starts
                            is one of the greatest predictors of how
                            the conflict will end – when we start hard,
                            the conflict usually ends badly{"\n"}
                            {'\u2022'}  A hard start-up is an accusation, an insult
                            or an explosion. It almost always begins
                            with the word “you” and is usually followed
                            by “always” or “never.” It asserts a
                            generaliztiaon about something, not the
                            truth about it. (“You never pick up the kids
                            from school. Why is it always my
                            responsibility?”) {"\n"}
                            {'\u2022'}  A so start-up is usually quieter, it is more
                            specific and is focused on “I”—what I
                            experienced and how I felt It invites a solution instead of just complaining about the problem. (“I feel exhausted. Could you pick up the kids from school today?”){"\n"}
                            {'\u2022'} Whether we are responding to a hard or soft startup, we can choose a soft response—validating feelings instead of escalating emotional intensity with counter attacks, and working toward solutions without defensiveness.{"\n"}
                        </Text>

                        <Text style={{ fontSize: 16, textAlign: 'center', fontWeight: '900', marginBottom: 10 }}>Avoid contempt
                        </Text>


                        <Text style={{ fontSize: 16, paddingLeft: 25, paddingRight: 20, }}>

                            {'\u2022'} Examples: eyerolling, name calling,
                            attitude of superiority and disgust{"\n"}
                            {'\u2022'} Contempt communicates that our
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

                            {'\u2022'} When you feel rational, re-engage and employ your best communication skills.{"\n"}
                            {'\u2022'} Remind each other that you are on the same team.{"\n"}
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
