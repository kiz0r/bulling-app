'use strict';

const name = prompt('Enter Name of person to bull');

const bullingBtn = document.querySelector('button');
const bullingArea = document.querySelector('p');

bullingBtn.onclick = () => {
  bullingArea.innerHTML += `${name}'s stupid bitch. </br>`.toUpperCase();
};
