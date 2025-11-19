import React, { useState } from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { GameData } from './GameData';
import NewsKizi from './components/NewsKizi';

export default function App() {
  const [games, setGames ] = useState(GameData);

return (
    <ScrollView contentContainerStyle={styles.container}>
      {games.map((game) => (
        <NewsKizi
          key={game.id}
          title={game.title}
          subtext={game.subtext}
          image={game.image}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 8,
    // flexGrow: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
  },
});
