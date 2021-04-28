import menuCardTmp from '../templates/menu-card.hbs';
import menu from '../menu.json';

const menuListEl = document.querySelector('.js-menu');

const cardsMarkUp = creatMarkUpMenuCard(menu);
menuListEl.insertAdjacentHTML('beforeend', cardsMarkUp);

function creatMarkUpMenuCard(menu) {
  return menu.map(menuCardTmp).join('');
}
