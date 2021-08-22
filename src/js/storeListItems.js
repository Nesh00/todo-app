'use strict';

import { renderListItem } from './Markup.js';
import { listGroup } from './Markup.js';

export const listItems = [];

// STORE LIST-ITEMS IN LOCAL STORAGE
export const saveListItems = function () {
  const allItems = listGroup.querySelectorAll('.list-text');
  allItems.forEach((listItem) => listItems.unshift(listItem.textContent));
  localStorage.setItem('data', JSON.stringify(listItems));
};

// GET LIST-ITEMS FROM LOCAL STORAGE
export const getListItems = function () {
  const listItems = JSON.parse(localStorage.getItem('data'));

  if (!listItems) return;

  listItems.forEach((listItem) => renderListItem(listItem));
};
