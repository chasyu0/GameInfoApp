import React from 'react';
import { TouchableOpacity, Image, Text, View, StyleSheet } from 'react-native';

interface Props {
  title: string;
  subtext: string;
  image: { uri: string };
  onpress?: () => void;
}

const NewsBox: React.FC<Props> = ({ title, subtext, image, onpress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onpress}>
      <Image source={{ uri: image.uri ?? 'https://via.placeholder.com/150' }} style={styles.image} />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtext}>{subtext}</Text>
    </TouchableOpacity>
  );
};

export default NewsBox;

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
    borderRadius: 8,
    backgroundColor: '#fff',
    overflow: 'hidden',
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 150,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingHorizontal: 8,
    paddingTop: 4,
  },
  subtext: {
    fontSize: 14,
    paddingHorizontal: 8,
    paddingBottom: 4,
    color: '#555',
  },
});