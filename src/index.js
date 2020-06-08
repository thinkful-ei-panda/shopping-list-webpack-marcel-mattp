import shoppingList from './shopping-list';
import './index.css';
import $ from 'jquery';

const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

$(main);
