import React, { useEffect, useState } from 'react';
import { Text, Image, ScrollView, View } from 'react-native';
import { Game, getGameById } from '../api/rawg';
import { newsDetail as styles } from '../styles/NewsDetail.styles';

interface Props {
  gameId: number;
  onGoBack: (summary?: string) => void;
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

   // 설명 정제 (HTML 제거 + fallback)
  const raw =
    game.description_raw ||
    (game.description?.replace(/<[^>]+>/g, '') ?? '');

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 80 }}>
      <Text style={styles.title}>{game.name}</Text>
      <View style={styles.imageBox}>

      <Image 
      source={{ uri: game.backgroundImage }} 
      style={styles.image} 
    />
      </View>

    <Text style={styles.subtext}>Rating: {game.rating}</Text>
    <Text style={styles.description}>{raw}</Text>
    </ScrollView>
    </View>
  );
};

export default NewsDetail;
