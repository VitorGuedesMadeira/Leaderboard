import iD from './modules/createNewGame.js';
import createNewScore from './modules/createNewScore.js';
import DataClass from './modules/dataStructure.js';
import Dynamic from './modules/dynamic.js';
import setLocalStorage from './modules/localStorage.js';
import refresh from './modules/refresh.js';
import render from './modules/render.js';
import { scoresInputBtn, scoresRefresh, soundtrack } from './modules/variables.js';
import './style.css';

scoresInputBtn.addEventListener('click', async (e) => {
  e.preventDefault();
  const inputName = document.querySelector('.input-name').value;
  const inputNumber = document.querySelector('.input-number').value;
  await createNewScore(await iD, inputName, inputNumber);
  setLocalStorage();
  document.querySelector('.input-name').value = "";
  document.querySelector('.input-number').value = "";
});

scoresRefresh.addEventListener('click', async () => {
  const gettingObject = await refresh(await iD);
  DataClass.dataStructure = [...gettingObject.result];
  DataClass.dataStructure.sort(((a, b) => b.score - a.score));
  if (DataClass) { setLocalStorage(); }
  render();
});

window.addEventListener('load', () => {
  soundtrack.play();
  if (localStorage.getItem('scores')) {
    DataClass.dataStructure = JSON.parse(localStorage.getItem('scores'));
  }
  for (let i = 0; i < DataClass.dataStructure.length; i += 1) {
    const newScore = DataClass.dataStructure[i];
    Dynamic.addNewScore(newScore.user, newScore.score, i);
  }
});
