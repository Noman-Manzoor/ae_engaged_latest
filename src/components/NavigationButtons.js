import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const NavigationButtons = ({ onBackPress, onForwardPress }) => {
  return (
    <View style={{ position: 'absolute', bottom: 0, width: '100%', backgroundColor: 'white' }}>
      <View style={{ flex: 1, height: 2, backgroundColor: '#ab713c', marginHorizontal: 0 }} />
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 15, paddingVertical: 10 }}>
        <TouchableOpacity
          onPress={onBackPress}
          style={{
            backgroundColor: '#ab713c', // Red circle background
            borderRadius: 30, // Make it a circle
            width: 40, // Width of the circle
            height: 40, // Height of the circle
            justifyContent: 'center', // Center the text horizontally
            alignItems: 'center' // Center the text vertically
          }}
        >
          <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold', lineHeight: 40, textAlign: 'center' }}>&lt;</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onForwardPress}
          style={{
            backgroundColor: '#ab713c', // Red circle background
            borderRadius: 30, // Make it a circle
            width: 40, // Width of the circle
            height: 40, // Height of the circle
            justifyContent: 'center', // Center the text horizontally
            alignItems: 'center' // Center the text vertically
          }}
        >
          <Text style={{ color: 'white', fontSize: 30, fontWeight: 'bold', lineHeight: 40, textAlign: 'center' }}>&gt;</Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};

export default NavigationButtons;
