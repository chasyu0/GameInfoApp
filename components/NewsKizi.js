import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

const NewsKizi = ({title, subtext, image}) => {
    return(
         <View style = {styles.box}>
              <View style={styles.moziBox}>
                <Text style={styles.titleText}>{title}</Text>
                <Text style={styles.subText}>{subtext}</Text>
              </View>

          <View style={styles.gazoBox}>
            {image && (
          <Image style={styles.image} 
          source={image } />
          )}
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
    borderRadius: 8,
    marginBottom: 10,
    overflow: 'hidden',
  },

  moziBox: {
    flex: 1,
    padding: 8,
    justifyContent: 'center',
    backgroundColor: '#d1edee',
  },

  gazoBox: {
    width: 100,
    height: 100,
    alignItems: "center",
    backgroundColor: "powderblue",
  },

  image: {
    width: 100,
    height: 100,
  },
  
  titleText: {
    fontSize: 14,
  },
  subText: {
    fontSize: 12,
    color: '#666',
  },
});