import React, { useEffect, useState } from 'react';
import { StyleSheet, ScrollView, View, Text, Image } from 'react-native';
import { sampleGames } from './GameData';

export default function App() {
  const [games, setGames ] = useState(sampleGames);

return (
    <ScrollView contentContainerStyle={styles.container}>
      {games.map((game) => (
        <NewsKizi
          key={game.id}
          title={game.name}
          subtext={`Released: ${game.released} | Rating: ${game.rating}`}
          image={game.background_image}
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
