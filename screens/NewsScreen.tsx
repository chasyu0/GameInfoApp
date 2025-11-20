import React, { useState } from 'react';
import { GameData } from '../GameData';
import NewsKizi from '../components/NewsKizi';
import { StyleSheet, FlatList, View, Text } from 'react-native';

/* props 타입 정의 */
interface NewsKiziProps {
    id: number,
    title: string;
    subtext: string;
    image: any;
}

const NewsScreen: React.FC = () => {
  const [games, setGames ] = useState<GameData[]>(GameData);

return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.headerText}>뉴스</Text>
    </View>

    <FlatList
      data={games} 
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
      <NewsKizi
        title={item.title}
        subtext={item.subtext}
        image={item.image}
        />
    )}
    contentContainerStyle={styles.container}
    />
    </View>
  );
};

export default NewsKizi;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: '#fff',
  },
  header: {
    paddingVertical: 16,
    paddingHorizontal: 8,
    backgroundColor: '#eee', // 원하는 색
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});
