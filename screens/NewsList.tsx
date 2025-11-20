import React, { useState } from 'react';
import { FlatList, View, Text } from 'react-native';
import { GameData } from '../data/GameData';
import { newsStyles } from '../styles/NewsList';


const NewsList: React.FC = () => {
  const [games, setGames] = useState(GameData);

//   return (
//     <View style={newsStyles.container}>
//       <FlatList
//         data={games}
//         keyExtractor={(item) => item.id.toString()}
//         renderItem={({ item }) => (
//           <NewsItem
//             title={item.title}
//             subtext={item.subtext}
//             image={item.image}
//           />
//         )}
//       />
//     </View>
//   );
// };

return (
    <View style={newsStyles.container}>
      <FlatList
        data={games}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <View style={{ width: '50%', padding: 4, borderWidth: 1, borderColor: '#ccc' }}>
            <Text>{item.title}</Text>
          </View>
        )}
      />
    </View>
  );
};


export default NewsList;
