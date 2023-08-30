import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Linking } from 'react-native';
import NavigationButtons from '../../../../../components/NavigationButtons';
import { Ionicons } from '@expo/vector-icons';

const WarningSigns = ({ navigation }) => {
  const handleBackPress = () => {
    navigation.navigate('Lesson 2 soft start');
  };

  const handleForwardPress = () => {
    navigation.navigate('Lesson 2 principles');
  };

  const openNationalDVHotline = () => {
    Linking.openURL('tel:800-787-3224');
  };

  const openTheHotlineWebsite = () => {
    Linking.openURL('https://www.thehotline.org/identify-abuse');
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

            <Image
              source={require('../../../../../../assets/images/logo2.png')}
              style={{ width: 50, height: 50, borderRadius: 30, marginRight: 2, marginLeft: 5 }}
            />
            <View style={{ flex: 1 }}>

              <Text style={{
                color: '#707070', fontSize: 12, backgroundColor: 'white', paddingVertical: 5, paddingHorizontal: 10,
                borderRadius: 15, borderColor: '#ab713c', borderWidth: 1, textAlign: 'left'
              }}>
                Workbook &gt; Lesson 2 &gt; Warning Signs
              </Text>
            </View>

          </View>

          {/* Content */}
          <ScrollView contentContainerStyle={{ paddingBottom: 50 }}>
            <Image
              source={require('../../../../../../assets/images/lesson2_deep_learning.png')}
              style={{ width: '100%', height: 158, marginBottom: 10 }}
            />
            <Text style={{ fontSize: 16, marginBottom: 10, textAlign: 'center', color: '#707070' }}>Lesson 2: Becoming One Through Effective Communication</Text>
            <View style={{ width: '100%', borderBottomColor: '#ab713c', borderBottomWidth: 1, marginBottom: 10 }} />
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10 }}>Relationship Warning Signs</Text>
            <View style={{ width: '20%', borderBottomColor: '#90b1c2', borderBottomWidth: 10, marginBottom: 10, marginLeft: 10 }} />

            {/* The provided text */}
            <View style={{ paddingLeft: 16, paddingRight: 16 }}>
              <Text style={{ marginBottom: 10 }}>
                Most of us know what physical relationship violence looks like hitting, kicking, shoving, pulling hair but emotional aggression can be harder to recognize. The following are some indicators that your relationship could involve unhealthy emotional aggression.
              </Text>

              <Text style={{ marginBottom: 10 }}>
                If your partner:
              </Text>
              <Text style={{ marginLeft: 20, marginBottom: 10 }}>
                • Doesn't let you make decisions{'\n'}
                • Threatens you{'\n'}
                • Says mean things to you{'\n'}
                • Keeps you away from friends, family, and co-workers{'\n'}
                • Ignores your feelings{'\n'}
                • Puts you down, insults you, and calls you names{'\n'}
                • Keeps you from sleeping{'\n'}
                • Does things that make you feel crazy{'\n'}
                • Tells you and others that you’re crazy{'\n'}
                • Tells you your decisions are bad{'\n'}
                • Polices your day-to-day routine{'\n'}
                • Is excessively jealous{'\n'}
                • Shifts blame and won’t take ownership{'\n'}
              </Text>

              <Text style={{ marginBottom: 5 }}>
                This is emotional aggression and abuse
              </Text>

              <Text style={{ marginBottom: 10 }}>
                If you aren’t sure if you are experiencing relationship aggression and abuse, that’s okay; there are resources to help. It might be helpful to talk through your concerns with a trusted family member or friend.
              </Text>

              <Text style={{ marginBottom: 10 }}>
                In addition, there are hotlines and websites where you can anonymously talk through your concerns with an experienced professional.
              </Text>

              {/* Hotline and Website Links */}
              <TouchableOpacity onPress={openNationalDVHotline}>
                <Text style={{ color: 'blue', textDecorationLine: 'underline', marginBottom: 5 }}>
                  • National Domestic Violence Hotline: (800) 787-3224
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={openTheHotlineWebsite}>
                <Text style={{ color: 'blue', textDecorationLine: 'underline', marginBottom: 5 }}>
                  • The Hotline Website: www.thehotline.org/identify-abuse
                </Text>
              </TouchableOpacity>

              <TouchableOpacity onPress={openTheHotlineWebsite}>
                <Text style={{ color: 'blue', textDecorationLine: 'underline', marginBottom: 20 }}>
                  • Love is Respect Website: www.loveisrespect.org
                </Text>
              </TouchableOpacity>
            </View>

          </ScrollView>
        </View>
      </ScrollView>
      <NavigationButtons onBackPress={handleBackPress} onForwardPress={handleForwardPress} />
    </>
  );
};

export default WarningSigns;
