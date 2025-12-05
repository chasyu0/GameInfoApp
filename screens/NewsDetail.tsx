import React, { useEffect, useState } from 'react';
import { Text, Image, ScrollView, View } from 'react-native';
import { Game, getGameById } from '../api/rawg';
import NavBar from '../components/NavBar';
import { newsDetail as styles } from '../styles/NewsDetail.styles';
import { summarize } from '../data/Summary';

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

   // 상세 설명 정제
  const raw = game.description_raw || (game.description?.replace(/<[^>]+>/g, '') ?? "");
  const summary = summarize(raw); // ← 요약 생성

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
    
      {/* 하단 고정 NavBar */}
      <NavBar
        style={styles.navbar}
        onPressItem={(item) => {
         if (item === '뉴스') {
            onGoBack(summary); // <= 요약 전달 !
         }
        }}
      />
    </View>
  );
};

export default NewsDetail;
