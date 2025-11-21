import React from 'react';
import { View, Text, Image } from 'react-native';
import { newsItemStyles } from '../styles/NewsList';

interface Props {
  title: string;
  subtext: string;
  image: any;
}

const NewsBox: React.FC<Props> = ({ title, subtext, image }) => {
  return (
    <View style={newsItemStyles.box}>
      <View style={newsItemStyles.textBox}>
        <Text style={newsItemStyles.title}>{title}</Text>
        <Text style={newsItemStyles.subtext}>{subtext}</Text>
      </View>

      <View style={newsItemStyles.imageBox}>
        <Image style={newsItemStyles.image} source={image} />
      </View>
    </View>
  );
};

export default NewsBox;
