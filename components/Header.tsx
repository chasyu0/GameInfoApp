import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { headerStyles as styles } from '../styles/Header.styles';

interface HeaderProps {
  title: string;
  onBack?: () => void;
}

const Header: React.FC<HeaderProps> = ({ title, onBack }) => {
  return (
    <View style={styles.container}>
      {onBack ? (
        <TouchableOpacity onPress={onBack} style={styles.backButton}>
          <Text style={styles.backText}>←</Text>
        </TouchableOpacity>
      ) : (
        <View style={styles.placeholder} />
      )}

      <Text style={styles.title}>{title}</Text>

      {/* 오른쪽 균형용 placeholder */}
      <View style={styles.placeholder} />
    </View>
  );
};

export default Header;
