import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const NavigationButtons = ({ onBackPress, onForwardPress }) => {
  return (
    <View style={{ position: 'absolute', bottom: 0, width: '100%', backgroundColor: 'white' }}>
      <View style={{ flex: 1, height: 4, backgroundColor: '#ab713c', marginHorizontal: 0 }} />
      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 20 }}>
        <TouchableOpacity onPress={onBackPress}>
          <Text style={{ color: '#ab713c', fontSize: 40, fontWeight: 'bold' }}>&lt;</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onForwardPress}>
          <Text style={{ color: '#ab713c', fontSize: 40, fontWeight: 'bold' }}>&gt;</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NavigationButtons;
