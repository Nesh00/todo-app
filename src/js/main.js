'use strict';

import * as theme from './Theme.js';
import { inputForm, getAndRenderInput } from './InputForm.js';
import { listGroup } from './Markup.js';
import { closeBtn } from './buttons/closeBtn.js';
import { checkBtn } from './buttons/checkBtn.js';
import { allBtn, displayAllListItems } from './buttons/allBtn.js';
import { activeBtn, displayActiveListItems } from './buttons/activeBtn.js';
import {
  completedBtn,
  displayCompletedListItems,
} from './buttons/completedBtn.js';
import {
  clearCompletedBtn,
  clearCompletedListItems,
} from './buttons/clearCompletedBtn.js';
import { updateSum } from './updateSum.js';
import { listItems, saveListItems, getListItems } from './storeListItems.js';

// CLICK EVENT ON THEME BUTTON
theme.themeBtn.addEventListener('click', theme.toggleTheme);

// MANAGE INPUT FORM
inputForm.addEventListener('keydown', getAndRenderInput);

// CLICK EVENT ON CHECK BUTTON
listGroup.addEventListener('click', checkBtn);

// CLICK EVENT ON CLOSE BUTTON
listGroup.addEventListener('click', closeBtn);

// CLICK EVENT ON ALL BUTTON
allBtn.addEventListener('click', displayAllListItems);

// CLICK EVENT ON ACTIVE BUTTON
activeBtn.addEventListener('click', displayActiveListItems);

// CLICK EVENT ON COMPLETED BUTTON
completedBtn.addEventListener('click', displayCompletedListItems);

// CLICK EVENT ON CLEAR-COMPLETED BUTTON
clearCompletedBtn.addEventListener('click', clearCompletedListItems);

// EXECUTE STORING LIST-ITEMS WHEN LEAVING PAGE
window.addEventListener('unload', saveListItems);

// SORTING LIST-ITEMS WITH DRAG AND DROP
Sortable.create(listGroup, {
  animation: 150,
  draggable: '.list-item',
  filter: '.check-btn, .close-btn',
});

// INIT
(function onLoadDisplay() {
  localStorage.getItem('theme') === 'theme-dark'
    ? theme.setTheme('theme-dark')
    : theme.setTheme('theme-light');
  theme.changeThemeImg();
  getListItems(listItems);
  updateSum();
})();
