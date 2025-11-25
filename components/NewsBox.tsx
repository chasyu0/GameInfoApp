import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

interface Props {
  title: string;
  subtext: string;
  image: any;
}

const NewsBox: React.FC<Props> = ({ title, subtext, image }) => {
  return (
    <View style={styles.box}>
      <View style={styles.textBox}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtext}>{subtext}</Text>
      </View>

      <View style={styles.imageBox}>
        {image && <Image style={styles.image} source={image} />}
      </View>
    </View>
  );
};

export default NewsBox;

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    width: '100%',
    borderWidth: 1,
    borderColor: '#4144ffff',
    marginBottom: 0,  // 칸 간 최소 여백
  },
  textBox: {
    flex: 1,
    padding: 8,
    justifyContent: 'center',
  },
  imageBox: {
    width: 100,
    height: 100,
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  subtext: {
    fontSize: 12,
    color: '#973d3dff',
  },
});
