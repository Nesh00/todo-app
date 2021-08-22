'use strict';

import { updateSum } from './updateSum.js';
import { renderListItem } from './Markup.js';
import { displayAllListItems } from './buttons/allBtn.js';

export const inputForm = document.querySelector('.form-control');

// GET INPUT VALUE AND DISPLAY THE LIST ITEM
export const getAndRenderInput = function (e) {
  const input = e.target;

  if (e.key === 'Enter' && input.value.length >= 1) {
    renderListItem(input.value);
    input.value = '';
    updateSum();
    displayAllListItems();
  }
};
