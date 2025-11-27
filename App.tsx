import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewsList from './screens/NewsList';
import NewsDetail from './screens/NewsDetail'; // 새 화면 추가

export type RootStackParamList = {
  NewsList: undefined;
  NewsDetail: { gameId: number };
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="NewsList">
        <Stack.Screen
          name="NewsList"
          component={NewsList}
          options={{ title: 'ニュース' }}
        />
        <Stack.Screen
          name="NewsDetail"
          component={NewsDetail}
          options={{ title: 'Game Detail' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;


