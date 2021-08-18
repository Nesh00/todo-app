'use strict';

const themeBtn = document.querySelector('#theme-btn');
const themeImg = document.querySelector('#theme-img');
const listGroup = document.querySelector('.list-group');
const inputForm = document.querySelector('.form-control');
const sumOfListItems = document.querySelector('#sum');
const allBtn = document.querySelector('#all');
const activeBtn = document.querySelector('#active');
const completedBtn = document.querySelector('#completed');
const clearCompletedBtn = document.querySelector('#clear-completed--btn');
const listItems = [];

// MANAGE THEME IMAGES
const changeThemeImg = () => {
  if (document.documentElement.className === 'theme-light')
    themeImg.src = 'images/icon-moon.svg';
  if (document.documentElement.className === 'theme-dark')
    themeImg.src = 'images/icon-sun.svg';
};

// STORE THEME IN LOCAL STORAGE
const setTheme = (themeName) => {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
};

// GET THEME FROM LOCAL STORAGE
const toggleTheme = () => {
  localStorage.getItem('theme') === 'theme-dark'
    ? setTheme('theme-light')
    : setTheme('theme-dark');
  changeThemeImg();
};

themeBtn.addEventListener('click', toggleTheme);

// CREATE MARKUP
const renderListItem = function (input) {
  const html = `
    <li class="list-group-item list-item-bg d-flex align-items-center list-item">
        <div class="check-btn align-self-center"></div>
        <div class="list-text text-capitalize">${input.trim()}</div>

        <button class="d-lg-none close-btn align-self-start ms-auto">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
            <path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z" />
        </svg>
        </button>
    </li>
    `;
  listGroup.insertAdjacentHTML('afterbegin', html);
};

// UPDATE TOTAL LIST-ITEMS
const updateSum = function () {
  const allItems = document.querySelectorAll('.list-item');

  sumOfListItems.textContent =
    allItems.length === 1
      ? `${allItems.length} item left`
      : `${allItems.length} items left`;
};

// MANAGE INPUT FORM
inputForm.addEventListener('keydown', function (e) {
  const input = e.target;

  if (e.key === 'Enter' && input.value.length >= 1) {
    renderListItem(input.value);
    input.value = '';
    updateSum();
    renderAllListItems();
  }
});

// CLICK EVENT ON CHECK BUTTON
listGroup.addEventListener('click', function (e) {
  const checkBtn = e.target.closest('.check-btn');
  if (!checkBtn) return;

  checkBtn.classList.toggle('check-btn--active');
});

// CLICK EVENT ON CLOSE BUTTON
listGroup.addEventListener('click', function (e) {
  const closeBtn = e.target.closest('button');
  const listItem = e.target.closest('li');

  if (!closeBtn) return;

  listItem.remove();
  updateSum();
});

// SORTING LIST-ITEMS WITH DRAG AND DROP
Sortable.create(listGroup, {
  animation: 150,
  draggable: '.list-item',
  filter: '.check-btn, .close-btn',
});

// SHOW ALL LIST ITEMS
const renderAllListItems = function () {
  const listItems = document.querySelectorAll('.list-item');
  listItems.forEach((listItem) => listItem.classList.remove('hidden'));

  [activeBtn, completedBtn].forEach((btn) => btn.classList.remove('active'));
  allBtn.classList.add('active');
};

// CLICK EVENT ON ALL BUTTON
allBtn.addEventListener('click', renderAllListItems);

// CLICK EVENT ON ACTIVE BUTTON
activeBtn.addEventListener('click', function () {
  const listBtns = document.querySelectorAll('.check-btn');

  listBtns.forEach((listBtn) => {
    const listItem = listBtn.parentElement;
    listItem.classList.remove('hidden');

    if (listBtn.classList.contains('check-btn--active')) {
      listItem.classList.add('hidden');
    }
  });

  [allBtn, completedBtn].forEach((btn) => btn.classList.remove('active'));
  this.classList.add('active');
});

// CLICK EVENT ON COMPLETED BUTTON
completedBtn.addEventListener('click', function () {
  const listBtns = document.querySelectorAll('.check-btn');

  listBtns.forEach((listBtn) => {
    const listItem = listBtn.parentElement;
    listItem.classList.remove('hidden');

    if (!listBtn.classList.contains('check-btn--active')) {
      listItem.classList.add('hidden');
    }
  });

  [allBtn, activeBtn].forEach((btn) => btn.classList.remove('active'));
  this.classList.add('active');
});

// CLICK EVENT ON CLEAR-COMPLETED BUTTON
clearCompletedBtn.addEventListener('click', function () {
  const listBtns = document.querySelectorAll('.check-btn');

  listBtns.forEach((listBtn) => {
    const listItem = listBtn.parentElement;

    if (listBtn.classList.contains('check-btn--active')) {
      listItem.remove();
    }
  });
  updateSum();
});

// STORE LIST-ITEMS IN LOCAL STORAGE
const saveListItems = function () {
  const allItems = listGroup.querySelectorAll('.list-text');
  allItems.forEach((listItem) => listItems.push(listItem.textContent));

  localStorage.setItem('data', JSON.stringify(listItems));
};

// GET LIST-ITEMS FROM LOCAL STORAGE
const getListItems = function () {
  const listItems = JSON.parse(localStorage.getItem('data'));

  if (!listItems) return;

  listItems.forEach((listItem) => renderListItem(listItem));
};

// EXECUTE STORING LIST-ITEMS WHEN LEAVING PAGE
window.addEventListener('unload', () => {
  saveListItems();
});

// INIT
(function onLoadDisplay() {
  localStorage.getItem('theme') === 'theme-dark'
    ? setTheme('theme-dark')
    : setTheme('theme-light');
  changeThemeImg();
  getListItems(listItems);
  updateSum();
})();
