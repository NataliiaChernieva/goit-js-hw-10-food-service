import './style.css';
import menu from './menu.json';
import menuItemsTemplate from './menu-items.hbs';

const menuRef = document.querySelector('.js-menu');

const markup = menuItemsTemplate(menu);
menuRef.insertAdjacentHTML('beforeend', markup);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const inputEl = document.querySelector('#theme -switch-toggle');
inputEl.addEventListener('change', onSelectTheme);

function onSelectTheme(evt) {
    
}

