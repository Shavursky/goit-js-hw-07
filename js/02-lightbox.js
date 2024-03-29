import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const ulGalary = document.querySelector('.gallery')

function galaryElem (images) {
  return images.map(({preview, original, description}) => {
        return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`       
    }).join('');   
}
const cardsImg = galaryElem(galleryItems);
ulGalary.insertAdjacentHTML('beforeend', cardsImg);

// ------------------------------------------------------------

const lightbox = new SimpleLightbox('.gallery a', {captionsData: 'alt', captionDelay: 250});