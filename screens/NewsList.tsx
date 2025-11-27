import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet, View, Text } from 'react-native';
import NewsBox from '../components/NewsBox';
import { Game, getGames } from '../api/rawg';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';
import NavBar from '../components/NavBar';
 const PAGE_SIZE = 10;

const NewsList: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList, 'NewsList'>>();
  const [allGames, setAllGames] = useState<Game[]>([]);
  const [games, setGames] = useState<Game[]>([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
      const data = await getGames();
      setAllGames(data); // 전체 데이터 저장
      setGames(data.slice(0, PAGE_SIZE)); //처음 10개씩만
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
    })();
  }, []);

  const loadMore = () => {
    const nextPage = page + 1;
    const start = (nextPage -1 ) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    setGames([...games, ...allGames.slice(start, end)]);
    setPage(nextPage);
  }

  if (loading) {
    return (
      <SafeAreaView style={styles.loadingContainer}>
        <Text> styleName={}</Text>
      </SafeAreaView>
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={games}
          keyExtractor={(item, index) => (item.id ? item.id.toString() : index.toString())}
          renderItem={({ item }) => (
            <NewsBox
              title={item.name ?? 'No Title'}
              subtext={`Rating: ${item.rating ?? 'N/A'}`}
              image={{ uri: item.background_image || 'https://picsum.photos/200' }}
              onPress={() => navigation.navigate('NewsDetail', { gameId: item.id })}
            />
          )}
          onEndReached={loadMore}
          onEndReachedThreshold={0.5}
          contentContainerStyle={{ paddingBottom: 80 }}
          style={{ flex: 1 }}
        />
        <NavBar style={{ backgroundColor: '#3fbaf7ff' }} />
      </View>
    </SafeAreaView>
  );
};

export default NewsList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b9ffc7ff',
  },
  listContainer: {
    flex: 1,
    position: 'relative',
  },
  navbar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});