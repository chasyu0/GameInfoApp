import React from 'react';
import { View, StyleSheet, SafeAreaView, Text } from 'react-native';
import NewsList from './screens/NewsList';
import NavBar from './components/NavBar';

const App: React.FC = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* 상단 타이틀 */}
        <View style={styles.header}>
          <Text style={styles.headerText}>ニュース</Text>
        </View>

        {/* 뉴스 리스트 */}
        <View style={styles.content}>
          <NewsList />
        </View>

        {/* 하단 NavBar */}
        <NavBar />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#be5b5bff',
  },
  container: {
    flex: 1,
  },
  header: {
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#000000ff',
    backgroundColor: '#fff',
  },
  headerText: {
    fontSize: 20,
    // fontWeight: 'bold',
    textAlign: 'center',
  },
  content: {
    flex: 1, // 남은 공간 차지
  },
});