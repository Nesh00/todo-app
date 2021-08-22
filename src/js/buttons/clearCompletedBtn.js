'use strict';

import { updateSum } from '../updateSum.js';

export const clearCompletedBtn = document.querySelector(
  '#clear-completed--btn'
);

// CLEAR COMPLETED LIST ITEMS
export const clearCompletedListItems = function () {
  const listBtns = document.querySelectorAll('.check-btn');

  listBtns.forEach((listBtn) => {
    const listItem = listBtn.parentElement;

    if (listBtn.classList.contains('check-btn--active')) {
      listItem.remove();
    }
  });
  updateSum();
};
