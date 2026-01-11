import React, { useEffect, useState } from 'react';
import { FlatList, View, Text } from 'react-native';
import NewsBox from '../components/NewsBox';
import { Game, getGames } from '../api/rawg';
import NavBar from '../components/NavBar';
import styles from '../styles/NewsList.styles';

interface NewReleaseProps {
    onPressGame: (gameId: number) => void;
}

const PAGE_SIZE = 10;

const NewRelease: React.FC<NewReleaseProps> = ({ onPressGame }) => {
  const [allGames, setAllGames] = useState<Game[]>([]);
  const [games, setGames] = useState<Game[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const data = await getGames();

        // 신작 필터 (최근 6개월)
        const sixMonthsAgo = new Date();
        sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);

        const filtered = data.filter(game => {
          if (!game.released) return false;
          return new Date(game.released) >= sixMonthsAgo;
        });

        setAllGames(filtered);
        setGames(filtered.slice(0, PAGE_SIZE));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const goToPage = (newPage: number) => {
    const start = (newPage - 1) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    setGames(allGames.slice(start, end));
    setPage(newPage);
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }

  const totalPages = Math.ceil(allGames.length / PAGE_SIZE);

  return (
    <View style={styles.container}>
      <FlatList
        data={games}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          const summary = `${item.name} was released on ${item.released}.`;

          return (
            <NewsBox
              title={item.name}
              subtext={`⭐ ${item.rating} · ${summary}`}
              image={{ uri: item.backgroundImage }}
              onPress={() => onPressGame(item.id)}
            />
          );
        }}
      />

      {/* 페이지 버튼 */}
      <View style={{ flexDirection: 'row', justifyContent: 'center', padding: 12 }}>
        <Text onPress={() => page > 1 && goToPage(page - 1)}>◀ Prev</Text>
        <Text style={{ marginHorizontal: 12 }}>
          {page} / {totalPages}
        </Text>
        <Text onPress={() => page < totalPages && goToPage(page + 1)}>Next ▶</Text>
      </View>
    </View>
  );
};

export default NewRelease;