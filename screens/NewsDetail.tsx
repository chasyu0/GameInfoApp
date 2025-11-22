// DetailScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { GameData } from '../data/GameData';

const DetailScreen: React.FC<{ route: any }> = ({ route }) => {
  const { gameId } = route.params;
  const [game, setGame] = useState<any>(null);

  useEffect(() => {
    // 더미 데이터에서 필터링
    const selected = GameData.find(g => g.id === gameId);
    setGame(selected);
  }, [gameId]);

  if (!game) return <Text>Loading...</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{game.title}</Text>
      <Image source={game.image} style={styles.image} />
      <Text style={styles.subtext}>{game.subtext}</Text>
    </View>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold' },
  image: { width: '100%', height: 200, marginVertical: 16 },
  subtext: { fontSize: 16, color: '#555' },
});
