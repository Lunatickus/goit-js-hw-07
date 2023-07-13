import { galleryItems } from './gallery-items.js';
// Change code below this line

const ulEl = document.querySelector(".gallery");

const markup = galleryItems.map(({ preview, original, description }) => `<li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
    />
    </a>
    </li>`).join("");

ulEl.insertAdjacentHTML("beforeend", markup);

ulEl.addEventListener("click", openModal);

function openModal(event) {
    const isGalleryImageEl = event.target.classList.contains('gallery__image');

    if(!isGalleryImageEl) {
        return;
    }

    event.preventDefault();

    const largeImage = event.target.dataset.source;
    const instance = basicLightbox.create(`<img src="${largeImage}">`);
    instance.show();
}