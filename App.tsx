import React, { useState } from 'react';
import { View } from 'react-native';
import NewsList from './screens/NewsList';
import NewsDetail from './screens/NewsDetail';
import Header from './components/Header';

export default function App() {
  const [selectedGameId, setSelectedGameId] = useState<number | null>(null);
  const [summary, setSummary] = useState<string | null>(null);


  const handlePressGame = (gameId: number) => {
    setSelectedGameId(gameId);
  };

  const handleGoBack = (summaryFromDetail?: string) => {
    if (summaryFromDetail) setSummary(summaryFromDetail);
    setSelectedGameId(null);
  };

  return (
    <View style={{ flex: 1 }}>
      {/* 화면 상단에 항상 Header */}
      <Header title={selectedGameId === null ? "뉴스" : "詳細"} />

      {selectedGameId === null ? (
        <NewsList onPressGame={handlePressGame} summary={summary} />
      ) : (
        <NewsDetail gameId={selectedGameId} onGoBack={handleGoBack} />
      )}
    </View>
  );
}
