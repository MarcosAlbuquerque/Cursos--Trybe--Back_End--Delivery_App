export const API_URL = 'http://localhost:3001';

export function LOGIN(body) {
  return {
    method: 'post',
    url: `${API_URL}/login`,
    data: body,
  };
}
