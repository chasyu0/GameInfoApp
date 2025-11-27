import axios from 'axios';

// 서버 주소 (React Native에서 실제 기기 테스트 시 ip 사용) 
const BASE_URL = '';

export interface Game {
    id: number;
    name: string;
    released: string;
    rating: number;
    background_image: string;
    description: string;  // 옵셔널로 추가
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
        return response.data;
    } catch (error) {
        console.error(`Error fetching game with id ${id}:`, error);
        return null;
    }
};