export interface GameData {
  id: number;
  title: string;
  subtext: string;
  image: any; // require(...)는 any로 둬도 됨
}

export const GameData: GameData[] = [
  {
    id: 1,
    title: "파이널 판타지 16",
    subtext: "2023년 발매 / Rating: 4.5",
    image: require('../assets/torugal.jpg'),   
  },
  {
    id: 2,
    title: "파이널 판타지 15",
    subtext: "2022년 발매 / Rating: 4.8",
    image: require('../assets/chocobo.jpg'),
  },
  {
    id: 3,
    title: "파이널 판타지 7",
    subtext: "2023년 발매 / Rating: 4.7",
    image: require('../assets/moguri.jpg'),
  },
  {
    id: 4,
    title: "파이널 판타지 16",
    subtext: "2023년 발매 / Rating: 4.5",
    image: require('../assets/torugal.jpg'),   
  },
  {
    id: 5,
    title: "파이널 판타지 15",
    subtext: "2022년 발매 / Rating: 4.8",
    image: require('../assets/chocobo2.jpg'),
  },
  {
    id: 6,
    title: "파이널 판타지 7",
    subtext: "2023년 발매 / Rating: 4.7",
    image: require('../assets/moguri.jpg'),
  },
  {
    id: 7,
    title: "파이널 판타지 15",
    subtext: "2022년 발매 / Rating: 4.8",
    image: require('../assets/chocobo2.jpg'),
  },
  {
    id: 8,
    title: "파이널 판타지 7",
    subtext: "2023년 발매 / Rating: 4.7",
    image: require('../assets/moguri.jpg'),
  },
  {
    id: 9,
    title: "파이널 판타지 15",
    subtext: "2022년 발매 / Rating: 4.8",
    image: require('../assets/chocobo2.jpg'),
  },
  {
    id: 10,
    title: "파이널 판타지 7",
    subtext: "2023년 발매 / Rating: 4.7",
    image: require('../assets/moguri.jpg'),
  },
];
