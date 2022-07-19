import { scoresBox } from './variables.js';

export default class Dynamic {
  static addNewScore(name, score) {
    const newScore = document.createElement('p');
    newScore.textContent = `${name}: ${score}`;
    newScore.setAttribute('class', 'individual-score');
    scoresBox.appendChild(newScore);
  }
}