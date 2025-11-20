import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import NewsScreen from './screens/NewsScreen';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NewsScreen />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
