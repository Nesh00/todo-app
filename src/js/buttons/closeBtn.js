'use strict';

import { updateSum } from '../updateSum.js';

// SELECT CLOSE BUTTON
export const closeBtn = function (e) {
  const closeBtn = e.target.closest('button');
  const listItem = e.target.closest('li');

  if (!closeBtn) return;

  listItem.remove();

  updateSum();
};
