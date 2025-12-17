import { StyleSheet } from 'react-native';

export const headerStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
  },

  backButton: {
    width: 40,
    justifyContent: 'center',
  },

  backText: {
    fontSize: 20,
    fontWeight: 'bold',
  },

  placeholder: {
    width: 40,
  },

  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
