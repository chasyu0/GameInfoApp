import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const NavBar: React.FC = () => {
  return (
    <View style={styles.container}>
      {['ニュース', '新作', '人気', 'マイリスト'].map((item) => (
        <TouchableOpacity key={item} style={styles.button}>
          <Text style={styles.label}>{item}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: '#217d8dff',
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});