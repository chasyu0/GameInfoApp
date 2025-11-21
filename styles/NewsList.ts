import { StyleSheet } from 'react-native';

export const newsListStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    backgroundColor: '#fff',
  },
});

export const newsItemStyles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    marginBottom: 0,     // 칸 간 최소 여백
  },
  textBox: {
    flex: 1,
    padding: 8,
    justifyContent: 'center',
  },
  imageBox: {
    width: 100,
    height: 100,
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  subtext: {
    fontSize: 12,
    color: '#973d3dff',
  },
});
