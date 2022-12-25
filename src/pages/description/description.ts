import { Product } from "../../models/interfaces/productsList";
import Page from "../../models/templates/page";

const fakeProduct: Product = {
  brand: "Apple",
  category: "smartphones",
  description: "An apple mobile which is nothing like apple",
  discountPercentage: 12.96,
  id: 1,
  images: [
    "https://i.dummyjson.com/data/products/1/1.jpg",
    "https://i.dummyjson.com/data/products/1/2.jpg",
    "https://i.dummyjson.com/data/products/1/3.jpg",
    "https://i.dummyjson.com/data/products/1/4.jpg",
    "https://i.dummyjson.com/data/products/1/thumbnail.jpg"],

  price: 549,
  rating: 4.69,
  stock: 94,
  thumbnail: "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
  title: "iPhone 9"
}

class DescriptionPage extends Page {
  static TextObject = {
    MainTitle: 'Description page'
  };

  constructor(id: string) {
    super(id);
  }

  renderDescriptionPage(product: Product) {

    const section = this.createPageBlock('section', 'description', 'container');

    const breadCrumbs = this.createPageBlock('nav', 'description__bread-crumbs', 'container');

    const store = this.createPageBlock('a', 'description__item');
    store.textContent = 'Store';

    const arrow1 = this.createPageBlock('img', 'description__arrow') as HTMLImageElement;
    arrow1.src = '../assets/icons/arrow.svg';

    const category = this.createPageBlock('a', 'description__item');
    category.textContent = product.category;

    const arrow2 = this.createPageBlock('img', 'description__arrow') as HTMLImageElement;
    arrow2.src = '../assets/icons/arrow.svg';

    const productName = this.createPageBlock('span', 'description__item');
    productName.textContent = product.title;

    const cardWrapper = this.createPageBlock('div', 'description__card-wrapper', 'container');

    const cardName = this.createPageBlock('h2', 'description__name');
    cardName.textContent = product.title;

    const cardInfo = this.createPageBlock('div', 'description__info', 'container');

    const cardImages = this.createPageBlock('div', 'description__pictures');

    const mainPhoto = this.createPageBlock('img', 'description__photo', 'description__photo_big') as HTMLImageElement;
    mainPhoto.src = product.images[0];
    mainPhoto.alt = 'Photo product';

    const miniPhoto1 = this.createPageBlock('img', 'description__photo', 'description__photo_mini1') as HTMLImageElement;
    miniPhoto1.src = product.images[1];
    miniPhoto1.classList.add('description__photo_active');
    miniPhoto1.onclick = changePhoto;
    miniPhoto1.alt = 'Photo product';

    const miniPhoto2 = this.createPageBlock('img', 'description__photo', 'description__photo_mini2') as HTMLImageElement;
    miniPhoto2.src = product.images[2];
    miniPhoto2.onclick = changePhoto;
    miniPhoto2.alt = 'Photo product';

    const miniPhoto3 = this.createPageBlock('img', 'description__photo', 'description__photo_mini3') as HTMLImageElement;
    miniPhoto3.src = product.images[3];
    miniPhoto3.onclick = changePhoto;
    miniPhoto3.alt = 'Photo product';

    const cardDesc = this.createPageBlock('div', 'description__card-desc');

    const aboutProduct = this.createPageBlock('div', 'description__about-product', 'container');

    const descProduct = this.createPageBlock('p', 'description__desc-product');
    descProduct.textContent = product.description;

    const ratingProduct = this.createPageBlock('span', 'description__rating');
    ratingProduct.textContent = 'Rating:';

    const ratingValue = this.createPageBlock('p', 'description__rating-value');
    ratingValue.textContent = String(product.rating);

    const discount = this.createPageBlock('span', 'description__discount');
    discount.textContent = 'Discount:';

    const discountValue = this.createPageBlock('p', 'description__discount-value');
    discountValue.textContent = String(product.discountPercentage);

    const categoryProduct = this.createPageBlock('span', 'description__category');
    categoryProduct.textContent = product.category;

    const stock = this.createPageBlock('span', 'description__stock');
    stock.textContent = 'Stock:';

    const stockValue = this.createPageBlock('p', 'description__stock-value');
    stockValue.textContent = String(product.stock);

    const purchase = this.createPageBlock('div', 'description__purchase');

    const price = this.createPageBlock('div', 'description__price');
    price.textContent = `$ ${product.price}`;

    const btnAddToCart = this.createPageBlock('button', 'description__add-cart');
    btnAddToCart.textContent = 'add to cart';
    btnAddToCart.onclick = this.addRemoveToCart;

    const btnBuyNow = this.createPageBlock('button', 'description__buy-now');
    btnBuyNow.textContent = 'buy now';

    breadCrumbs.append(...[store, arrow1, category, arrow2, productName]);
    cardImages.append(...[mainPhoto, miniPhoto1, miniPhoto2, miniPhoto3]);
    aboutProduct.append(...[descProduct, ratingProduct, ratingValue, discount, discountValue, stock, stockValue, categoryProduct]);
    purchase.append(...[price, btnAddToCart, btnBuyNow]);
    cardDesc.append(...[aboutProduct, purchase]);
    cardInfo.append(...[cardImages, cardDesc]);
    cardWrapper.append(...[cardName, cardInfo]);
    section.append(...[breadCrumbs, cardWrapper]);
    this.main?.append(section);

    const arrPhotos = [miniPhoto1, miniPhoto2, miniPhoto3];

    function changePhoto(e: Event) {
      arrPhotos.forEach((item) => item.classList.remove('description__photo_active'));
      const target = e.target as HTMLImageElement;
      target.classList.add('description__photo_active');
      mainPhoto.src = target.src;
    };

  }
  
  render() {
    this.renderDescriptionPage(fakeProduct);
    return this.main;
  }

}



export default DescriptionPage;
