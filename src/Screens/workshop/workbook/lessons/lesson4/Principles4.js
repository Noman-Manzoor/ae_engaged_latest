import React from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import NavigationButtons from '../../../../../components/NavigationButtons';
import { Ionicons } from '@expo/vector-icons';

const Principles4 = ({ navigation }) => {
  const handleBackPress = () => {
    // Handle the back navigation logic
    navigation.navigate('Lesson 4 Divorce');
  };

  const handleForwardPress = () => {
    // Handle the forward navigation logic
    navigation.navigate('Lesson 4 Goals');
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
                workshop &gt; Lesson 4 &gt; Principles 
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
            <Text style={{ fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginLeft: 10 }}>Principles of Equal Partnership
& Complete Commitment</Text>
            <View style={{ width: '20%', borderBottomColor: '#90b1c2', borderBottomWidth: 10, marginBottom: 10, marginLeft: 10 }} />

        {/* Developing an Equal Partnership */}
<Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
  Developing an Equal Partnership
</Text>
<Text style={{ fontSize: 16, marginLeft: 10, marginRight: 10, marginBottom: 20 }}>
  • Our prophets have been very clear that husbands and wives are to be equal partners.{'\n'}
  • We must overcome any false traditions and incorrect cultural understandings of the roles of men and women and commit to equal partnership in all aspects of our marriage.
</Text>

{/* Gospel Teachings of Equality in Marriage */}
<Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
  Gospel Teachings of Equality in Marriage
</Text>
<Text style={{ fontSize: 16, marginLeft: 10, marginRight: 10, marginBottom: 20 }}>
  • We have a Mother in Heaven, co-equal with our Father in Heaven. Godhood cannot exist without an equal partnership between men and women.
</Text>

{/* Complete Commitment */}
<Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
  Complete Commitment
</Text>
<Text style={{ fontSize: 16, marginLeft: 10, marginRight: 10, marginBottom: 20 }}>
  • Committing completely to each other is a powerful act of becoming one.{'\n'}
  • “Marriage is the sort of thing where it’s safer to go all in, and it’s dangerous to go in half-hearted.” - David Brooks (The Second Mountain, p. 146)
</Text>

{/* Divorce */}
<Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 10 }}>
  Divorce
</Text>
<Text style={{ fontSize: 16, marginLeft: 10, marginRight: 10, marginBottom: 50 }}>
  • The number one reason divorced individuals give for their divorce is lack of commitment (of one or both partners).
</Text>



          </ScrollView>
        </View>
      </ScrollView>
      <NavigationButtons onBackPress={handleBackPress} onForwardPress={handleForwardPress} />
    </>
  );
};

export default Principles4;
