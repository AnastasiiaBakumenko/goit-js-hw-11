export default class TemplateHTML {
  getGallery(arrayDataElement) {
    return arrayDataElement.reduce((textHTML, dataElement) => {
      return textHTML + this.getElementGallery(dataElement);
    }, '');
  }

  getElementGallery(dataElement) {
    // webformatURL - посилання на маленьке зображення для списку карток.
    // largeImageURL - посилання на велике зображення.
    // tags - рядок з описом зображення. Підійде для атрибуту alt.
    // likes - кількість лайків.
    // views - кількість переглядів.
    // comments - кількість коментарів.
    // downloads - кількість завантажень.
    return `
        <div class="photo-card">
         <a class="thumb" href="${dataElement.largeImageURL}">
            <img src="${dataElement.webformatURL}" alt="${dataElement.tags}" loading="lazy" width="375" />          
          </a>
          <div class="info">
            <p class="info-item">
              <b>Likes</b>
              <span>${dataElement.likes}</span>              
            </p>
            <p class="info-item">
              <b>Views</b>
              <span>${dataElement.views}</span>              
            </p>
            <p class="info-item">
              <b>Comments</b>
              <span>${dataElement.comments}</span>              
            </p>
            <p class="info-item">
              <b>Downloads</b>
              <span>${dataElement.downloads}</span>              
            </p>
          </div>
        </div>
        `;
  }
}