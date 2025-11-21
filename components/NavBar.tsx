import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { navStyles } from '../styles/NavBar';

const NavBar: React.FC = () => {
  return (
    <View style={navStyles.container}>
      {['ニュース', '新作', '人気', 'マイリスト'].map((item) => (
        <TouchableOpacity key={item} style={navStyles.button}>
          <Text style={navStyles.label}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default NavBar;
