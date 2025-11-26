import React, { useEffect, useState } from 'react';
import { FlatList, SafeAreaView, StyleSheet } from 'react-native';
import NewsBox from '../components/NewsBox';
import { Game, getGames } from '../api/rawg';
import { useNavigation } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import type { RootStackParamList } from '../App';

 const PAGE_SIZE = 10;

const NewsList: React.FC = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [allGames, setAllGames] = useState<Game[]>([]);
  const [games, setGames] = useState<Game[]>([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    (async () => {
      const data = await getGames();
      setAllGames(data); // 전체 데이터 저장
      setGames(data.slice(0, PAGE_SIZE)); //처음 10개씩만
    })();
  }, []);

  const loadMore = () => {
    const nextPage = page + 1;
    const start = (nextPage -1 ) * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    setGames([...games, ...allGames.slice(start, end)]);
    setPage(nextPage);
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={games}
        keyExtractor={(item, index) => (item.id ? item.id.toString() : index.toString())}
        renderItem={({ item }) => (
          <NewsBox
            title={item.name ?? 'No Title'}
            subtext={`Rating: ${item.rating ?? 'N/A'}`}
            image={{ uri: item.backgroundImage ?? 'https://via.placeholder.com/150' }}
            onpress={() => navigation.navigate('NewsDetail', { gameId: item.id })}
          />
        )}
        onEndReached={loadMore} // 스크롤 끝에 도달하면 loadMore호출 
        onEndReachedThreshold={0.5} // 리스트 끝 50% 정도 왔을 때 호출
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
