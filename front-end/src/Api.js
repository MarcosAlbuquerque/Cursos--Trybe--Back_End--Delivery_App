import axios from 'axios';

export const API_URL = 'http://localhost:3001';

export async function LOGIN ({ email, password }) {
  return {
    url: `${API_URL}/login`,
    options: {
      method: 'POST',
      body: { email, password },
    },
  }
}
