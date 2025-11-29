import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { newsItemStyles as styles } from '../styles/NewsItem';

type Props = {
  title: string;
  subtext: string;
  image: {uri : string};
  onPress?: () => void;
};

const NewsBox: React.FC<Props> = ({ title, subtext, image, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {/* 왼쪽 텍스트 */}
      <View style={styles.textBox}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.subtext}>{subtext}</Text>
      </View>

      {/* 오른쪽 이미지 */}
      <View style={styles.imageBox}>
        <Image source={{ uri: image.uri }} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

export default NewsBox;
