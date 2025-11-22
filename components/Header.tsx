import React from 'react';
import { View, Text } from 'react-native';
import { headerStyles } from '../styles/Header';

const Header: React.FC<{ title: string }> = ({ title }) => {
  return (
    <View style={headerStyles.container}>
      <Text style={headerStyles.text}>{title}</Text>
    </View>
  );
};

export default Header;
