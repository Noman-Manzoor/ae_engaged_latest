import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import NavigationButtons from '../../../../../components/NavigationButtons';
import { Ionicons } from '@expo/vector-icons';

const EqualPartnership = ({ navigation }) => {
  const handleBackPress = () => {
    // Handle the back navigation logic
    navigation.navigate('Lesson4');
  };

  const handleForwardPress = () => {
    // Handle the forward navigation logic
    navigation.navigate('Lesson 4 Principles');
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
                workshop &gt; Lesson 4 &gt; Divorce 
              </Text>
            </View>
          </View>

          {/* Content */}
          <ScrollView contentContainerStyle={{ padding: 16 }}>
          <Image
                         source={require('../../../../../../assets/images/lesson4.png')}
                            style={{ width: '100%', height: 140, marginBottom: 10 }}
                            resizeMode='contain'
                        />

            <Text style={{ fontSize: 16, marginBottom: 10, textAlign: 'center' }}>Lesson 4: Becoming One Through Equal Partnership & Complete Commitment</Text>
            <View style={{ width: '100%', borderBottomColor: '#ab713c', borderBottomWidth: 1, marginBottom: 10 }} />
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10 }}>Couple Time: Divorce Philosophy</Text>
            <View style={{ width: '20%', borderBottomColor: '#90b1c2', borderBottomWidth: 10, marginBottom: 10, marginLeft: 10 }} />

            <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 10, marginTop: 10, marginBottom: 30 }}>
  When two people get married, they usually aren’t thinking that the marriage will end in divorce. But then hard times arise and sometimes they find themselves thinking either casually or seriously about divorce. However, most people haven’t really thought carefully about their philosophy of divorce. When is it justified? How hard and how long should people try to work things out? This exercise invites you to think more intentionally about these kinds of questions and share them with your partner.
</Text>

<Text style={{ fontSize: 16, marginLeft: 10, marginRight: 10, marginBottom: 10 }}>
  Instrucons: Thinking about marriage and divorce in general (not your marriage specifically), answer the following 8 questions one at a time as honestly as you can for yourself and then share your answer with your partner. Then go on to the next question.
</Text>
<Text style={{ fontSize: 16, marginLeft: 10, marginRight: 10, marginBottom: 10 }}>
  1. What circumstances do you think could justify divorce?
</Text>
<Text style={{ fontSize: 16, marginLeft: 10, marginRight: 10, marginBottom: 10 }}>
  2. What circumstances do you think do not justify divorce?
</Text>
<Text style={{ fontSize: 16, marginLeft: 10, marginRight: 10, marginBottom: 10 }}>
  3. If the married couple has children, does that affect your answers in 1 and 2 above? Do the ages of the children matter?
</Text>
<Text style={{ fontSize: 16, marginLeft: 10, marginRight: 10, marginBottom: 10 }}>
  4. How long do you think a married couple should try to work things out? Does your answer to this question depend on some of the circumstances you wrote about above?
</Text>
<Text style={{ fontSize: 16, marginLeft: 10, marginRight: 10, marginBottom: 10 }}>
  5. What steps do you think people should take before deciding to get divorced? (For instance, get counseling.)
</Text>
<Text style={{ fontSize: 16, marginLeft: 10, marginRight: 10, marginBottom: 10 }}>
  6. Why do you think you have these beliefs? What has shaped your beliefs? (For instance, religious principles, family experiences growing up, friends you have observed going through a divorce, your ideological or political views).
</Text>
<Text style={{ fontSize: 16, marginLeft: 10, marginRight: 10, marginBottom: 50 }}>
  7. If possible, write a brief summary of your personal philosophy of divorce based on your thinking in this exercise.
</Text>


           
          </ScrollView>
        </View>
      </ScrollView>
      <NavigationButtons onBackPress={handleBackPress} onForwardPress={handleForwardPress} />
    </>
  );
};

export default EqualPartnership;
