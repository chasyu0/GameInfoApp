import axios from 'axios';

// 서버 주소 (React Native에서 실제 기기 테스트 시 ip 사용) 
const BASE_URL = 'http://localhost:8080';

export interface Game {
    backgroundImage: string;
    id: number;
    name: string;
    released: string;
    rating: number;
    description_raw?: string;
    description?: string;  // 옵셔널로 추가
}

// 모든 게임 정보 가져오기 
export async function getGames(): Promise<Game[]> {
  try {
    const response = await axios.get<Game[]>(`${BASE_URL}/games`);
    return response.data;
  } catch (error) {
    console.error("Error fetching games:", error);
    return [];
  }
}

// 특정 게임 ID 가져오기 
export const getGameById = async (id: number): Promise<Game | null> => {
    try {
        const response = await axios.get<Game>(`${BASE_URL}/games/${id}`);

        const game = response.data;

        // desscription_raw가 없고 description만 오는 경우 HTML 제거 
        if (!game.description_raw && game.description) {
          game.description_raw = game.description.replace(/<[^>]+>/g, '');
        }

        return game;
    } catch (error) {
        console.error(`Error fetching game with id ${id}:`, error);
        return null;
    }
};

// 요약문 생성 
export const createSummary = (game: Game): string => {
  if (game.description && game.description.length > 0) {
    return game.description.slice(0, 80) + " ...";
  }

  // description이 없을 때 자동 생성
  return `${game.name} | Rating: ${game.rating ?? "N/A"} | Released: ${game.released ?? "-"}`;
};
