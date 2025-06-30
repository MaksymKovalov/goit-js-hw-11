import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

// Елементи DOM
const galleryContainer = document.querySelector('.gallery');
const loaderContainer = document.querySelector('.loader-container');

// Екземпляр SimpleLightbox
const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionDelay: 250,
});

/**
 * Створення розмітки для галереї зображень
 * @param {Array} images - Масив об'єктів зображень
 */
export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <li class="gallery-item">
        <a class="gallery-link" href="${largeImageURL}">
          <img 
            class="gallery-image" 
            src="${webformatURL}" 
            alt="${tags}" 
            loading="lazy" 
          />
          <div class="info">
            <p class="info-item">
              <b>Likes</b>
              <span>${likes}</span>
            </p>
            <p class="info-item">
              <b>Views</b>
              <span>${views}</span>
            </p>
            <p class="info-item">
              <b>Comments</b>
              <span>${comments}</span>
            </p>
            <p class="info-item">
              <b>Downloads</b>
              <span>${downloads}</span>
            </p>
          </div>
        </a>
      </li>
    `
    )
    .join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);

  // Оновлення SimpleLightbox після додавання нових елементів
  lightbox.refresh();
}

/**
 * Очищення вмісту галереї
 */
export function clearGallery() {
  galleryContainer.innerHTML = '';
}

/**
 * Показати індикатор завантаження
 */
export function showLoader() {
  loaderContainer.classList.add('visible');
}

/**
 * Сховати індикатор завантаження
 */
export function hideLoader() {
  loaderContainer.classList.remove('visible');
}
