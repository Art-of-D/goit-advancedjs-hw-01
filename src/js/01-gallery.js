// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const imgsMarkup = [...galleryItems].map(({preview, original, description}) => 
    `
    <li class="gallery__item">
        <a class="gallery__link" href=${original}>
            <img
            class="gallery__image"
            src=${preview}
            alt=${description}
            />
        </a>
    </li>
    `)
    .join(""); 

const gallery = document.querySelector('.gallery');
gallery.insertAdjacentHTML("afterbegin", imgsMarkup);

//Zoom images by click

 let zoomedImg = new SimpleLightbox('.gallery__link', {
        captionSelector: '.gallery__image',
        captionsData:'alt',
        captionDelay: 250,
    });