import React, { useEffect, useState } from 'react';
import { FlatList, View, Text } from 'react-native';
import NewsBox from '../components/NewsBox';
import { Game, getGames } from '../api/rawg';
import NavBar from '../components/NavBar';
import styles from '../styles/NewsList.styles';

interface NewsListProps {
  onPressGame: (gameId: number) => void;
}

const PAGE_SIZE = 10;

const NewsList: React.FC<NewsListProps> = ({ onPressGame }) => {
  const [allGames, setAllGames] = useState<Game[]>([]);
  const [games, setGames] = useState<Game[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await getGames();
        console.log("Fetched games:", data);
        setAllGames(data);
        setGames(data.slice(0, PAGE_SIZE));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const loadMore = () => {
    const nextPage = page + 1;
    const start = (nextPage - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    setGames([...games, ...allGames.slice(start, end)]);
    setPage(nextPage);
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={games}
        keyExtractor={(item, index) => (item.id ? item.id.toString() : index.toString())}
       renderItem={({ item }) => (
        <NewsBox
        title={item.name ?? 'No Title'}
        subtext={`Rating: ${item.rating ?? 'N/A'}`}
        image={{ uri: item.backgroundImage || 'https://picsum.photos/200' }} 
        onPress={() => onPressGame(item.id)}
      />
    )}

        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        contentContainerStyle={{ paddingBottom: 80 }}
      />
      <NavBar style={styles.navbar} />
    </View>
  );
};

export default NewsList;
