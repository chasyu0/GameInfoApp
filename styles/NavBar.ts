import { StyleSheet } from 'react-native';

export const navStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    backgroundColor: '#eee',
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 4,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
