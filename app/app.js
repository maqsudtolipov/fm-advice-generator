'use strict';

const labelID = document.getElementById('id');
const labelAdvice = document.getElementById('advice');
const btn = document.getElementById('btn');

const generateQuote = function () {
  fetch('https://api.adviceslip.com/advice')
    .then((res) => res.json())
    .then(({ slip }) => {
      labelID.innerText = slip.id;
      labelAdvice.innerText = slip.advice;
    });
};
generateQuote();

btn.addEventListener('click', generateQuote)