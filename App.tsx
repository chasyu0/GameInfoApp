import React from 'react';
import { View, StyleSheet } from 'react-native';
import NewsList from './screens/NewsList';
import NavBar from './components/NavBar';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <NewsList />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: { flex: 1 },
});
