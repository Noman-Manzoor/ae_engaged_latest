import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import NavigationButtons from '../../../../../components/NavigationButtons';
import { Ionicons } from '@expo/vector-icons';

const Resources3 = ({ navigation }) => {
  const handleBackPress = () => {
    // Handle the back navigation logic
    navigation.navigate('Lesson 3 SpiritualPrep');
  };

  const handleForwardPress = () => {
    // Handle the forward navigation logic
    navigation.navigate('Lesson 1 Topic Goals');
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
                workshop &gt; Lesson 3 &gt; Resources
              </Text>
            </View>
          </View>

          {/* Content */}
          <ScrollView contentContainerStyle={{ padding: 16 }}>
          <Image
                         source={require('../../../../../../assets/images/lesson3_mental_prep.png')}
                            style={{ width: '100%', height: 158, marginBottom: 10 }}
                            resizeMode='contain'
                        />

            <Text style={{ fontSize: 16, marginBottom: 10, textAlign: 'center' }}>Lesson 3: Becoming One Through Marital Sexuality</Text>
            <View style={{ width: '100%', borderBottomColor: '#ab713c', borderBottomWidth: 1, marginBottom: 10 }} />
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10 }}>Resources on Marital Sexuality</Text>
            <View style={{ width: '20%', borderBottomColor: '#90b1c2', borderBottomWidth: 10, marginBottom: 10, marginLeft: 10 }} />

          
            {/* Additional Questions */}
             {/* Website & Podcasts */}
             <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 10, marginTop: 10, marginBottom: 10 }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Website & Podcasts{'\n'}</Text>
              • The Marriage Bed (TheMarriageBed.com){'\n'}
              • Strengthening Marriage (www.strengtheningmarriage.com){'\n'}
              • The Sexual Mindfulness Project (www.chelomleavi.com){'\n'}
              • Jennifer Finlayson-Fife podcast archive (finlayson-fife.com){'\n'}
            </Text>

            {/* Articles */}
            <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 10, marginBottom: 10 }}>
              <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Articles{'\n'}</Text>
              • “Of Souls, Symbols, and Sacraments” Jeffrey R. Holland, BYU Devotional, January 12, 1988{'\n'}
              • “Love and Marriage” Wendy Watson Nelson, Worldwide YSA Devotional, January 8, 2017{'\n'}
            </Text>

            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10 }}>Books</Text>
      <Text style={{ marginLeft: 10 }}>
        • Sexual Wholeness in Marriage: An LDS perspective on integrating sexuality and spirituality in our marriages, Dean M. Busby, Jason S. Carroll, Chelom Leavitt{'\n'}
        • Becoming One: Intimacy in marriage, Robert F. Stahmann, Wayne R. Young, Julie G. Grover{'\n'}
        • And They Were Not Ashamed: Strengthening marriage through sexual fulfillment, Laura M. Brotherson{'\n'}
        • The Act of Marriage, Tim LaHaye{'\n'}
        • Real Intimacy: A couple’s guide to healthy, genuine sexuality, Kristin B. Hodson, Alisha Worthington, Thomas G. Harrison{'\n'}
        • From Honeymoon to Happily Ever After: 23 keys to prepare for a sextraordinary marriage, Laura M. Brotherson
      </Text>
          </ScrollView>
        </View>
      </ScrollView>
      {/* <NavigationButtons onBackPress={handleBackPress} onForwardPress={handleForwardPress} /> */}
    </>
  );
};

export default Resources3;
