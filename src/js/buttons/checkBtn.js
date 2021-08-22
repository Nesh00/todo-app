'use strict';

// SELECT CHECK BUTTON
export const checkBtn = function (e) {
  const checkBtn = e.target.closest('.check-btn');
  if (!checkBtn) return;

  checkBtn.classList.toggle('check-btn--active');
};
