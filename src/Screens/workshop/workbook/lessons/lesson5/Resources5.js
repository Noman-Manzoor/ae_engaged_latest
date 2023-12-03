import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import NavigationButtons from '../../../../../components/NavigationButtons';
import { Ionicons } from '@expo/vector-icons';

const Resources5 = ({ navigation }) => {
  const handleBackPress = () => {
    // Handle the back navigation logic
    navigation.navigate('Lesson 5 Therapist');
  };

  const handleForwardPress = () => {
    // Handle the forward navigation logic
    navigation.navigate('Lesson 5 Principles');
  };

  return (
    <>
      <ScrollView>
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
              <Text style={{ fontSize: 10, backgroundColor: 'white', paddingVertical: 5, paddingHorizontal: 10, borderRadius: 15, borderColor: '#ab713c', borderWidth: 1, textAlign: 'left' }}>
                Workshop &gt; Lesson 5 &gt; Resources
              </Text>
            </View>
          </View>

          {/* Content */}
          <ScrollView contentContainerStyle={{ paddingBottom: 16 }}>
            <Image
              source={require('../../../../../../assets/images/lesson5.png')}
              style={{ width: '100%', height: 150, marginBottom: 10 }}
            />

            <Text style={{ fontSize: 16, marginBottom: 10, textAlign: 'center' }}>Lesson 5: Becoming One Through Growing Together</Text>
            <View style={{ width: '100%', borderBottomColor: '#ab713c', borderBottomWidth: 1, marginBottom: 10 }} />
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10 }}>Resources to Strengthen Marriages</Text>
            <View style={{ width: '20%', borderBottomColor: '#90b1c2', borderBottomWidth: 10, marginBottom: 10, marginLeft: 10 }} />


            {/* Books */}
            <View style={{ paddingLeft: 25, paddingRight: 20 }}>
              <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 10, marginTop: 10, marginBottom: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Books</Text>
                {'\n'}
                • Covenant Hearts* by Bruce C. Hafen{'\n\n'}
                • Successful Marriages and Families* by Alan J. Hawkins, David C. Dollahite, & Thomas W. Draper{'\n\n'}
                • The Seven Principles for Making Marriage Work by John M. Gottman & Nan Silver{'\n\n'}
                • Sexual Wholeness in Marriage* by Dean M. Busby, Jason S. Carroll, & Chelom E. Leavitt{'\n\n'}
                • The Marriage Compass* by Jason S. Carroll{'\n\n'}
                • Beyond the Myth of Marital Happiness by Blaine J. Fowers{'\n\n'}
                • The Anatomy of Peace: Resolving the Heart of Conflict by The Arbinger Institute{'\n'}
              </Text>
              {/* Articles and Speeches* */}
              <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 10, marginTop: 10, marginBottom: 30 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Articles and Speeches</Text>
                {'\n'}
                • “Mending Our Marriage” Ensign, Oct 1996{'\n\n'}
                • “What Happily Married Couples Do” Ensign, Jan 2012{'\n\n'}
                • “How Do I Love Thee?” Jeffrey R. Holland, BYU devotional, February 15, 2000{'\n\n'}
                • “As I Have Loved You: Agency-Based Love in Dating and Marriage” Jason S. Carroll, BYU devotional, April 2, 2019{'\n\n'}
                • “Repentance and Forgiveness in Marriage” Richard B. Miller, BYU devotional, January 19, 2010{'\n\n'}

                <Text style={{ textDecorationLine: 'underline' }}>Making decisions about divorce:</Text>{'\n'}
                • “Should I keep trying to work it out? Sacred and secular perspectives on the crossroads of divorce,” Alan J. Hawkins & Tamara A. Fackrell, byustudies.byu.edu
              </Text>
              {/* Podcasts */}
              <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 10, marginBottom: 30 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Podcasts:</Text>
                {'\n'}
                <Text style={{ textDecorationLine: 'underline' }}>General:</Text>{'\n'}
                • Mormon Marriages (www.mormonmarriages.com){'\n'}
                • Strongermarriage.org{'\n'}
                {'\n'}
                <Text style={{ textDecorationLine: 'underline' }}>Sexuality:</Text>{'\n'}
                • Finalyson-fife.com/podcast-archive{'\n\n'}
                • Chelomleavitt.com{'\n\n'}
                • Themarriagebed.com{'\n\n'}
                • Thechristiansexeducator.com
              </Text>
              {/* Miscellaneous Resources */}
              <Text style={{ fontSize: 16, marginLeft: 10, marginRight: 10, marginTop: 10, marginBottom: 30 }}>
                <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Miscellaneous Resources:</Text>
                {'\n'}
                <Text style={{ textDecorationLine: 'underline' }}>Email Newsletter (1-minute micro-lessons):</Text>{'\n'}
                • Marriage Minute - The Goman Institute{'\n'}
                www.goman.com/marriage-minute/{'\n'}
                {'\n'}
                <Text style={{ textDecorationLine: 'underline' }}>Relationship Inventories:</Text>{'\n'}
                • RELATE Questionnaire – USU Extension{'\n'}
                https://extension.usu.edu/strongermarriage/relate-assessment{'\n\n'}
                • SYMBIS assessment (Save your marriage before it starts){'\n'}
                https://www.symbis.com/{'\n'}
                {'\n'}
                <Text style={{ textDecorationLine: 'underline' }}>Online Relationship-Strengthening Classes and Resources:</Text>{'\n'}
                • ePREP: http://www.lovetakeslearning.com{'\n\n'}
                • Forever Families* https://foreverfamilies.byu.edu/{'\n\n'}
                • Serving as Couples: https://www.focusonthefamily.com/marriage/ serving-together-as-acouple/ {'\n\n'}
                • Anxiously Engaged Supplemental Lessons https://anxiouslyengaged.byu.edu/supplemental- lessons{'\n\n'}
              </Text>
            </View>
          </ScrollView>
        </View>
      </ScrollView>
      <NavigationButtons onBackPress={handleBackPress} onForwardPress={handleForwardPress} />
    </>
  );
};

export default Resources5;
