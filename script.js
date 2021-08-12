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

const changeThemeImg = () => {
  if (document.documentElement.className === 'theme-light')
    themeImg.src = 'images/icon-moon.svg';
  if (document.documentElement.className === 'theme-dark')
    themeImg.src = 'images/icon-sun.svg';
};

const setTheme = (themeName) => {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
};

const toggleTheme = () => {
  localStorage.getItem('theme') === 'theme-dark'
    ? setTheme('theme-light')
    : setTheme('theme-dark');
  changeThemeImg();
};

themeBtn.addEventListener('click', toggleTheme);

const renderListItem = function (input) {
  const html = `
    <li class="list-group-item list-item-bg d-flex align-items-center list-item">
        <div class="radio-btn align-self-center"></div>
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

const updateSum = function () {
  const allItems = document.querySelectorAll('.list-item');

  sumOfListItems.textContent =
    allItems.length === 1
      ? `${allItems.length} item left`
      : `${allItems.length} items left`;
};

inputForm.addEventListener('keydown', function (e) {
  const input = e.target;

  if (e.key === 'Enter' && input.value.length >= 1) {
    renderListItem(input.value);
    input.value = '';
    updateSum();
    renderAllListItems();
  }
});

listGroup.addEventListener('click', function (e) {
  const radioBtn = e.target.closest('.radio-btn');
  if (radioBtn) {
    radioBtn.classList.toggle('radio-btn--checked');
  }
});

listGroup.addEventListener('click', function (e) {
  const closeBtn = e.target.closest('button');
  const listItem = e.target.closest('li');
  if (closeBtn) {
    listItem.remove();
    updateSum();
  }
});

// SORTING LIST-ITEMS WITH DRAG AND DROP
Sortable.create(listGroup, {
  animation: 150,
  filter: '#list-footer',
});

// LIST-FOOTER BUTTONS DISPLAY-EVENTS
const renderAllListItems = function () {
  const listItems = document.querySelectorAll('.list-item');
  listItems.forEach((listItem) => listItem.classList.remove('hidden'));

  [activeBtn, completedBtn].forEach((btn) => btn.classList.remove('active'));
  allBtn.classList.add('active');
};

allBtn.addEventListener('click', renderAllListItems);

activeBtn.addEventListener('click', function () {
  const listBtns = document.querySelectorAll('.radio-btn');

  listBtns.forEach((listBtn) => {
    const listItem = listBtn.parentElement;
    listItem.classList.remove('hidden');

    if (listBtn.classList.contains('radio-btn--checked')) {
      listItem.classList.add('hidden');
    }
  });

  [allBtn, completedBtn].forEach((btn) => btn.classList.remove('active'));
  this.classList.add('active');
});

completedBtn.addEventListener('click', function () {
  const listBtns = document.querySelectorAll('.radio-btn');

  listBtns.forEach((listBtn) => {
    const listItem = listBtn.parentElement;
    listItem.classList.remove('hidden');

    if (!listBtn.classList.contains('radio-btn--checked')) {
      listItem.classList.add('hidden');
    }
  });

  [allBtn, activeBtn].forEach((btn) => btn.classList.remove('active'));
  this.classList.add('active');
});

clearCompletedBtn.addEventListener('click', function () {
  const listBtns = document.querySelectorAll('.radio-btn');

  listBtns.forEach((listBtn) => {
    const listItem = listBtn.parentElement;

    if (listBtn.classList.contains('radio-btn--checked')) {
      listItem.remove();
    }
  });
  updateSum();
});

(function () {
  document.documentElement.classList.add('theme-dark');
  updateSum();
})();
