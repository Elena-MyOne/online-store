import Component from '../templates/components';
import { PageIds } from '../app/app';

const Navigation = [
  {
    id: PageIds.MainPage,
    text: '<img src="../../assets/icons/logo.svg" alt="Home page">',
  },
  {
    id: PageIds.ConfirmPage,
    text: 'Confirm',
  },
  {
    id: PageIds.CartPage,
    text: '<img src="../../assets/icons/cart_empty.svg" alt="Cart">',
  },
];

class Header extends Component {
  constructor(className: string) {
    super(className);
  }

  createNavElement(item: number) {
    const elem = this.createComponentBlock('a', 'header__link') as HTMLLinkElement;
    elem.href = `#${Navigation[item].id}`;
    elem.innerHTML = Navigation[item].text;
    return elem;
  }

  renderPageNav() {
    const pageNav = document.createElement('nav');
    pageNav.classList.add('header__nav');
    pageNav.classList.add('container');

    const logo = this.createNavElement(0);
    const confirm = this.createNavElement(1);
    const cart = this.createNavElement(2);

    const sumBlock = this.createComponentBlock('div', 'header__sum');
    const sumText = this.createComponentBlock('span', 'header__sum-text');
    const sum = this.createComponentBlock('span', 'header__sum-total');
    sumText.textContent = 'Cart total: $';
    sum.textContent = '0.00';
    sumBlock.append(...[sumText, sum]);

    const total = this.createComponentBlock('div', 'header__total');
    const productsInCart = JSON.parse(localStorage.getItem('products_in_cart') || '[]');
    
    total.textContent = productsInCart.length;

    pageNav.append(...[logo, sumBlock, confirm, cart, total]);

    this.element.append(pageNav);
  }

  render() {
    this.renderPageNav();
    return this.element;
  }
}
export default Header;
