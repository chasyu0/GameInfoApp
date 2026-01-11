import React, { useState, useEffect } from 'react';
import { View, Text, FlatList } from 'react-native';
import NewsBox from '../components/NewsBox';
import { myListStyles as styles } from '../styles/MyList.styles';

// 예시 데이터 타입
type NewsItemType = {
  id: string;
  title: string;
  subtext: string;
  image: { uri: string };
  liked: boolean;
};

// 실제로는 서버 API에서 받아오거나 AsyncStorage에서 가져올 수 있음
const initialData: NewsItemType[] = [
  {
    id: '1',
    title: '첫 번째 뉴스',
    subtext: '좋아요 한 뉴스 예시',
    image: { uri: 'https://picsum.photos/100/100' },
    liked: true,
  },
  {
    id: '2',
    title: '두 번째 뉴스',
    subtext: '이 뉴스도 좋아요',
    image: { uri: 'https://picsum.photos/100/101' },
    liked: true,
  },
  {
    id: '3',
    title: '세 번째 뉴스',
    subtext: '좋아요 안 함',
    image: { uri: 'https://picsum.photos/100/102' },
    liked: false,
  },
];

const MyList = () => {
  const [newsList, setNewsList] = useState<NewsItemType[]>([]);

  useEffect(() => {
    // 좋아요(true)만 필터링
    const likedNews = initialData.filter((item) => item.liked);
    setNewsList(likedNews);
  }, []);

  const renderItem = ({ item }: { item: NewsItemType }) => (
    <NewsBox
      title={item.title}
      subtext={item.subtext}
      image={item.image}
      onPress={() => console.log('뉴스 클릭:', item.title)}
    />
  );

  return (
    <View style={{ flex: 1 }}>
      {newsList.length === 0 ? (
        <Text style={{ textAlign: 'center', marginTop: 50 }}>좋아요 뉴스가 없습니다.</Text>
      ) : (
        <FlatList
          data={newsList}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <NewsBox
              title={item.title}
              subtext={item.subtext}
              image={item.image}
              onPress={() => onPressGame?.(Number(item.id))}
            />
          )}
          contentContainerStyle={{ paddingBottom: 16 }}
        />
      )}
    </View>
  );
};

export default MyList;
