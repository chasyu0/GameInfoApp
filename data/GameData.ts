export interface GameData {
  id: number;
  title: string;
  subtext: string;
  image: any; // require(...)는 any로 둬도 됨
}

export const GameData: GameData[] = [
  {
    id: 1,
    title: "ファイナルファンタジーxv",
    subtext: "2023年　発売 / Rating: 4.5",
    image: require('../assets/noctis.png'),   
  },
  {
    id: 2,
    title: "ファイナルファンタジーⅦ",
    subtext: "2023年　発売 / Rating: 4.8",
    image: require('../assets/tifa2.png'),
  },
  {
    id: 3,
    title: "ファイナルファンタジーⅦクライシス",
    subtext: "2023年　発売 / Rating: 4.7",
    image: require('../assets/genesis.jpg'),
  },
  {
    id: 4,
    title: "ファイナルファンタジーVIII",
    subtext: "2023年　発売 / Rating: 4.5",
    image: require('../assets/squall.jpg'),   
  },
  {
    id: 5,
    title: "バイオハザード4",
    subtext: "2023年　発売 / Rating: 4.8",
    image: require('../assets/Leon2.png'),
  },
  {
    id: 6,
    title: "プログラミングｃ++",
    subtext: "2023年　発売 / Rating: 4.7",
    image: require('../assets/c.jpg'),
  },
  {
    id: 7,
    title: "ファイナルファンタジーXVI",
    subtext: "2023年　発売 / Rating: 4.8",
    image: require('../assets/torugal.jpg'),
  },
  {
    id: 8,
    title: "ファイナルファンタジーⅦ",
    subtext: "2023年　発売 / Rating: 4.7",
    image: require('../assets/aerith.png'),
  },
  {
    id: 9,
    title: "恋と深空",
    subtext: "2023年　発売 / Rating: 4.8",
    image: require('../assets/homura.jpg'),
  },
  {
    id: 10,
    title: "バイオハザード4",
    subtext: "2023年　発売 / Rating: 4.7",
    image: require('../assets/leon.png'),
  },
];
