'use strict';

import { allBtn } from './allBtn.js';
import { activeBtn } from './activeBtn.js';

export const completedBtn = document.querySelector('#completed');

// SHOW COMPLETED LIST ITEMS
export const displayCompletedListItems = function () {
  const listBtns = document.querySelectorAll('.check-btn');

  listBtns.forEach((listBtn) => {
    const listItem = listBtn.parentElement;
    listItem.classList.remove('hidden');

    if (!listBtn.classList.contains('check-btn--active')) {
      listItem.classList.add('hidden');
    }
  });

  [allBtn, activeBtn].forEach((btn) => btn.classList.remove('active'));
  completedBtn.classList.add('active');
};
