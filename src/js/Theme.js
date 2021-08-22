'use strict';

export const themeImg = document.querySelector('#theme-img');
export const themeBtn = document.querySelector('#theme-btn');

// MANAGE THEME IMAGES
export const changeThemeImg = () => {
  if (document.documentElement.className === 'theme-light')
    themeImg.src = 'images/icon-moon.svg';
  if (document.documentElement.className === 'theme-dark')
    themeImg.src = 'images/icon-sun.svg';
};

// STORE THEME IN LOCAL STORAGE
export const setTheme = (themeName) => {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
};

// GET THEME FROM LOCAL STORAGE
export const toggleTheme = () => {
  localStorage.getItem('theme') === 'theme-dark'
    ? setTheme('theme-light')
    : setTheme('theme-dark');
  changeThemeImg();
};
