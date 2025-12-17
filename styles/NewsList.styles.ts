import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#b9ffc7ff',
  },
  listContainer: {
    flex: 1,
    position: 'relative',
  },
  navbar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  //버튼
  pagination: {
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  paddingVertical: 12,
  backgroundColor: '#eaffef',
},

pageButton: {
  fontSize: 16,
  marginHorizontal: 20,
  color: '#007b55',
  fontWeight: 'bold',
  cursor: 'pointer', // 웹용
},

pageText: {
  fontSize: 16,
  fontWeight: 'bold',
},

disabled: {
  color: '#aaa',
},
});
