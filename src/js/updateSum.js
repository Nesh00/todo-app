'use strict';

const sumOfListItems = document.querySelector('#sum');

// UPDATE TOTAL LIST-ITEMS
export const updateSum = function () {
  const allItems = document.querySelectorAll('.list-item');

  sumOfListItems.textContent =
    allItems.length === 1
      ? `${allItems.length} item left`
      : `${allItems.length} items left`;
};
