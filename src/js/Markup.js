'use strict';

export const listGroup = document.querySelector('.list-group');

// CREATE MARKUP
export const renderListItem = function (input) {
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
