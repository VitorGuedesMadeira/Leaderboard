import DataClass from './modules/dataStructure.js';
import Dynamic from './modules/dynamic.js';
import setLocalStorage from './modules/localStorage.js';
import render from './modules/render.js';
import { scoresInputBtn, scoresRefresh } from './modules/variables.js';
import './style.css';

scoresInputBtn.addEventListener('click', () => {
  const inputName = document.querySelector('.input-name').value;
  const inputNumber = document.querySelector('.input-number').value;
  if (inputName !== '' && inputNumber !== '') {
    DataClass.dataStructure.push({ name: inputName, score: inputNumber });
    render();
    setLocalStorage();
  }
});

scoresRefresh.addEventListener('click', () => {
  DataClass.dataStructure = [];
  render();
});

window.addEventListener('load', () => {
  if (localStorage.getItem('scores')) {
    DataClass.dataStructure = JSON.parse(localStorage.getItem('scores'));
  }
  for (let i = 0; i < DataClass.dataStructure.length; i += 1) {
    const newScore = DataClass.dataStructure[i];
    Dynamic.addNewScore(newScore.name, newScore.score);
  }
});