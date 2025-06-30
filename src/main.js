import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

// Елементи DOM
const searchForm = document.querySelector('.form');
const searchInput = document.querySelector('input[name="search-text"]');

// Обробник відправки форми
searchForm.addEventListener('submit', onSearchFormSubmit);

/**
 * Обробник відправки форми пошуку
 * @param {Event} event - Подія відправки форми
 */
async function onSearchFormSubmit(event) {
  event.preventDefault();

  const query = searchInput.value.trim();

  // Перевірка на порожній рядок
  if (!query) {
    iziToast.warning({
      title: 'Warning',
      message: 'Please enter a search query!',
      position: 'topRight',
    });
    return;
  }

  try {
    // Очищення попередніх результатів
    clearGallery();

    // Показуємо лоадер
    showLoader();

    // Виконуємо запит до API
    const data = await getImagesByQuery(query);

    // Ховаємо лоадер
    hideLoader();

    // Перевірка чи знайдено зображення
    if (data.hits.length === 0) {
      iziToast.error({
        title: 'Error',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
      });
      return;
    }

    // Відображаємо галерею
    createGallery(data.hits);

    // Показуємо успішне повідомлення
    iziToast.success({
      title: 'Success',
      message: `Found ${data.totalHits} images!`,
      position: 'topRight',
    });
  } catch (error) {
    // Ховаємо лоадер в разі помилки
    hideLoader();

    console.error('Search error:', error);

    iziToast.error({
      title: 'Error',
      message: 'Something went wrong. Please try again later!',
      position: 'topRight',
    });
  }

  // Очищаємо поле вводу
  searchInput.value = '';
}
