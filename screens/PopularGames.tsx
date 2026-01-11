import React, { useEffect, useState } from 'react';
import { FlatList, View, Text } from 'react-native';
import NewsBox from '../components/NewsBox';
import { Game, getGames } from '../api/rawg';
import styles from '../styles/NewsList.styles';

interface PopularProps {
  onPressGame: (gameId: number) => void;
}

const PAGE_SIZE = 10;

const Popular: React.FC<PopularProps> = ({ onPressGame }) => {
  const [allGames, setAllGames] = useState<Game[]>([]);
  const [games, setGames] = useState<Game[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await getGames();

        // ⭐ rating 기준 내림차순
        const sorted = [...data].sort((a, b) => b.rating - a.rating);

        setAllGames(sorted);
        setGames(sorted.slice(0, PAGE_SIZE));
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const goToPage = (target: number) => {
    const start = (target - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    setGames(allGames.slice(start, end));
    setPage(target);
  };

  const totalPages = Math.ceil(allGames.length / PAGE_SIZE);

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
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <NewsBox
            title={item.name}
            subtext={`⭐ ${item.rating} · Released ${item.released}`}
            image={{ uri: item.backgroundImage }}
            onPress={() => onPressGame(item.id)}
          />
        )}
      />

      {/* 페이지네이션 */}
      <View style={styles.pagination}>
        <Text onPress={() => page > 1 && goToPage(page - 1)}>Prev</Text>
        <Text>{page} / {totalPages}</Text>
        <Text onPress={() => page < totalPages && goToPage(page + 1)}>Next</Text>
      </View>
    </View>
  );
};

export default Popular;
