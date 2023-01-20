import { galleryItems } from "./gallery-items.js";
// Change code below this line
// const createGalleryItem = ({
//   preview,
//   description,
// }) =>
//   `<li><img src="${preview}" alt="${description}" width = 200 height = 150></li>`;
// const galleryMarkup = images.reduce(
//   (acc, item) => acc + createGalleryItem(item),
//   ""
// );
// const galleryList =
//   document.querySelector(".gallery");
// galleryList.insertAdjacentHTML(
//   "afterbegin",
//   galleryMarkup
// );
// galleryList.setAttribute(
//   "style",
//   "list-style-type:none; display: flex; gap: 10px"
// );
console.log(galleryItems);

const galleryContainer =
  document.querySelector(".gallery");
const itemsMarkup =
  createGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML(
  "beforeend",
  itemsMarkup
);
galleryContainer.addEventListener(
  "click",
  onImgClickCreateModal
);

// rendered items
function createGalleryItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
    })
    .join("");
}

// create modal
function onImgClickCreateModal(event) {
  event.preventDefault();

  const isItemImage =
    event.target.classList.contains(
      "gallery__image"
    );
  if (!isItemImage) {
    return;
  }

  const currentImgUrl =
    event.target.dataset.source;

  const instance = basicLightbox.create(
    `
		<img src="${currentImgUrl}" width="1280" height="auto"/>
        `,
    {
      onShow: (instance) => {
        window.addEventListener(
          "keydown",
          onEscKeyPress
        );
      },
      onClose: (instance) => {
        window.removeEventListener(
          "keydown",
          onEscKeyPress
        );
      },
    }
  );
  instance.show();

  function onEscKeyPress(event) {
    const ESC_KEY_CODE = "Escape";
    const isEscKey = event.code === ESC_KEY_CODE;
    if (isEscKey) {
      instance.close();
    }
  }
}
