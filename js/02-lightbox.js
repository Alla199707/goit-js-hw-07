import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const galleryContainer =
  document.querySelector(".gallery");
const itemsMarkup =
  createGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML(
  "beforeend",
  itemsMarkup
);

// rendered items
function createGalleryItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>`;
    })
    .join("");
}
const lightbox = new SimpleLightbox(
  ".gallery a",
  {
    captionsData: "alt",
    captionPosition: "bottom",
    captionDelay: 250,
  }
);
