import React, { useEffect, useState } from 'react';
import { Text, Image, ScrollView, View, StyleSheet } from 'react-native';
import { Game, getGameById } from '../api/rawg';
import NavBar from '../components/NavBar';

interface Props {
  gameId: number;
  onGoBack: () => void;
}

const NewsDetail: React.FC<Props> = ({ gameId, onGoBack }) => {
  const [game, setGame] = useState<Game | null>(null);

  useEffect(() => {
    (async () => {
      const data = await getGameById(gameId);
      setGame(data);
    })();
  }, [gameId]);

  if (!game) return <Text>Loading...</Text>;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
        <Text style={styles.title}>{game.name}</Text>
        <Image source={{ uri: game.background_image }} style={styles.image} />
        <Text style={styles.subtext}>Rating: {game.rating}</Text>
        <Text style={styles.description}>{game.description || 'No description available'}</Text>
      </ScrollView>

      {/* 하단 고정 NavBar */}
      <NavBar
        style={styles.navbar}
        onPressItem={(item) => {
         if (item === '뉴스') {
            onGoBack(); // 뉴스 버튼 클릭 시 리스트로
         }
        }}
      />
    </View>
  );
};

export default NewsDetail;

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff' },
    title: { fontSize: 24, fontWeight: 'bold', margin: 12 },
    image: { width: '100%', height: 200, marginBottom: 12 },
    subtext: { fontSize: 16, marginBottom: 12 },
    description: { 
      fontSize: 14, 
      lineHeight: 20, 
      marginBottom: 12 
    },
      navbar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
});
