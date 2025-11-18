import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style = {styles.box}>
      <View style={styles.moziBox}>
        <Text>これは可愛い犬の人形です。私はファイナルファンタジー１６のトルガールも好きですけど、モグリも好き</Text>
      </View>
      <View style={styles.gazoBox}>      
      <Image
        style={{width: 100, height: 100}}
          source={require('./assets/torugal.jpg')}
      />
      </View>
    </View>
      <View style = {styles.box}>
      <View style={styles.moziBox}>
        <Text>これは可愛いチョコボの人形です。</Text>
      </View>
      <View style={styles.gazoBox}>      
      <Image
        style={{width: 100, height: 100}}
          source={require('./assets/chocobo2.jpg')}
      />
      </View>
    </View>
      <View style = {styles.box}>
      <View style={styles.moziBox}>
        <Text>これは可愛いモグリの人形です。</Text>
      </View>
      <View style={styles.gazoBox}>      
      <Image
        style={{width: 100, height: 100}}
          source={require('./assets/moguri.jpg')}
      />
    </View>
    </View>
</View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  box: {
    height: 100,
    width: '100%',
    borderColor: 'lightblue',
    borderWidth: 1,
    flexDirection: 'row',
  },

  moziBox: {
    flex: 1,
    backgroundColor: "steelblue",
    padding: 16,
    justifyContent: "space-left",
  },

  gazoBox: {
    width: 100,
    backgroundColor: "powderblue",
  },
});
