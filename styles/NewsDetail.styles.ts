import { StyleSheet } from "react-native";

export const newsDetail = StyleSheet.create({
  container: { 
    flex: 1, 
    backgroundColor: "#fff", 
    position: "relative" 
  },

  title: { 
    fontSize: 20, 
    // fontWeight: "bold", 
    margin: 8
  },

   // 이미지 박스
    imageBox: {
        width: '100%',           // 화면 가로 전체
        alignItems: 'center',    // 가로 중앙 정렬
        marginBottom: 12,
        justifyContent: 'center'
    },

    image: { 
        width: 512, 
        height: 288, 
        resizeMode: 'cover',
        marginBottom: 12,
    },

    subtext: { 
      fontSize: 16, 
      marginBottom: 12 
    },

    description: { 
        fontSize: 14, 
        lineHeight: 20, 
        marginBottom: 12, 
        marginHorizontal: 16,
        color: '#333',
    },
    
    navbar: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
    },
});