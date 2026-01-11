# GameInfoApp

React Native 기반 게임 뉴스/정보 앱 시뮬레이션 (웹 형태, MVP)  
백엔드 서버 연동 포함 (RAWG API 기반)

---

## 1. 프로젝트 개요
- 초기에는 모바일 앱 형태 계획 → 환경 문제로 웹 형태로 MVP 구현
- 뉴스 카드 UI, 하트 좋아요 토글, MyList 페이지 등 핵심 기능 중심
- RAWG API를 연동한 백엔드 서버를 통해 게임 데이터 제공

---

## 2. 프론트엔드 폴더 구조 (예시)
/api # 서버 API 관련
/assets # 이미지/더미 데이터
/components # Header, NavBar, NewsBox
/data # gamedata.ts, games.json, server.js, summary.ts
/screens # MyList, NewsDetail, NewsList, PopularGames
/styles # 스타일
App.tsx
package.json

--- 

## 3. 백엔드 폴더 구조 (예시)
/com/rawgserver
├─ controller # GameController
├─ dto # GameDto
├─ service # GameService, RawgService
├─ RawgServerApplication
└─ application.yml

---

## 4. 기술 스택
- **프론트엔드**: React Native / TypeScript, Expo Go, react-native-vector-icons, StyleSheet  
- **백엔드**: Java Spring Boot, REST API, RAWG API 연동  

---

## 5. 구현 기능
- 뉴스 카드 UI (제목, 썸네일, 하트 토글)  
- MyList 페이지 (좋아요 뉴스 필터링)  
- 뉴스 상세 페이지 연결  
- 탭 네비게이션: 뉴스, 신작, 인기, MYLIST  
- 백엔드 서버를 통해 RAWG 게임 데이터 제공  

---

초기 앱 형태는 Expo Go 기반 개발 계획이었으나, 환경 문제로 웹 형태로 구현
서버는 RAWG API 기반 데이터 제공

