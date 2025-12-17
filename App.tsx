import React, { useState } from 'react';
import { View } from 'react-native';
import NewsList from './screens/NewsList';
import NewsDetail from './screens/NewsDetail';
import Header from './components/Header';

export default function App() {
  const [selectedGameId, setSelectedGameId] = useState<number | null>(null);

  const handleGoBack = () => {
    setSelectedGameId(null);
  }

  return (
    <View style={{ flex: 1 }}>
      {/* 화면 상단에 항상 Header */}
      <Header
        title={selectedGameId === null ? '뉴스' : '상세'}
        onBack={selectedGameId !== null ? handleGoBack : undefined} />

      {selectedGameId === null ? (
         <NewsList onPressGame={setSelectedGameId} />
      ) : (
        <NewsDetail
          gameId={selectedGameId}
          onGoBack={() => setSelectedGameId(null)}
        />
      )}
    </View>
  );
}