import { galleryItems } from './gallery-items.js';

// -----------------------------------------------------------
const divGalary = document.querySelector('.gallery')

function galaryElem (images) {
return  images.map(({preview, original, description}) => 
    {
        return `<div class="gallery__item">
        <a class="gallery__link" href="large-image.jpg">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </div>`
    }).join('');   
}
const cardsImg = galaryElem(galleryItems);
divGalary.insertAdjacentHTML('beforeend', cardsImg);

// ------------------------------------------------------------

divGalary.addEventListener('click', onClickCountainer)

function onClickCountainer(evt) {
    evt.preventDefault(); 
    // const isImgEl = evt.target.classList.contains('gallery__image');
    // if (!isImgEl) {
    //     return;
    // }
    const swatchEl = evt.target.dataset.source;    
    // Вставляю модалку з бібліотеки https://basiclightbox.electerious.com/
    const instance = basicLightbox.create(`
    <div class="modal">
        <img src="${swatchEl}" alt="">
    </div>
    `);
    instance.show();
    // Кнопка Escна закриття модального вікна
    document.addEventListener("keyup", (e)=>{
        if (e.key === 'Escape') {
            instance.close();
        }
    })
}