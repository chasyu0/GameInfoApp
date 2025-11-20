import { StyleSheet } from 'react-native';

export const newsStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
  },
});

export const newsItemStyles = StyleSheet.create({
  box: {
    flexDirection: 'row',
    width: '100%',
    borderWidth: 1,
    borderColor: 'lightblue',
    borderRadius: 0,
    marginBottom: 8,
    overflow: 'hidden',
  },
  textBox: {
    flex: 1,
    padding: 8,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  imageBox: {
    width: 100,
    height: 100,
    alignItems: 'center',
  },
  image: {
    width: 100,
    height: 100,
  },
  title: {
    fontSize: 16,
  },
  subtext: {
    fontSize: 12,
    color: '#ff6363',
  },
});
