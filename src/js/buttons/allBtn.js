'use strict';

import { activeBtn } from './activeBtn.js';
import { completedBtn } from './completedBtn.js';

export const allBtn = document.querySelector('#all');

// SHOW ALL LIST ITEMS
export const displayAllListItems = function () {
  const listItems = document.querySelectorAll('.list-item');
  listItems.forEach((listItem) => listItem.classList.remove('hidden'));

  [activeBtn, completedBtn].forEach((btn) => btn.classList.remove('active'));
  allBtn.classList.add('active');
};
