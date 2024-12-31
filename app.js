const carouselWrapper = document.querySelector(".carousel-wrapper");
const carouselItems = document.querySelectorAll(".carousel-item");
const itemsCount = carouselItems.length;
const duplicateItems = [];

for (let i = 0; i < itemsCount; i++) {
  const clonedItem = carouselItems[i].cloneNode(true);
  duplicateItems.push(clonedItem);
  carouselWrapper.appendChild(clonedItem);
}
