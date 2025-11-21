import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import { GameData } from '../data/GameData';
import NewsBox from '../components/NewsBox';
import { newsListStyles } from '../styles/NewsList';

const NewsList: React.FC = () => {
  const [games] = useState(GameData);

  return (
    <View style={newsListStyles.container}>
      <FlatList
        data={games}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <NewsBox
            title={item.title}
            subtext={item.subtext}
            image={item.image}
          />
        )}
      />
    </View>
  );
};

export default NewsList;
