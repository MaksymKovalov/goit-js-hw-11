import axios from 'axios';

// API конфігурація
const API_KEY = '19753267-9cf01e6822d74b7ae8fe04f3f';
const BASE_URL = 'https://pixabay.com/api/';

// Конфігурація axios
const pixabayAPI = axios.create({
  baseURL: BASE_URL,
  params: {
    key: API_KEY,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
    per_page: 15,
  },
});

/**
 * Отримання зображень за пошуковим запитом
 * @param {string} query - Пошукове слово
 * @returns {Promise} - Promise з даними від API
 */
export async function getImagesByQuery(query) {
  try {
    const response = await pixabayAPI.get('', {
      params: {
        q: query.trim(),
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw error;
  }
}
