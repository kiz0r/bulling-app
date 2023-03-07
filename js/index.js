'use strict';

let name = prompt('Enter Name of person to bull');

const bullingBtn = document.querySelector('button');
const bullingArea = document.querySelector('p');

function validateName(name) {}

bullingBtn.onclick = () => {
  if (name.match(/.*(ler|лер).*/gi)) {
    bullingArea.innerHTML += `I love ${name} </br>`.toUpperCase();
  } else if (name.match(/.*(kir|кир|ко|ko|kon|кон)/gi)) {
    alert('на ебале себе это напиши. даун блять.');
    name = 'Roma and Andrii';
    bullingArea.innerHTML += `${name}'re stupid bitches. </br>`.toUpperCase();
  } else if (name === 'Roma and Andrii') {
    bullingArea.innerHTML += `${name}'re stupid bitches. </br>`.toUpperCase();
  } else {
    bullingArea.innerHTML += `${name}'s stupid bitch. </br>`.toUpperCase();
  }
};
