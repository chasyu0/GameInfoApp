import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

interface Props {
  title: string;
  subtext: string;
  image: any;
}

const NewsKizi: React.FC<Props> = ({title, subtext, image}) => {
    return(
         <View style = {styles.box}>
              <View style={styles.moziBox}>
                <Text style={styles.Text}>{title}</Text>
                <Text style={styles.subText}>{subtext}</Text>
              </View>

          <View style={styles.gazoBox}>
          <Image style={styles.image} source={image } />
        </View>
        </View>   
  );
};

export default NewsKizi;

const styles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    width: '100%',
    borderColor: 'lightblue',
    borderWidth: 1,
    borderRadius: 0,
    marginBottom: 0,
    overflow: 'hidden',
  },

  moziBox: {
    flex: 1,
    padding: 8,
    justifyContent: 'center',
    backgroundColor: '#ffffffff',
  },

  gazoBox: {
    width: 100,
    height: 100,
    alignItems: "center",
    // backgroundColor: "powderblue",
  },

  image: {
    width: 100,
    height: 100,
  },
  
  Text: {
    fontSize: 16,
  },

  subText: {
    fontSize: 12,
    color: '#ff6363ff',
  },
});