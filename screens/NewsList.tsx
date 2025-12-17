import React, { useEffect, useState } from 'react';
import { FlatList, View, Text } from 'react-native';
import NewsBox from '../components/NewsBox';
import { Game, getGames } from '../api/rawg';
import NavBar from '../components/NavBar';
import styles from '../styles/NewsList.styles';
import { summarize } from '../data/Summary';

interface NewsListProps {
  onPressGame: (gameId: number) => void;
  summary?: string;
}

const PAGE_SIZE = 10;

const NewsList: React.FC<NewsListProps> = ({ onPressGame }) => {
  const [allGames, setAllGames] = useState<Game[]>([]);
  const [games, setGames] = useState<Game[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const data = await getGames();
        setAllGames(data);
        setGames(data.slice(0, PAGE_SIZE));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);  // 반드시 필요
      }
    })();
  }, []);

  const loadMore = () => {
    if (loadingMore) return;

    setLoadingMore(true);  // 추가됨

    const nextPage = page + 1;
    const start = (nextPage - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    const nextItems = allGames.slice(start, end);

    if (nextItems.length > 0) {
      setGames(prev => [...prev, ...nextItems]);
      setPage(nextPage);
    }
    setLoadingMore(false);
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
            subtext={
              item.description_raw ? 
              `Rating: ${item.rating} | ${summarize(item.description_raw)}`: `Rating: ${item.rating}`}
            image={{ uri: item.backgroundImage }}
            onPress={() => onPressGame(item.id)}
          />
        )}
        onEndReached={loadMore}
        onEndReachedThreshold={0.5} 
        contentContainerStyle={{ paddingBottom: 80 }}
      />
      <NavBar />
    </View> 
  );
};

export default NewsList;
 