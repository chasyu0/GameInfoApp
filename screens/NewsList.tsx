import React, { useState } from 'react';
import { FlatList, View, SafeAreaView, StyleSheet } from 'react-native';
import NewsBox from '../components/NewsBox';
import { GameData } from '../data/GameData';

const NewsList: React.FC = () => {
  const [games, setGames] = useState(GameData);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={games}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <NewsBox
            title={item.title}
            subtext={item.subtext}
            image={item.image}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default NewsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 8,
  },
});
