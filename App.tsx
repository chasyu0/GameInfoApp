import React, { useState } from 'react';
import { View, Text } from 'react-native';
import NewsList from './screens/NewsList';
import NewsDetail from './screens/NewsDetail';
import NewRelease from './screens/NewRelease';
import Header from './components/Header';
import NavBar from './components/NavBar';
import PopularGames from './screens/PopularGames';
import MyList from './screens/MyList';

type Tab = '뉴스' | '新作' | '人気' | 'MYLIST';

export default function App() {
  const [currentTab, setCurrentTab] = useState<Tab>('뉴스');
  const [selectedGameId, setSelectedGameId] = useState<number | null>(null);

  const handleGoBack = () => {
    setSelectedGameId(null);
  }

  const renderContent = () => {
    if (selectedGameId !== null) {
      return (
        <NewsDetail
          gameId={selectedGameId}
          onGoBack={handleGoBack}
        />
      );
    }

    switch (currentTab) {
      case '뉴스':
        return <NewsList onPressGame={setSelectedGameId} />;
      case '新作':
        return <NewRelease onPressGame={setSelectedGameId} />;
      case '人気':
        return <PopularGames onPressGame={setSelectedGameId} />;
      case 'MYLIST':
        return <MyList onPressGame={setSelectedGameId} />;
      default:
        return null;
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Header
        title={selectedGameId ? '상세' : currentTab}
        onBack={selectedGameId ? handleGoBack : undefined}
      />

      {renderContent()}

      <NavBar onPressItem={(item) => {
        setCurrentTab(item as Tab);
        setSelectedGameId(null);
      }} />
    </View>
  );
}
