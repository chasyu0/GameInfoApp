import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import NewsBox from '../components/NewsBox';
import { Game, getGames } from '../api/rawg';

const NewsList: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getGames();
      console.log('Fetched games:', data);  //데이터 체크용!
      setGames(data);
    })();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={games}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <NewsBox
            title={item.name}
            subtext={`Rating: ${item.rating}`}
            image={{ uri: item.backgroundImage }}
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
    backgroundColor: '#b9ffc7ff',
    padding: 8,
  },
});
