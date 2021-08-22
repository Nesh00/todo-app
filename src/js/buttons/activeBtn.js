'use strict';

import { allBtn } from './allBtn.js';
import { completedBtn } from './completedBtn.js';

export const activeBtn = document.querySelector('#active');

// SHOW ACTIVE LIST ITEMS
export const displayActiveListItems = function () {
  const listBtns = document.querySelectorAll('.check-btn');

  listBtns.forEach((listBtn) => {
    const listItem = listBtn.parentElement;
    listItem.classList.remove('hidden');

    if (listBtn.classList.contains('check-btn--active')) {
      listItem.classList.add('hidden');
    }
  });

  [allBtn, completedBtn].forEach((btn) => btn.classList.remove('active'));
  activeBtn.classList.add('active');
};
