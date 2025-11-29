import { StyleSheet } from 'react-native';

export const newsItemStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 0,
    marginBottom: 0, // 뉴스앱처럼 칸 대 칸 붙어있게
    overflow: 'hidden',
    backgroundColor: '#fff',
  },

  imageBox: {
    width: 100,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },

  image: {
    width: 100,
    height: 100,
  },

  textBox: {
    flex: 1,
    padding: 8,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },

  subtext: {
    fontSize: 12,
    color: '#973d3dff', // 뉴스앱 느낌의 포인트 색
  },
});
