'use strict';

const themeBtn = document.querySelector('#theme-btn');
const themeImg = document.querySelector('#theme-img');
const body = document.querySelector('body');

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

// Events
window.addEventListener('DOMContentLoaded', function () {
  document.documentElement.className = localStorage.getItem('theme');
  changeThemeImg();
});

themeBtn.addEventListener('click', toggleTheme);
