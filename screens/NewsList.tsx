import React, { useEffect, useState } from 'react';
import { FlatList, View, Text, TouchableOpacity } from 'react-native';
import NewsBox from '../components/NewsBox';
import { Game, getGames } from '../api/rawg';
import styles from '../styles/NewsList.styles';

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
  const totalPages = Math.ceil(allGames.length/PAGE_SIZE);
  const [likedIds, setLikedIds] = useState<number[]>([]); // 좋아요

  const goToPage = (targetPage: number) => {
      if (targetPage < 1 || targetPage > totalPages) return;

        const start = (targetPage - 1) * PAGE_SIZE;
        const end = start + PAGE_SIZE;

        setGames(allGames.slice(start, end));
        setPage(targetPage);
    };

    const toggleLike = (id:number) => {
      setLikedIds(prev => 
        prev.includes(id) 
        ? prev.filter(v => v! == id) 
          : [...prev, id]
    );
    };

  useEffect(() => {
    (async () => {
      try {
        const data = await getGames();
        // console.log("FETCHED GAMES:", data);  // 콘솔 확인용 코드
        setAllGames(data);
        setGames(data.slice(0, PAGE_SIZE));
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);  // 반드시 필요
      }
    })();
  }, []);

    if (loading) {
      return (
        <View style={styles.loadingContainer}>
          <Text>Loading...</Text>
        </View>
      );
    }

  return (
  <View style={styles.container}>
    {/* 게임 리스트 */}
    <FlatList
      data={games}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }: { item: Game }) => {
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

    {/* 페이지 버튼 영역 */}
    <View style={styles.pagination}>
      <TouchableOpacity
        disabled={page === 1}
        onPress={() => goToPage(page - 1)}
        style={styles.pageButton}
      >
        <Text>Prev</Text>
      </TouchableOpacity>

      <Text style={styles.pageText}>
        {page} / {totalPages}
      </Text>

      <TouchableOpacity
        disabled={page === totalPages}
        onPress={() => goToPage(page + 1)}
        style={styles.pageButton}
      >
        <Text>Next</Text>
      </TouchableOpacity>
    </View>
  </View>
);
}

export default NewsList;