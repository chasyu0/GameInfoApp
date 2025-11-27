import React, { useEffect, useState } from 'react';
import { Text, Image, StyleSheet, ScrollView } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../App';
import { Game, getGameById } from '../api/rawg';

type Props = { route: RouteProp<RootStackParamList, 'NewsDetail'>;};

const NewsDetail: React.FC<Props> = ({ route }) => {
  const { gameId } = route.params;
  const [game, setGame] = useState<Game | null>(null);

  useEffect(() => {
    (async () => {
      const data = await getGameById(gameId);
      setGame(data);
    })();
  }, [gameId]);

  if (!game) return <Text>Loading...</Text>;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{game.name}</Text>
      <Image source={{ uri: game.background_image }} style={styles.image} />
      <Text style={styles.subtext}>Rating: {game.rating}</Text>
      <Text style={styles.description}>{game.description || 'No description available'}</Text>
    </ScrollView>
  );
};

export default NewsDetail;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#fff' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 12 },
  image: { width: '100%', height: 200, marginBottom: 12 },
  subtext: { fontSize: 16, marginBottom: 12 },
  description: { fontSize: 14, lineHeight: 20 },
});
