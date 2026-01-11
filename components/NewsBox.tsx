import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { newsItemStyles as styles } from '../styles/NewsItem';

type Props = {
  title: string;
  subtext: string;
  image: { uri: string };
  onPress?: () => void;
};

const NewsBox: React.FC<Props> = ({ title, subtext, image, onPress }) => {
  const [liked, setLiked] = useState(false);

 const toggleLike = () => {
    setLiked(prev => !prev);
  };

  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      {/* 텍스트 영역 */}
      <View style={styles.textBox}>
        {/* 제목 + 하트 한 줄 */}
        <View style={styles.titleRow}>
          <Text style={styles.title}>{title}</Text>

          <TouchableOpacity
            onPress={(e) => {
              e.stopPropagation();
              setLiked(!liked);
            }}
          >
            <Icon
              name={liked ? 'heart' : 'heart-outline'}
              size={16}
              color={liked ? '#e74c3c' : '#999'}
              style={styles.heart}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.subtext}>{subtext}</Text>
      </View>

      {/* 이미지 */}
      <View style={styles.imageBox}>
        <Image source={{ uri: image.uri }} style={styles.image} />
      </View>
    </TouchableOpacity>
  );
};

export default NewsBox;